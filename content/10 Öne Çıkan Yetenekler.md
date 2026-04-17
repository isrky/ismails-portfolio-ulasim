---
title: 10 — Öne Çıkan Yetenekler
aliases: [Skills, Yetkinlikler, Highlighted Skills]
tags: [vitrin, yetenekler, skills, portföy]
dil: tr
created: 2026-04-17
updated: 2026-04-17
---

# Öne Çıkan Yetenekler

> [!summary]
> Bu proje, bir **lise öğrencisinin yedi ayda solo olarak** birden fazla alanda olgunlaşmış mühendislik yetkinliklerini ortaya koymasını sergiler: modern web geliştirme, uç bilişim, algoritma araştırması, tersine mühendislik, test disiplini, mobil paketleme, DevOps ve ürün düşüncesi.

## Tek Bakışta Yetkinlikler

| Alan | Sergilenen Yetkinlikler |
|------|-------------------------|
| **Frontend** | React 18, TypeScript strict, Vite, Tailwind v4, shadcn/ui, Radix, Leaflet, React Router, RHF + Zod |
| **Backend** | Hono, Cloudflare Workers, `workerd`, KV/R2, CORS, rate limiting, cache stratejisi |
| **DevOps / Altyapı** | Cloudflare Pages, Workers, Wrangler, GitHub Actions, Devbox (Nix), GitOps |
| **Algoritma** | Dijkstra, **McRAPTOR** (Multi-criteria Round-Based Public Transit Routing), dataset derleme ve flat-array indeksleme |
| **Tersine Mühendislik** | Resmi (dokümantasyonsuz) API uçlarının keşfi, sözleşme çıkarımı, TypeScript tip modellemesi |
| **Test** | TDD, Vitest workspaces, Playwright, MSW, `@cloudflare/vitest-pool-workers` |
| **Mobil** | Capacitor 8, Android SDK 36, Gradle, APK build pipeline |
| **Mimari** | Edge-first, önbellek katmanlama, CI'da veri derleme, dataset manifest + integrity |
| **Kalite** | Biome, strict typing, TDD disiplini, kod inceleme pratikleri |
| **Ürün & UI/UX** | UX kararları, kullanıcı senaryoları, KPI belirleme, tipografi, renk teorisi, erişilebilirlik |
| **Analitik** | Self-hosted Umami, cookieless + PII'siz telemetri tasarımı |
| **Lokalizasyon** | Çift dilli mimari (TR UI + EN kod), kültürel hassasiyet |

## Bu Yetkinliklerin Kazanılma Biçimi

Bu yetkinlikler **geleneksel bir kursta veya staj programında değil, proje üretirken** kazanıldı. Yedi ay süren süreçte her engel yeni bir öğrenme fırsatına dönüştü:

| Engel | Kazanılan Yetkinlik |
|-------|---------------------|
| Resmi API dokümante değil | **Tersine mühendislik** + API sözleşmelerini TS tiplerine dökme |
| İlk UI tasarımı yetersizdi | **UI/UX prensipleri** (tipografi, renk, bilişsel yük, erişilebilirlik) |
| "Nasıl Giderim?" yoktu | **Transit routing algoritmaları** — Dijkstra'dan McRAPTOR'a |
| Şehir yoğunluğunda maliyet endişesi | **Cloudflare ekosistemi** (Pages, Workers, KV, Pages Functions) |
| Gizlilik + analitik gerilimi | **Cookieless, self-hosted Umami** kurulumu |
| CPU bütçesi | **Stale-while-revalidate önbellek + CI'da dataset derleme** |
| Web + Android parite | **Capacitor 8** ile tek kod tabanı stratejisi |

> [!tip] Kendi kendine öğrenme sinyali
> Her satır bir öğrenme hikayesidir. Bu proje, **karmaşık bir konuya eğitimsel destek olmadan, araştırarak ve uygulayarak ulaşabilme yetkinliğini** doğrudan belgeler.

## Derinlik — Üç Alanda İnceleme

### 1. Modern Frontend Mühendisliği

- **TypeScript strict mode** tüm kod tabanında — `any` kullanılmıyor.
- **React 18** concurrent özellikler (Suspense, transitions) bilinçli kullanım.
- **Vite 7** üzerinde HMR ve bundle splitting.
- **Tailwind CSS v4**'ün CSS-first yaklaşımıyla tema sistemi.
- **shadcn/ui** ile fork edilebilir UI primitifleri üzerinde markalaşma.
- **Leaflet** ile etkileşimli harita, cluster optimizasyonu.
- **React Router** v6 üzerinde Türkçe kebab-case URL stratejisi.
- **react-hook-form + zod** ile tip güvenli formlar.

### 2. Uç (Edge) Backend Mühendisliği

- **Hono** üzerinde minimal, hızlı API.
- **Cloudflare Workers** free-tier 10 ms CPU bütçesinde üretim kalitesi.
- **KV önbellek** ile stale-while-revalidate deseni.
- **R2** ile CI'da derlenmiş veri kümelerinin yayını.
- **Service Binding** ile Pages Functions → Worker iç mesh üzerinden çağrı.
- **Rate limiting** (IP bazlı, KV üzerinden).
- **Integrity hash** ile veri bütünlüğü doğrulama.

### 3. Test ve Kalite Disiplini

- **Test-Driven Development** — tüm davranış değişiklikleri test-first.
- **Vitest Workspaces** ile üç ayrı test ortamı (jsdom, node, `workerd`).
- **Playwright** ile E2E; stublanmış backend.
- **Biome** ile birleşik lint + format (Rust, hızlı).
- **Yeniden kullanılabilir test helper'ları** ile boilerplate'siz test yazımı.
- **CI/CD** üç basamaklı: typecheck → unit → e2e.

## Yumuşak Beceriler

| Beceri | Kanıt |
|--------|-------|
| **Kendi kendine öğrenme** | Yedi ayda sıfırdan: Cloudflare Workers, RAPTOR ailesi, UI/UX, TDD, tersine mühendislik |
| **Azim ve sabır** | İlk UI tasarımını çöpe atıp yeniden başlama cesareti |
| **Tasarım düşüncesi** | Ürün hikayesi, UX kararları, kullanıcı senaryoları |
| **Teknik yazım** | İki dilde, iki hedef kitle için tam belge kasaları |
| **Karar alma disiplini** | ADR'ler ile dokümante edilmiş mimari seçimler |
| **İletişim** | Anlatımcı README + AGENTS.md + bu vitrin |
| **Öğrenme hızı** | Cloudflare Workers + `workerd` + Capacitor + Biome — hepsi modern ve hızlı öğrenilmiş |
| **Ürün duyarlılığı** | Özellikler sorunu çözer; "teknoloji için teknoloji" yok |
| **Sivil sorumluluk** | Yerel bir şehre, reklamsız ve ücretsiz, gerçek bir sorun çözümü sunma motivasyonu |

## Endüstri Standartlarına Hakimiyet

| Standart | Hakimiyet |
|----------|-----------|
| WCAG AA | Bileşen seviyesinde uygulanıyor |
| Core Web Vitals | Hedeflendi ve izlendi |
| OWASP Top 10 | Saldırı yüzeyi analiz edildi (bkz. [[08 Güvenlik ve Gizlilik]]) |
| KVKK / GDPR | Veri minimizasyonu ile yapısal uyum |
| Semantic Versioning | Paketler kilitli ve disiplinli |
| Conventional Commits | Commit mesajları disiplinli |

## Platform Mühendisliği

Proje, platform seviyesinde düşünmeyi de sergiler:

- **Tekrarlanabilir dev env** (Devbox).
- **Tek araç lint/format** (Biome).
- **Otomatik APK pipeline** (Android Studio gerekmez).
- **AI-ajan dostu doc yapısı** (`AGENTS.md`, `CLAUDE.md`, Cursor rules).
- **Zamanlanmış dataset pipeline'ı** (`planner-dataset.yml`).

## Pragmatik Tercihler

> [!quote]
> "En iyi kod, yazmadığım koddur. En iyi servis, çökmeden çalışan servistir. En iyi mimari, anlaşılabilir olandır."

Proje, **overengineering'ten kaçınan, ama gerektiğinde derinleşen** bir karakter sergiler:

- Küçük uygulama için Redux ekle**mez**.
- API'yi GraphQL yap**maz**.
- Kullanıcı hesabı iste**mez**.
- Ama: veri kümesi derleme pipeline'ı, CI/CD, test disiplini, edge mimarisi — gerektiğinde derinleşir.

## Bu Proje Bir İşverene Ne Söyler?

> [!check] Kanıt Kuvveti
> - **Tam döngü mühendislik**: fikir → tersine mühendislik → tasarım → backend → frontend → mobil → DevOps → belge.
> - **Modern stack hakimiyeti**: 2025-2026 seviyesinde araçlar.
> - **Disiplinli süreç**: TDD, CI/CD, ADR'ler.
> - **İşletme bilinci**: aylık **sıfır dolar** maliyetle çalışan üretim sistemi.
> - **Kullanıcı odaklılık**: gerçek bir şehir problemi çözümü.
> - **Erken yaş potansiyeli**: **11. sınıf** öğrencisi olarak **ilk büyük çaplı projede** bu olgunluk.
> - **Öğrenme refleksi**: her engele *"bunu nasıl çözerim?"* ile yaklaşan, araştıran ve uygulayan bir profil.
> - **İletişim**: iki dilde, iki kitleye yönelik doküman kalitesi.

## Devamı

- [[01 Proje Özeti]] — 60 saniyelik sunum
- [[12 Sayılarla Proje]] — somut metrikler
- [[11 Süreç ve İşbirliği]] — takıma entegrasyon sinyalleri
