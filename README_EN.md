# Weather Forecast Application 🌦️

This project is a weather forecast application built with React that allows users to enter a city name to view the current weather and a 5-day forecast. Users can also switch between Celsius and Fahrenheit units.

## 📋 Project Features

- **Current Weather**: Displays the current weather data for the city entered by the user.
- **5-Day Forecast**: Provides a 5-day weather forecast grouped by hours.
- **Temperature Unit Switching**: Users can switch between Celsius and Fahrenheit.
- **User's Location**: Automatically detects the user's location and displays the weather forecast for their area.

## 🛠️ Technologies Used

This project uses the following technologies:

- [React.js](https://reactjs.org/) - A JavaScript library for building user interfaces
- [OpenWeatherMap API](https://openweathermap.org/api) - API for retrieving weather forecast data
- [GitHub Pages](https://pages.github.com/) - For hosting the project

## 📦 Project Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/my-weather-app.git
    ```

2. Navigate to the project directory:

    ```bash
    cd my-weather-app
    ```

3. Install the required packages:

    ```bash
    npm install
    ```

4. Get your `OpenWeatherMap` API key and insert it into the project. Add your API key in the `Weather.tsx` file located in the `src` folder:
    ```javascript
    const API_KEY = 'YOUR_API_KEY_HERE';
    ```

5. Run the project on a local server:

    ```bash
    npm start
    ```

6. The project will be running on localhost: [http://localhost:3000](http://localhost:3000)

## 🚀 Deployment

To host this project on GitHub Pages, follow these steps:

1. In the `package.json` file, replace the `homepage` value with your GitHub repo URL:
   ```json
   "homepage": "https://your-username.github.io/my-weather-app"
   ```

2. Install the `gh-pages` package:
   ```bash
   npm install --save gh-pages
   ```

3. Add the following scripts to your `package.json` file:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

4. Build the project:
   ```bash
   npm run build
   ```

5. Deploy the project to GitHub Pages:
   ```bash
   npm run deploy
   ```

Your project should now be live on GitHub Pages. You can view it at: `https://your-username.github.io/my-weather-app`.
```