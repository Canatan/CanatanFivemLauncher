# Canatan GTA5 FiveM Launcher

Bu proje, GTA5 FiveM Roleplay sunucusuna bağlanmayı kolaylaştıran bir masaüstü launcher uygulamasıdır. Bu uygulama, Electron.js ve Node.js kullanılarak geliştirilmiştir ve sunucuya bağlanmak, sunucu durumunu ve oyuncu sayısını göstermek gibi özellikler sunar.

## Proje Kurulumu

Bu projeyi sıfırdan kurmak için aşağıdaki adımları izleyin.

### Gereksinimler

- **Node.js**: Uygulamanın çalışması için [Node.js](https://nodejs.org) kurulu olmalıdır.
- **Git** (opsiyonel): Projeyi Git üzerinden klonlamak için [Git](https://git-scm.com) kurulmalıdır.

### Adım 1: Projeyi Klonlayın veya İndirin

Projeyi Git üzerinden klonlayabilir veya zip dosyasını indirip açabilirsiniz.

#### Git ile Klonlama

```bash
git clone https://github.com/Canatan/CanatanFivemLauncher.git
cd CanatanFivemLauncher
```
#### Manuel Olarak İndirme
- Proje dosyalarını ZIP olarak indirin.
- ZIP dosyasını çıkartın ve proje klasörüne gidin.

#### Adım 2: Gerekli Bağımlılıkları Yükleyin
- Projede gerekli olan tüm bağımlılıkları yüklemek için aşağıdaki komutu çalıştırın:

```bash
npm install
```
Bu komut, proje için gerekli tüm Node.js bağımlılıklarını yükler.

#### Adım 3: Sunucu Bilgilerini Düzenleyin
- **renderer.js** dosyasındaki sunucu IP adresini ve port numarasını düzenleyin.
- 1. Sunucu IP Adresi ve Portunu Girin:
**renderer.js** dosyasında aşağıdaki satırları düzenleyin:
```javascript
const serverIP = 'sunucu_ip_adresiniz';
const serverPort = 'sunucu_portunuz';
```
- Sunucunuzun IP adresini ve port numarasını buraya ekleyin.

#### Adım 4: Uygulamayı Çalıştırın
- Uygulamayı yerel ortamda çalıştırmak için aşağıdaki komutu çalıştırın:

```bash
npm start
```
- Bu komut, Electron uygulamasını başlatır ve uygulamayı test etmenizi sağlar.

#### Adım 5: Uygulamayı Paketleyin (Opsiyonel)
Uygulamanızı **.exe** formatında paketlemek için aşağıdaki adımları izleyin.
Seçenek 1: **electron-packager** ile Paketleme
1. **electron-packager** kullanarak uygulamanızı Windows için paketlemek için şu komutu çalıştırın:
```bash
npx electron-packager . CanatanLauncher --platform=win32 --arch=x64 --overwrite
```
Bu komut, uygulamanızı **CanatanLauncher** adında bir klasöre paketleyecektir.

### Seçenek 2: **electron-builder** ile Paketleme
Alternatif olarak, **electron-builder** kullanarak uygulamanızı paketleyebilirsiniz. Öncelikle **electron-builder**'ı yükleyin:
```bash
npm install --save-dev electron-builder
```
Daha sonra, **package.json** dosyasını şu şekilde güncelleyin:
```javascript
{
  "scripts": {
    "start": "electron .",
    "dist": "electron-builder"
  },
  "build": {
    "appId": "com.canatan.launcher",
    "win": {
      "target": "nsis",
      "icon": "path_to_icon.ico"
    }
  }
}
```
- Paketlemek için şu komutu çalıştırın:
```bash
npm run dist
```
Bu işlem, projenizi Windows için bir **.exe** dosyasına paketleyecektir.

#### Adım 6: Sonuçlar
Uygulama başarıyla çalıştırıldıktan ve paketlendikten sonra:

**Sunucuya Bağlan**: Uygulama üzerindeki "Sunucuya Bağlan" düğmesine tıklayarak sunucuya doğrudan bağlanabilirsiniz.
**Sunucu Durumu**: Uygulama, sunucunun çevrimiçi olup olmadığını gösterecektir.
**Oyuncu Sayısı**: Sunucudaki mevcut oyuncu sayısını uygulama içinde görüntüleyebilirsiniz.


#### Yapılandırmalar
Projeyi kişiselleştirmek için **index.html**, **style.css** ve **renderer.js** dosyalarında değişiklikler yapabilirsiniz.
#### Sunucu Bilgileri
**renderer.js** dosyasında sunucu IP adresini ve port numarasını değiştirerek kendi sunucunuzu kullanabilirsiniz.
```javascript
const serverIP = 'sunucu_ip_adresiniz';
const serverPort = 'sunucu_portunuz';
```
#### Blurlu Arkaplan Görseli
Projede kullanılan blurlu GTA5 arkaplanı **style.css** dosyasında şu şekilde yapılandırılmıştır:
```css
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('gta5-background.jpg');
    background-size: cover;
    background-position: center;
    filter: blur(5px);
    z-index: -1;
}
```
Bu görseli değiştirmek isterseniz **background-image** URL'sini kendi görsel yolunuzla güncelleyebilirsiniz.


#### Geliştirici Notları
- **Bağımlılıklar**: Uygulama **electron**, **axios** gibi bağımlılıkları kullanır. Tüm bağımlılıkların doğru yüklendiğinden emin olun.
- **Platform Desteği**: Bu uygulama Windows platformu için paketlenmiştir. Farklı platformlar için de **electron-packager** veya **electron-builder** ile paketleme yapabilirsiniz.

#### Sorun Giderme
1. ## ELOOP:
- **too many symbolic links encountered** hatası alıyorsanız, **node_modules** klasörünüzde döngüsel bağlantı sorunları olabilir. Bu durumda, **node_modules** klasörünü ve **package-lock.json** dosyasını silip tekrar bağımlılıkları yükleyin.
```bash
rm -rf node_modules package-lock.json
npm install
```


##### Lisans
Bu proje MIT lisansı altında lisanslanmıştır. Daha fazla bilgi için ***LICENSE*** dosyasına bakın.
```yaml

---

Bu README dosyası, projeyi sıfırdan kurmak ve çalıştırmak isteyen bir kullanıcıya net bir şekilde rehberlik edecektir. Kurulum adımlarından uygulamayı paketlemeye kadar her şeyi kapsıyor. Eğer eklenmesi gereken başka şeyler olursa bana bildirebilirsiniz!
````
