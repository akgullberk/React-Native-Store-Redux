REACT NATİVE STORE REDUX
--------------------------------

# Overview

Store Application is a React Native app that showcases a simple store with login functionality, product listing, and product detail pages. It utilizes Redux for state management and includes an API for fetching product details and user information.

-------------------------------------------------------------

# Features

- Login: Allows users to log in using their credentials.
- Product Listing: Displays a list of products fetched from an API.
- Product Details: Shows detailed information about a selected product.
- ------------------------

# Technologies

React Native,
Redux,
Formik,
API,
React Navigation,
Native Components (e.g., ActivityIndicator, FlatList, Image, Text)

------------------------------------
# Usage

* Login
  
Path: /login

Description: Users can log in using their username and password. Upon successful login, users are redirected to the product listing page.

* Product Listing
  
Path: /products

Description: Displays a list of products. Users can navigate to the product details page by selecting a product.

* Product Details
  
Path: /detail

Description: Shows detailed information about a specific product.

-----------------------------------------

# Code Explanation

* Detail.js
  
Purpose: Fetches and displays detailed information about a product based on the provided ID.
Key Components:
useEffect: Fetches product details when the component mounts.
getDetailApi: API call function to retrieve product details.
Loading: Displays a loading spinner while data is being fetched.

* Login.js
  
Purpose: Handles user login functionality.
Key Components:
Formik: Used for form handling and validation.
postUserApi: API call function to authenticate the user.
useDispatch: Dispatches login actions to the Redux store.
ActivityIndicator: Shows a loading spinner during the login process.

* Product.js
  
Purpose: Fetches and displays a list of products.
Key Components:
useEffect: Fetches product data when the component mounts.
getProductApi: API call function to retrieve the list of products.
ProductCard: Component for displaying individual product details.
FlatList: Efficiently renders the list of products.

# Screenshots



https://github.com/user-attachments/assets/1ad46012-284c-4296-93d4-37a8b6bbf4a7


This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
