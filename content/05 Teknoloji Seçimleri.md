---
title: 05 — Teknoloji Seçimleri
aliases: [Tech Stack, Teknoloji Kararları]
tags: [vitrin, teknoloji, stack, kararlar]
dil: tr
created: 2026-04-17
updated: 2026-04-17
---

# Teknoloji Seçimleri

> [!summary]
> Her katmanda az sayıda, olgun ve birlikte iyi çalışan araç seçildi. Temel ilke: **boilerplate'i azalt, anlamı artır**.

## Bir Bakışta

| Katman | Seçim | Neden? |
|--------|-------|--------|
| **Dil** | TypeScript (strict) | Baştan sona tip güvenliği, IDE desteği, agresif refaktör |
| **Frontend** | React 18 + Vite 7 | Olgun ekosistem, sub-saniye yeniden derleme |
| **Stil** | Tailwind CSS v4 | Hızlı prototipleme + tutarlı token sistemi |
| **UI Kütüphanesi** | shadcn/ui (Radix) | Repo içinde yaşayan, fork edilebilir bileşenler |
| **Harita** | Leaflet | Açık kaynak, hafif, OSM dostu |
| **Router** | `react-router-dom` v6 | Standart, tanıdık, yeterli |
| **Formlar** | `react-hook-form` + `zod` | Performanslı + tip-güvenli doğrulama |
| **Backend** | Hono | Cloudflare-native, hızlı, minimal |
| **Edge Runtime** | Cloudflare Workers | Global, ücretsiz katman, cold start yok |
| **Önbellek** | Cloudflare KV | Uç dağıtımlı, milisaniye okuma |
| **Depolama** | Cloudflare R2 | S3-uyumlu, egress ücretsiz |
| **Mobil** | Capacitor 8 | Web kodunu native kabukta paketler |
| **Lint/Format** | Biome 1.9 | Hızlı (Rust), birleşik araç |
| **Test** | Vitest 2 workspaces | Üç ayrı ortam; hepsi tek config |
| **E2E** | Playwright | Modern, kararlı, paralel |
| **Env** | Devbox (Nix) | Tekrarlanabilir geliştirme ortamı |

## Stratejik Kararlar

### TypeScript — Strict Mode

Tüm proje strict TypeScript. **Hiçbir yerde `any` yok**, hata mesajları tip seviyesinde yakalanıyor. Geliştirici verimliliğini kat kat artırıyor.

### Cloudflare Workers — Uç API

Geleneksel "API sunucusu" yerine Workers seçildi. Avantajlar:

- **Maliyet**: Ücretsiz katmanda rahat çalışır.
- **Hız**: Türkiye'deki kullanıcıya fiziksel olarak yakın uç düğümlerden servis.
- **Dayanıklılık**: Cloudflare'ın altyapısı arkasında — tek sunucu yok.
- **Basitlik**: DevOps ihtiyacı minimum; sadece `wrangler deploy`.

### shadcn/ui — Fork Edilebilir Bileşenler

Klasik bir UI kütüphanesi (MUI, Chakra) yerine **shadcn/ui** seçildi:

- Bileşenler repo içinde yaşar; kara kutu yok.
- Radix ile erişilebilirlik hazır.
- Tailwind token'ları ile markalaştırma kolay.
- Upgrade politikası açık: CLI ile regenerate.

Karar ayrıntısı için geliştirici vault'unda: `docs/decisions/ADR-002`.

### Capacitor — Tek Kod Tabanı

React Native ya da Flutter yerine **Capacitor** seçildi:

- **Paralel kod tabanı yok**: UI'yi iki kez yazmak gerekmiyor.
- **Dağıtım hızı**: Web'de yapılan her iyileştirme bir sonraki APK'da otomatik.
- **Native yetenekler**: `@capacitor/geolocation`, `@capacitor/share`, vs. plugin ekosistemi yeterli.

Karar ayrıntısı için: `docs/decisions/ADR-003`.

### Vitest Workspaces — Üç Test Ortamı

Tek bir test runner'da üç farklı ortam:

| Proje | Ortam | Test hedefi |
|-------|-------|-------------|
| `frontend` | jsdom | React bileşenleri + sayfalar |
| `node` | node | Paylaşılan yardımcılar |
| `backend` | `workerd` | Hono route'ları, gerçek Cloudflare runtime |

Bu ayrım, **yanlış ortamda yanlış test yazılmasını engeller** ve `workerd` ile koşan backend testleri gerçek üretim ortamına çok yakındır.

### Biome — Lint + Format Tek Araçta

ESLint + Prettier yerine Biome (Rust ile yazılmış):

- Tek yapılandırma dosyası
- 10x+ hız farkı
- Tek komutla hem lint hem format: `biome check --write`

### Devbox — Tekrarlanabilir Ortam

`devbox.json` ile herkesin Nix paketleri üzerinden aynı araç sürümlerini kullanması garanti altına alınır: Node 22, JDK 21, Gradle, Wrangler, Android tools. **"Benim makinemde çalışıyor" problemi yok**.

## Kasıtlı Olmayanlar

Bazı popüler teknolojiler **bilinçli olarak** seçilmedi:

| Teknoloji | Neden Değil? |
|-----------|--------------|
| Next.js | Statik SPA ihtiyacı için fazla karmaşık; Cloudflare Pages yeterli |
| Redux / Zustand | Uygulama yeterince küçük; Context + custom hooks bol |
| GraphQL | REST tek yönlü veri akışı için yeterli; araç fazladan karmaşıklık getirirdi |
| Firebase | Vendor lock-in; Cloudflare zaten tüm gereksinimleri karşılıyor |
| React Native | UI paritesi ve ekip maliyeti; Capacitor daha az sürtünme |

## Bağımlılık Disiplini

- Her bağımlılık açıkça gerekçeli.
- Güncelleme zamanı: `devbox run install:all` + `devbox run typecheck && devbox run test`.
- Kritik yolda (örn. backend hot path) yeni bağımlılık eklerken CPU bütçesi kontrol edilir.

## Devamı

- [[04 Mimari Bakış]] — seçimlerin birbirine bağlandığı büyük resim
- [[06 Mühendislik Kalitesi]] — kod kalitesi süreçleri
- [[09 Mobil Deneyim]] — Capacitor kararının sonuçları
