export interface CardVisual {
  coverImage: string
}

const palettes = [
  { base: '#020617', glow: '#0ea5e9', line: '#38bdf8', accent: '#1d4ed8' },
  { base: '#0b1120', glow: '#3b82f6', line: '#60a5fa', accent: '#0ea5e9' },
  { base: '#030712', glow: '#2563eb', line: '#93c5fd', accent: '#0284c7' },
  { base: '#0f172a', glow: '#0ea5e9', line: '#7dd3fc', accent: '#1e40af' },
  { base: '#082f49', glow: '#38bdf8', line: '#bae6fd', accent: '#1e3a8a' },
] as const

const makeCover = (variant: number) => {
  const palette = palettes[variant % palettes.length]
  const shift = (variant % 7) * 22
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 640" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${palette.base}"/>
          <stop offset="55%" stop-color="#0b1f3a"/>
          <stop offset="100%" stop-color="#0b2447"/>
        </linearGradient>
        <radialGradient id="glowA" cx="0.2" cy="0.15" r="0.65">
          <stop offset="0%" stop-color="${palette.glow}" stop-opacity="0.45"/>
          <stop offset="100%" stop-color="${palette.glow}" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="glowB" cx="0.85" cy="0.8" r="0.6">
          <stop offset="0%" stop-color="${palette.accent}" stop-opacity="0.4"/>
          <stop offset="100%" stop-color="${palette.accent}" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="1200" height="640" fill="url(#bg)"/>
      <rect width="1200" height="640" fill="url(#glowA)"/>
      <rect width="1200" height="640" fill="url(#glowB)"/>

      <g stroke="${palette.line}" stroke-opacity="0.42" fill="none" stroke-width="2.2">
        <path d="M-40 ${130 + shift} C 220 ${80 + shift}, 370 ${210 + shift}, 640 ${170 + shift} S 1110 ${80 + shift}, 1260 ${180 + shift}"/>
        <path d="M-60 ${250 + shift} C 220 ${330 + shift}, 420 ${170 + shift}, 700 ${260 + shift} S 1080 ${340 + shift}, 1260 ${250 + shift}"/>
        <path d="M-80 ${370 + shift} C 240 ${270 + shift}, 430 ${420 + shift}, 760 ${360 + shift} S 1080 ${280 + shift}, 1260 ${390 + shift}"/>
      </g>

      <g fill="${palette.glow}" fill-opacity="0.55">
        <circle cx="${150 + shift}" cy="${135 + shift}" r="4"/>
        <circle cx="${390 + shift}" cy="${305 + shift}" r="4"/>
        <circle cx="${760 + shift}" cy="${205 + shift}" r="4"/>
        <circle cx="${1020 + shift}" cy="${360 + shift}" r="4"/>
      </g>
    </svg>`

  return `data:image/svg+xml,${encodeURIComponent(svg)}`
}

const hash = (value: string) => {
  let acc = 0
  for (let i = 0; i < value.length; i += 1) acc = (acc << 5) - acc + value.charCodeAt(i)
  return Math.abs(acc)
}

const makeVisual = (key: string): CardVisual => {
  const seed = hash(key)
  return {
    coverImage: makeCover(seed),
  }
}

const visualsByKey: Record<string, CardVisual> = {
  '1': makeVisual('1'),
  '2': makeVisual('2'),
  '3': makeVisual('3'),
  '4': makeVisual('4'),
  'dio-covid19': makeVisual('dio-covid19'),
  'untitled-game-duck': makeVisual('untitled-game-duck'),
  'stock-trader': makeVisual('stock-trader'),
  calculator: makeVisual('calculator'),
  'ball-fighting': makeVisual('ball-fighting'),
  'todo-list': makeVisual('todo-list'),
  'the-monster': makeVisual('the-monster'),
  'product-landing-page': makeVisual('product-landing-page'),
  'personal-portfolio-fcc': makeVisual('personal-portfolio-fcc'),
}

export const getCardVisual = (key: string): CardVisual => visualsByKey[key] ?? makeVisual(key)
