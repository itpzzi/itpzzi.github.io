---
title: "Construindo um Narrador com LLMs para The Sims 3"
description: "Como integrei modelos de linguagem locais (Ollama + Gemma) em um mod de C# para The Sims 3, gerando pensamentos e narrativas em tempo real."
date: "2026-05-20"
lang: "pt-BR"
translationKey: "sims3-llm-narrator"
---

## O problema

The Sims 3 tem um sistema de pensamentos simples — balões com ícones. A ideia era substituir isso por **narrativas geradas por IA** em tempo real, usando o estado do jogo como contexto.

## A solução

O mod intercepta eventos do jogo (refeição, conversa, trabalho) via hooks de C# no `.NET Framework 3.5`, formata um prompt e envia para uma API local do [Ollama](https://ollama.com) rodando o modelo **Gemma 2B**.

```csharp
var prompt = $"O personagem {sim.Name} acabou de {evento}. Gere um pensamento curto e em primeira pessoa.";
var resposta = await OllamaClient.GenerateAsync(prompt);
```

## Resultados

- Narrativas únicas por personagem com base em traits e humor
- Latência aceitável (~800ms) com modelos quantizados
- Arquitetura baseada no paper **"Generative Agents"** da Stanford

## Aprendizados

Trabalhar com LLMs em contexto restrito (jogos em tempo real) exige controle fino de **tempo de inferência**, **tamanho de contexto** e **fallback** gracioso para quando o modelo demora demais.

> Código disponível no [GitHub](https://github.com/itpzzi/NarradorPorEventosSimsPensantes).
