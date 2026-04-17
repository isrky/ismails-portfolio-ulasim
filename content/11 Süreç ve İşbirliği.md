---
title: 11 — Süreç ve İşbirliği
aliases: [Process, Collaboration, Workflow]
tags: [vitrin, süreç, işbirliği, ai, devbox]
dil: tr
created: 2026-04-17
updated: 2026-04-17
---

# Süreç ve İşbirliği

> [!summary]
> Ortam **Devbox** ile pinlenmiştir — "benim makinemde çalışıyor" problemi yoktur. Geliştirme döngüsü TDD temelli, kod stili Biome ile otomatiktir. Proje, **yapay zekâ kodlama ajanları** ile verimli çalışacak şekilde belgelenmiştir.

## Geliştirme Ortamı — Devbox

`devbox.json` ile Nix paketleri üzerinden tüm araç zinciri sabitlenmiştir:

- Node 22
- JDK 21
- Gradle
- Android tools (`sdkmanager`, `adb`)
- Wrangler
- Google Cloud SDK

```bash
devbox shell          # ortama gir
devbox run <script>   # pinlenmiş komutları çalıştır
```

**Yeni bir ekip üyesi**, projeyi klonlar, `devbox shell` yazar, `devbox run install:all` ve sonra `devbox run dev:all` komutlarıyla saniyeler içinde çalışır duruma gelir.

## Günlük Döngü

```mermaid
flowchart LR
  A[Ticket oku] --> B[Başarısız test yaz]
  B --> C[Kısa kod ile geçir]
  C --> D[Refaktör]
  D --> E[Typecheck + Test + Lint]
  E --> F[Küçük commit]
  F --> G[Push / PR]
  G --> H[CI onayı]
```

## Script Kataloğu

Tüm günlük görevler `devbox run ...` komutlarıyla:

| Kategori | Komutlar |
|----------|----------|
| Geliştirme | `dev:all`, `dev:front`, `dev:back` |
| Build | `build:front`, `build:back`, `workflow:apk` |
| Test | `test`, `test:watch`, `test:coverage`, `test:e2e` |
| Kalite | `typecheck`, `lint`, `check`, `check:fix` |
| Android | `android:debug`, `android:release`, `android:install` |

## Sürüm Kontrolü

- Git + GitHub.
- `main` her zaman deploy edilebilir.
- Kısa ömürlü `feat/*`, `fix/*`, `chore/*` branch'leri.
- Küçük, anlamlı commit'ler.
- Her PR'da CI'nın üç basamağı çalışır (typecheck, unit, e2e).

## Kod İnceleme Kültürü

Proje küçük ve solo başlamış olsa da, **kod inceleme için hazır**:

- Commit mesajları niyet odaklı (İngilizce, imperative).
- PR açıklamaları "why", "what", "how" yapısında.
- Kritik değişiklikler için ADR (`docs/decisions/`).
- Testler canlı spec olarak servis edilir.

## Yapay Zekâ Destekli Geliştirme

Proje, **yapay zekâ kodlama ajanları ile iyi çalışacak şekilde** organize edildi:

| Dosya | İçeriği |
|-------|---------|
| `AGENTS.md` | Tüm ajanlar için kanonik kılavuz |
| `CLAUDE.md` | Claude Code için tool-specific notlar |
| `GEMINI.md` | Gemini CLI için notlar |
| `.cursor/rules/project.mdc` | Cursor için kural dosyası |

**Sinyaller**:

- Ajanlar TDD disiplinini otomatik uygular.
- Nerede test yazılacağı açık (projeye göre).
- Devbox zorunluluğu, komut standardizasyonunu getirir.
- Sharp edge'ler önceden belgelenmiş.

## Dokümantasyon Katmanları

Proje **iki ayrı dokümantasyon vault'u** sunar:

| Vault | Hedef Kitle | Dil |
|-------|-------------|-----|
| `docs/` | Geliştiriciler | İngilizce |
| `vitrin/` | CTO, işe alım, portföy | Türkçe |

Her iki vault da **Obsidian uyumlu** — wiki-link'ler, frontmatter, callout'lar, Mermaid diyagramları ile.

Ayrıca:

- `README.md` — hızlı başlangıç
- `tests/README.md` — test altyapısı kanonik kılavuzu
- Inline JSDoc (gerekli yerlerde)

## Commit Güvenliği

| Kural | Sebep |
|-------|-------|
| `.env` committed değil | Sır sızması önlenir |
| `keystore` committed değil | Android imza güvenliği |
| `.only` / `.skip` testte committed değil | CI'da atlama önlenir |
| `node_modules/` ve build artifact'leri committed değil | Repo boyutu |

## Şeffaflık

- Kararlar ADR'lerde yazılı (`docs/decisions/`).
- Hata yakalanırsa CI'da görünür; Cloudflare dashboard'da gözlemlenebilir.
- Bağımlılık geçmişi `package-lock.json` ile izlenir.
- Kaynak kodu şu an kapalıdır; kod incelemesi yetkili kişilerle birebir planlanabilir.

## Solo'dan Takım Ölçeğine

Proje bugün solo geliştirilse de, **takım ölçeğinde** sürtünmesiz çalışacak biçimde hazırlanmıştır:

- Devbox → herkes aynı araç zincirinde.
- TDD → davranışlar testlerle kilitlenir, yeniden öğrenme yok.
- Biome → stil tartışmaları yok, tek araç karar veriyor.
- AI doc → yeni üye (insan veya ajan) hızla bağlam edinebilir.

## Devamı

- [[06 Mühendislik Kalitesi]] — test disiplini
- [[10 Öne Çıkan Yetenekler]] — sergilenen süreç pratikleri
- [[12 Sayılarla Proje]] — somut metrikler
