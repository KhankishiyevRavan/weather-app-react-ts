# Weather Forecast Application 🌦️

Bu layihə istifadəçilərə şəhər adını daxil edərək cari hava proqnozunu və 5 günlük hava proqnozunu təqdim edən React ilə hazırlanmış bir hava proqnozu tətbiqidir. İstifadəçilər həmçinin temperatur vahidini Selsi və Fahrenheit arasında dəyişə bilərlər.

## 📋 Proyektin Xüsusiyyətləri

- **Cari Hava Proqnozu**: İstifadəçi daxil etdiyi şəhərin cari hava məlumatları göstərilir.
- **5 Günlük Proqnoz**: Şəhər üçün 5 günlük hava proqnozu saatlara görə qruplaşdırılır.
- **Temperatur Vahidi Dəyişdirilməsi**: İstifadəçi Selsi və Fahrenheit arasında keçid edə bilər.
- **İstifadəçinin Mövqeyi**: Tətbiq istifadəçinin mövqeyini avtomatik taparaq həmin yerin hava proqnozunu göstərir.

## 🛠️ Texnologiyalar

Bu layihə aşağıdakı texnologiyaları istifadə edir:

- [React.js](https://reactjs.org/) - UI yaratmaq üçün JavaScript kitabxanası
- [OpenWeatherMap API](https://openweathermap.org/api) - Hava proqnozu məlumatları üçün API
- [GitHub Pages](https://pages.github.com/) - Layihənin host edilməsi üçün

## 📦 Layihənin Qurulması

1. Layihəni klonlayın:

    ```bash
    git clone https://github.com/istifadeci-adiniz/my-weather-app.git
    ```

2. Layihə qovluğuna keçin:

    ```bash
    cd my-weather-app
    ```

3. Lazımi paketləri quraşdırın:

    ```bash
    npm install
    ```

4. `OpenWeatherMap` API açarınızı alın və layihədə istifadə edin. API açarını `src` qovluğunda `Weather.tsx` faylına daxil edin:
    ```javascript
    const API_KEY = 'YOUR_API_KEY_HERE';
    ```

5. Layihəni lokal serverdə çalışdırın:

    ```bash
    npm start
    ```

6. Layihə localhost-da çalışacaq: [http://localhost:3000](http://localhost:3000)

## 🚀 Deploy

Bu layihəni GitHub Pages üzərindən host etmək üçün aşağıdakı adımları izləyin:

1. `package.json` faylında `homepage` dəyərini öz GitHub repo URL-nizlə əvəz edin:
   ```json
   "homepage": "https://istifadeci-adiniz.github.io/my-weather-app"
   ```

2. `gh-pages` paketini quraşdırın:
   ```bash
   npm install --save gh-pages
   ```

3. Aşağıdakı skriptləri `package.json` faylınıza əlavə edin:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

4. Layihəni build edin:
   ```bash
   npm run build
   ```

5. Layihəni GitHub Pages-də yayımlamaq üçün deploy edin:
   ```bash
   npm run deploy
   ```

Layihəniz artıq GitHub Pages-də yayımlanacaq. Saytınızı bu ünvanda görə bilərsiniz: `https://istifadeci-adiniz.github.io/my-weather-app`.
```