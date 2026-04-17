---
title: 01 — Proje Özeti
aliases: [Executive Summary, Proje Özeti]
tags: [vitrin, özet, yönetici-özeti]
dil: tr
created: 2026-04-17
updated: 2026-04-17
---

# Proje Özeti

> [!tldr] 60 saniyelik özet
> Denizli halkının şehir içi toplu taşımayı daha hızlı ve daha sade kullanabilmesi için geliştirdiğim, **kullanıcı için ücretsiz bir web ve Android uygulamasıdır**. Resmi sistemin önünde bir **uç proxy** olarak çalışır; veriyi önbellekler, zenginleştirir ve daha iyi bir deneyimle sunar.
>
> Bu proje **ilk büyük çaplı yazılım projemdir**; yedi ay boyunca, bir 11. sınıf öğrencisi olarak, karşıma çıkan her engeli araştırıp uygulayarak **yaparken öğrendim**. Hikayenin tamamı için → [[02 Ürün Hikayesi]].
>
> Kaynak kodu şu an için kapalıdır; bu belge yetkili inceleyiciler için hazırlanmıştır.

## Nedir?

- **Web uygulaması**: React 18 tabanlı tek sayfa uygulaması (SPA), Cloudflare Pages üzerinden yayında.
- **Android uygulaması**: Aynı web kodunu Capacitor 8 ile paketleyen doğal kabuk (shell).
- **Backend**: Hono framework'ü üzerinde koşan, Cloudflare Workers'a dağıtılmış uç API.

## Kimler için?

| Kullanıcı | Temel İhtiyacı |
|-----------|----------------|
| Günlük yolcular | Hızlı varış bilgisi + favori duraklar |
| Ziyaretçiler | Anlaşılır harita ve rota planlama |
| Arada sırada binenler | Bakiye yüklenebilecek noktalar |
| Şehirli | Güncel nöbetçi eczane bilgisi |

## Neden değerli?

- **Erişilebilirlik**: Kullanıcı için ücretsiz; kayıt ve kimlik doğrulama gerektirmez.
- **Hız**: Uç bilişim sayesinde Türkiye'deki kullanıcılara **50 ms altı gecikme**.
- **Güvenilirlik**: Yukarı akış (upstream) servisi yavaşladığında bile önbellek sayesinde çalışmaya devam eder.
- **Çevrimdışı çalışabilirlik**: Rota planlayıcı, internetsiz ortamda da hizmet verecek biçimde tasarlandı.
- **Gizlilik**: PII toplamaz, kullanıcı hesabı istemez.

## Kapsam

> [!check] Kapsama dahil olanlar
> - Canlı araç konumları, hat ve durak listeleri
> - "Nasıl giderim?" çok modlu rota planlama
> - Nöbetçi eczaneler ve bakiye dolum noktaları
> - Favori, bildirim, kullanım istatistikleri

> [!x] Kapsam dışı
> - Ödeme ve biletleme
> - Kullanıcı hesapları ve kimlik doğrulama
> - Üçüncü taraflarla kişisel veri paylaşımı

## Sunduğu Teknik Sinyaller

| Sinyal | Açıklama |
|--------|----------|
| Tersine mühendislik | Resmi uygulamanın dokümante olmayan API uçlarının keşfi ve belgelenmesi |
| Algoritma araştırması | Dijkstra → McRAPTOR yolculuğu: senaryoya en uygun transit routing algoritmasının seçimi |
| Mimari olgunluk | Edge-first + önbellek katmanlı, ayrık CI pipeline ile yeniden üretilebilir dataset üretimi |
| Kalite disiplini | TDD zorunlu, üç ayrı test ortamı (jsdom + node + `workerd`) + E2E (Playwright) |
| İşletme bilinci | Sıfır dolar aylık maliyet; her endpoint 10 ms CPU limiti altında |
| Ürün bütünlüğü | Web ve Android tek kod tabanı; UI paritesi garantili |
| Yerel dil hassasiyeti | UI tamamen Türkçe; kod İngilizce — uluslararası işbirliğine hazır |
| Kendi kendine öğrenme | Yedi aylık süreçte Cloudflare ekosistemi, RAPTOR ailesi, UI/UX prensipleri sıfırdan öğrenildi |

## Durum

- Aktif geliştirme — yedi ayda bugünkü sürüme ulaştı.
- Web ve Android paritede.
- CI/CD üzerinden sürekli yayın.
- **Kaynak kodu**: kapalı (şu an için). Kod incelemesi talep üzerine, birebir oturumla yapılabilir.

## Devamı

- [[02 Ürün Hikayesi]] — problem → çözüm → değer
- [[04 Mimari Bakış]] — sistemin tek sayfalık görünümü
- [[10 Öne Çıkan Yetenekler]] — projenin sergilediği yetkinlikler
