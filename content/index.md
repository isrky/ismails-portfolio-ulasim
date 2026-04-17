---
title: Ana Sayfa
aliases: [Vitrin, Showcase, Tanıtım]
tags: [vitrin, sunum, portföy, proje/ulasim20]
dil: tr
created: 2026-04-17
updated: 2026-04-17
---

# Denizli Akıllı Ulaşım Portalı

> Bir **11. sınıf öğrencisinin** yedi ay boyunca, şehrin resmi toplu taşıma sistemini sıfırdan daha iyi yazmayı hedefleyerek geliştirdiği, sıfır dolar sunucu maliyetiyle çalışan bir web ve Android uygulaması.
> **React + TypeScript + Cloudflare Workers + Capacitor** üzerine kurulu.

---

> [!info] Bu belgeler kimin için?
> Bu **vitrin** dokümantasyonu geliştiriciler için değil; **CTO'lar, teknik karar vericiler, işe alım uzmanları ve portföy inceleyenler** içindir. Projeyi üç farklı zoom seviyesinde tanıtır: ürün, mühendislik, kişi.


> [!quote] Kısa öykü
> Yaklaşık yedi ay önce öğrenci arkadaşlarımın Denizli'nin akıllı ulaşım portalının ne kadar kullanışsız olduğundan şikayet etmesiyle kendime bir soru sordum: **Sadece şikayet etmek yerine, bir 11. sınıf öğrencisi olarak bu sistemi baştan yazabilir miydim?** Bugün geldiğim nokta, bu belgenin konusudur.
>
> Tam hikaye için → [[02 Ürün Hikayesi]]

> [!warning] Kaynak kodu
> Proje **şu an için kapalı kaynaklıdır**. Bu vitrin yalnızca yetkili inceleyicilerle paylaşılmak üzere hazırlanmıştır. Kod tabanı canlı olarak incelenmek istenirse, birebir kod incelemesi planlayabiliriz.

---

## Tek Cümlelik Özet

**Denizli halkının toplu taşımaya ulaşmak için her gün kullanabileceği, resmi sistemden daha hızlı ve daha sade bir alternatif arayüz.**

## Hızlı Bakış

| Konu | Kısaca |
|------|--------|
| **Ürün** | Şehir içi ulaşım + otobüs/tramvay canlı konum + nasıl giderim + nöbetçi eczane + dolum noktaları |
| **Platform** | Web (SPA) + Android (Capacitor) |
| **Dil/Stack** | TypeScript (strict), React 18, Hono, Cloudflare Workers |
| **Altyapı** | Cloudflare Pages + Workers + KV + R2 |
| **Maliyet** | Tamamen ücretsiz katmanda çalışacak şekilde tasarlandı |
| **Test Disiplini** | Test-Driven Development (RED → GREEN → REFACTOR) |
| **UI Dili** | Türkçe · **Kod & Commit** | İngilizce |
| **Kaynak** | Kapalı kaynak (şu an için) |
| **Geliştirme süresi** | ~7 ay, solo geliştirme |
| **Geliştirici** | Lise öğrencisi (11. sınıf), ilk büyük çaplı yazılım projesi |
| **Aylık altyapı maliyeti** | **$0** (Cloudflare ücretsiz katman) |

---

## İçindekiler

### 1. Ürün
- [[01 Proje Özeti]] — 60 saniyede proje
- [[02 Ürün Hikayesi]] — problem, çözüm, değer
- [[03 Kullanıcı Deneyimi]] — öne çıkan ekranlar ve akışlar

### 2. Mühendislik
- [[04 Mimari Bakış]] — tek sayfada sistem resmi
- [[05 Teknoloji Seçimleri]] — neden bu stack?
- [[06 Mühendislik Kalitesi]] — test disiplini, CI, kod kalitesi
- [[07 Performans ve Ölçek]] — uç bilişim ve 10 ms CPU bütçesi
- [[08 Güvenlik ve Gizlilik]] — PII'siz tasarım

### 3. Platform ve Süreç
- [[09 Mobil Deneyim]] — Capacitor ile tek kod tabanı
- [[11 Süreç ve İşbirliği]] — Devbox, GitOps, AI destekli geliştirme

### 4. İnsan
- [[10 Öne Çıkan Yetenekler]] — bu projenin sergilediği yetkinlikler
- [[12 Sayılarla Proje]] — dosyalar, testler, kapsama

---

## Bir Dakikalık Sunum

> [!quote]
> Denizli Akıllı Ulaşım Portalı, resmi ulaşım servisinin önüne konumlandırılmış, önbellekleyen ve zenginleştiren bir **uç (edge) proxy** üzerine kurulu modern bir React uygulamasıdır.
>
> Resmi API'nin dokümante olmayan uçları **tersine mühendislikle keşfedildi**. Rota planlama için **McRAPTOR** algoritması seçildi ve CI'da derlenen düz tipli bir dataset ile servis ediliyor.
>
> Cloudflare Workers'ın **10 milisaniye CPU limiti**, her mimari kararı şekillendirir: ağır hesaplamalar CI'da önceden derlenir, sıcak yollar yalnızca KV önbelleğine dokunur, gerçek zamanlı veriler kısa TTL ile sunulur.
>
> Aynı React kod tabanı **Capacitor 8** ile Android'e paketlenir — paralel iki kod tabanı yok, UI eşitliği garantili.
>
> Test altyapısı **Vitest workspaces** (frontend + node + `workerd`) ve **Playwright** üzerine kuruludur. Her davranış değişikliği **başarısız test → yeşil test → refaktör** döngüsünden geçer.
