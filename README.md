# ♻️ SkipHire React App

A modern and user-friendly skip hire web application built with React. It helps users choose the ideal skip size based on their postcode and area, displaying real-time availability, pricing, and features.

## 🚀 Features

•📍 Location-Based Skips – Fetch skip sizes available in your area via postcode.
•🔁 Progress Steps – Interactive progress indicator for the skip hire process.
•🗑️ Dynamic Skip Cards – Detailed skip information including size, price, and hire period.
•🌀 Loading Spinner – Clean UI feedback while fetching data.
•✅ Selection Summary – Users can easily view and confirm their selection.
•📦 Most Popular Highlight – Identifies and highlights the most popular skip.
•📘 Helpful Tips Section – Guides for different project types (small, medium, large).
•🌍 Responsive Design – Optimized for desktops, tablets, and mobiles.

## 📂 Project Structure

src/
├── components/
│   ├── LoadingSpinner.js
│   ├── ProgressSteps.js
│   ├── SkipCard.js
│   └── SkipSizeSelector.js
├── pages/
│   └── SkipSelectionPage.js
├── services/
│   └── api.js
├── styles/
│   ├── LoadingSpinner.css
│   ├── ProgressSteps.css
│   ├── SkipCard.css
│   └── SkipSizeSelector.css
└── App.js

## ⚙️ Installation

1.Clone the repo

git clone https://github.com/your-username/skiphire-react-app.git
cd skiphire-react-app

2.Install dependencies
npm install

3.Start the app

npm start

## 🌐 API Integration

The app fetches skip data based on location using:

GET https://app.wewantwaste.co.uk/api/skips/by-location?postcode={POSTCODE}&area={AREA}

## 🛠️ Technologies Used

•React (Functional Components, Hooks)
•CSS Modules
•Fetch API for backend integration
•SVG + Emojis for visual enhancement

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
