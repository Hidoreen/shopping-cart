
## React Shopping Cart with Redux

This project is a simple shopping cart application built using React with Redux for state management. It features two main pages: the home page displaying products fetched from a fake API, and the cart page where users can view and manage their selected items.

## Preview Live

[Shopping Cart](https://hidoreen.github.io/shopping-cart/)

## Features

- Home Page: Displays a list of products fetched from a fake API.
- Cart Page: Shows the items added to the cart, allows users to access to the quantity of items, and displays total prices.
- Add/Remove Items: Users can easily add or remove items from the cart.
- Live Updates: The cart updates in real-time, showing the number of items and their total prices.
  
## Technologies Used

- React: A JavaScript library for building user interfaces.
- Redux: A predictable state container for JavaScript apps.
- React Redux: Official React bindings for Redux.
- React Router: Declarative routing for React.
- Fake Products API: Used to simulate product data.

## Clone Project

~ [git clone](https://github.com/your-username/react-shopping-cart.git)
~ cd react-shopping-cart
~ npm start

## Folder Structure

react-shopping-cart/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── Cart.js
│   │   ├── Product.js
│   │   └── ...
│   ├── pages/
│   │   ├── CartPage.js
│   │   ├── HomePage.js
│   │   └── ...
│   ├── slices/
│   │   ├── cartSlice.js
│   │   └── ...
│   ├── App.js
│   ├── index.js
│   └── ...
├── README.md
└── ...

## How it works

1. Product Listing: The home page fetches product data from a fake API and displays it using the Product component.
2. Adding to Cart: Users can add products to their cart by clicking an "Add to Cart" button. This action dispatches an 3. action creator to update the state managed by Redux.
3. Cart Management: The Cart component displays the current cart items and allows users to adjust quantities or remove items altogether.
4. Redux Integration: Redux is used to manage the application state, with a slice dedicated to the shopping cart (cartSlice.js). This slice contains reducers and action creators to manage cart-related state changes.

## Future Improvements

- Authentication: Implement user authentication to allow for personalized shopping experiences.
- Persistent Cart: Save cart data to local storage or a backend database to maintain cart items across sessions.
- Advanced Filtering: Add features like sorting, filtering, and searching to enhance the user experience.
  
## Contributions

Contributions are welcome! Feel free to open issues or pull requests for any improvements or bug fixes.
