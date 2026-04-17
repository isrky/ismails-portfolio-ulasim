---
title: 12 Sayılarla Proje
aliases: [By the Numbers, Metrics, Ölçümler]
tags: [vitrin, metrikler, sayılar, istatistik]
dil: tr
created: 2026-04-17
updated: 2026-04-17
---

# Sayılarla Proje

> [!summary]
> Projeyi somut rakamlarla özetleyen tek sayfa. Kod miktarı, test sayısı, sayfa sayısı, bileşen sayısı, altyapı maliyeti ve performans hedefleri.

## Yolculuk

| Metrik | Değer |
|--------|-------|
| Geliştirme süresi | **~7 ay** (2025 sonbaharı → 2026 ilkbaharı) |
| Ekip büyüklüğü | **1** (solo geliştirme) |
| Geliştirici | 11. sınıf lise öğrencisi |
| Bu projenin yazarı için | **İlk büyük çaplı yazılım projesi** |
| Sergilenen öğrenme modeli | Yaparken öğrenme (learn-by-doing) |
| Tersine mühendislikle keşfedilen API uç sayısı | Tüm yukarı akış ulaşım API'si |
| Araştırılan ve elenen algoritma | Dijkstra + diğer transit routing algoritmaları |
| Üretimde kullanılan algoritma | **McRAPTOR** |

## Kod ve Yapı

| Metrik | Değer |
|--------|-------|
| Frontend kaynak dosya sayısı (TS/TSX) | **~110** |
| Sayfa bileşeni (route) sayısı | **14** |
| shadcn/ui primitifi | **54** |
| Uygulama-özel React bileşeni | **~10** |
| Backend kaynak dosya sayısı (TS) | **~15** |
| Backend route modülü | **5** (`stations`, `routes`, `pharmacies`, `feedback`, `planner`) |
| Backend servis modülü | **7** (cache, denizli-api, realtime, route-geometry, planner-*) |
| Paylaşılan tip tanımları | `backend/src/types.ts` — **~30 interface/type** |

## Test

| Metrik | Değer |
|--------|-------|
| Vitest test projesi (ortam) | **3** (frontend / node / `workerd`) |
| Birim test dosyası | **10** |
| Playwright E2E spec | **3** (smoke, harita, feedback) |
| Test helper modülü | `tests/helpers/` altında yeniden kullanılabilir altyapı |
| CI kapısı | **3 adım** (typecheck + unit + e2e) |

## Ürün

| Metrik | Değer |
|--------|-------|
| Uçtan uca özellik alanı | **9** (harita, duraklar, hatlar, planlayıcı, kart, favoriler, eczaneler, dolum, geri bildirim, istatistik, hakkında) |
| Desteklenen platform | **2** (Web + Android) |
| Desteklenen tema | **2** (Açık + Koyu) |
| Arayüz dili | **1** (Türkçe) |
| Erişilebilirlik hedefi | **WCAG AA** |

## Performans

| Metrik | Hedef |
|--------|-------|
| First Contentful Paint | **< 1 s** |
| Time To Interactive | **< 2.5 s** |
| API ortalama yanıt süresi | **< 80 ms** (TR içi) |
| Cloudflare Workers CPU / istek | **< 10 ms** (free tier) |
| Ortalama bundle boyutu (gzipped) | **< 300 KB** |
| Offline planlama kapsaması | **%100** (tam veri seti cihazda) |

## Altyapı

| Bileşen | Adet / Limit |
|---------|--------------|
| Cloudflare Worker | **1** (backend) |
| KV namespace | **1** (`CACHE`) |
| R2 bucket | **1** (`DATASETS`, opsiyonel) |
| Pages project | **1** (frontend) |
| GitHub Actions workflow | **2** (`test.yml`, `planner-dataset.yml`) |
| Devbox paketi | **7** (node, jdk, gradle, android-tools, wrangler, gcloud, corepack) |
| Bağımlılık (frontend, prod) | **~60** |
| Bağımlılık (dev) | **~25** |

## Önbellek TTL Dağılımı

| Kaynak | Yaklaşık TTL |
|--------|--------------|
| İstasyonlar | Saatler |
| Hatlar | Saatler |
| Hat güzergahı / geometri | Günler |
| Planlayıcı dataset indeksi | Günler |
| Gerçek zamanlı varış | ~10 saniye |
| Nöbetçi eczaneler | ~1 saat |

## Maliyet Projeksiyonu

| Servis | Yıllık maliyet |
|--------|----------------|
| Cloudflare Pages | **$0** (sınırsız istek, ücretsiz) |
| Cloudflare Workers | **$0** (100k istek/gün'e kadar ücretsiz) |
| Cloudflare KV | **$0** (100k okuma/gün'e kadar ücretsiz) |
| Cloudflare R2 | **$0** (10 GB'a kadar ücretsiz) |
| Self-hosted Umami | Mevcut altyapıya dahil |
| Domain (opsiyonel) | **~$10/yıl** |
| **TOPLAM** | **$0 - $10 / yıl** |

## Doküman

| Vault | Dosya Sayısı | Hedef Kitle |
|-------|--------------|-------------|
| `docs/` (İngilizce) | **22 markdown** | Geliştiriciler |
| `vitrin/` (Türkçe) | **13 markdown** | CTO, işe alım, portföy |
| ADR (karar kayıtları) | **3** | Mimari karar izi |
| Root-level dokümanlar | `README.md`, `AGENTS.md`, `CLAUDE.md`, `GEMINI.md`, `tests/README.md` |

## Güvenlik Yüzeyi

| Kategori | Adet |
|----------|------|
| Kimlik doğrulama vektörü | **0** (oturum yok) |
| SQL veritabanı | **0** (SQL injection olanaksız) |
| Kullanıcı-yüklü dosya vektörü | **0** |
| Kişisel veri alanı | **0** (zorunlu) |
| Topladığımız üçüncü taraf çerezi | **0** |

## Yapay Zekâ Hazırlığı

| Dosya | İçeriği |
|-------|---------|
| `AGENTS.md` | **11 bölüm** — tüm ajanlar için kanonik kural seti |
| `CLAUDE.md` | Claude Code'a özel notlar |
| `GEMINI.md` | Gemini CLI'ya özel notlar |
| `.cursor/rules/project.mdc` | Cursor kural dosyası |

## Devamı

- [[01 Proje Özeti]] — bu rakamların arkasındaki ürün
- [[10 Öne Çıkan Yetenekler]] — rakamların sergilediği yetkinlikler
- [[Ana Sayfa]] — vitrin giriş
