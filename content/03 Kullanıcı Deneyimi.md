---
title: 03 Kullanıcı Deneyimi
aliases: [UX, Kullanıcı Deneyimi, Arayüz]
tags: [vitrin, ux, ui, tasarım]
dil: tr
created: 2026-04-17
updated: 2026-04-17
---

# Kullanıcı Deneyimi

> [!summary]
> Tasarım felsefesi: **her ekran tek bir soruya cevap verir**. Bileşenler shadcn/ui üzerine inşa edilmiş, `oklch` renk sistemi ile koyu/açık temalar arasında tutarlıdır. Mobil öncelikli, klavye ve ekran okuyucu erişilebilir.

## Tasarım İlkeleri

| İlke | Uygulama |
|------|----------|
| **Tek soruya cevap** | Her sayfa tek bir ana görevi (örn. "durak listele") yapar |
| **Hız hissi** | Skeleton loader'lar; anlık optimistik geri bildirim |
| **Dokunmatik öncelik** | Minimum 44×44 px dokunma hedefi |
| **Koyu/açık tema** | `oklch` tabanlı token sistemi; `.dark` class ile anlık geçiş |
| **Türkçe yerelleştirme** | Terimler doğal ("Nasıl Giderim", "Duraklar", "Hatlar") |
| **WCAG AA** | Radix UI primitifleri + yeterli kontrast oranları |

## Ana Ekranlar

### Ana Sayfa
- Favori duraklar ve hatlar bir bakışta
- Sistem durumu ve hızlı kısayollar
- Son aranan konumlar

### Harita
- Leaflet tabanlı etkileşimli harita
- Canlı araç konumları
- Durak tıklama → anlık varış bilgisi
- Akıllı küme (cluster) optimizasyonu

### Duraklar
- Arama ve konuma göre sıralama
- Her durakta o an yaklaşan araçlar
- Favoriye ekleme tek tıkla

### Hatlar
- Hat listesi + arama
- Hat detayında güzergah çizgisi, durak sırası, ortalama sefer süresi

### Nasıl Giderim?
- Kalkış ve varış noktası seçimi
- Çok modlu (yürüme + otobüs) önerilen güzergahlar
- Aktarma sayısı, yürüme mesafesi, toplam süre
- Canlı veri varsa bekleme süreleri otomatik güncellenir

### Kart
- Ulaşım kartı bakiye sorgulama
- Birden fazla kart kaydetme
- Otomatik bakiye kontrolü bildirimleri

### Favoriler
- Sık kullanılan durak ve hatlar
- Hızlı erişim kısayolları

### Nöbetçi Eczaneler
- Günün eczaneleri, ilçe bazlı filtre
- Adres + telefon + haritada konum

### Dolum Noktaları
- Bakiye yüklenebilecek noktaların haritası
- Konuma en yakından sıralı liste

### Geri Bildirim
- Tek ekranda dört kategori: öneri, hata, şikâyet, diğer
- Opsiyonel isim/e-posta
- Spam korumalı (IP bazlı hız sınırlama)

### İstatistikler
- Basit grafiklerle şehir içi hareketlilik
- Recharts tabanlı, erişilebilir gösterim

## Hareket Tasarımı (Motion)

- `tw-animate-css` ile hafif, anlamlı geçişler.
- Hareket azaltma (`prefers-reduced-motion`) tercihi desteklenir.
- Her animasyon bir bilgi taşır: yüklenme, başarı, hata, odak.

## Erişilebilirlik

| Konu | Yaklaşım |
|------|----------|
| Klavye navigasyonu | Radix UI primitifleri hazır |
| Ekran okuyucu | Doğru ARIA rolleri; anlamlı etiketler |
| Renk kontrastı | WCAG AA seviyesinde |
| Dokunmatik boyut | ≥ 44×44 px |
| Hareket azaltma | Sistem ayarına uyum |

## Mobil Öncelik

- Yerleşimler önce dar ekranda tasarlandı, sonra genişletildi.
- Harita sayfası parmakla rahat sürüklenir.
- Alt kenardan etkileşime açık kontroller.

## Tutarlılık

Tüm uygulama aynı tasarım dili üzerinde çalışır:

- **shadcn/ui** primitifleri (Button, Dialog, Tabs, vs.)
- **Radix UI** erişilebilirlik davranışı
- **Tailwind v4** token sistemi
- Tek bir tipografi ölçeği, tek bir renk paleti

## Devamı

- [[04 Mimari Bakış]] — bu ekranları besleyen sistem
- [[05 Teknoloji Seçimleri]] — UI teknolojisinin arkasındaki kararlar
- [[09 Mobil Deneyim]] — aynı UI'ın Android tarafı
