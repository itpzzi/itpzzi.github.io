param(
  [switch]$SkipChecks,
  [switch]$Force
)

$ErrorActionPreference = 'Stop'
$PSNativeCommandUseErrorActionPreference = $true

Write-Host '== GitHub Pages publish helper ==' -ForegroundColor Cyan
Write-Host "Repository: $(git remote get-url origin)"
Write-Host "Branch: $(git branch --show-current)"

if (-not $SkipChecks) {
  Write-Host 'Running quality gates...' -ForegroundColor Yellow
  npm run lint
  npm run type-check
  npm run build
}

$statusOutput = git status --porcelain
$effectiveStatus = $statusOutput | Where-Object { $_ -notmatch '\.data/content/contents\.sqlite$' }

if ($effectiveStatus) {
  Write-Host 'Local changes detected. Commit before publishing.' -ForegroundColor Yellow
  Write-Host 'Suggested commands:' -ForegroundColor Yellow
  Write-Host '  git add -A'
  Write-Host '  git commit -m "chore: publish portfolio"'
  exit 1
}

$currentBranch = git branch --show-current

Write-Host 'Pushing current branch to origin/main...' -ForegroundColor Green
if ($Force) {
  git push --force origin "$($currentBranch):main"
} else {
  git push -u origin "$($currentBranch):main"
}

Write-Host 'Publish push completed.' -ForegroundColor Green
