# Virtual Store

Virtual Store using react, redux and materialUI - built in 4 phases. A Web Application for displaying a store with products, detail views, comments, shopping cart

## Author: Rami Zaitoun

**Version**: 1.1.0

## links and resources

## <center> [sandbox](https://codesandbox.io/s/quizzical-grass-8ddpd) </center>
## <center> [netlify](https://infallible-jang-f52fbe.netlify.app/Cart) </center>
<!-- 
## <center> [netlify deployed link]() </center>
 -->
### Phase 1 -

# uml 
![phaseOne](https://github.com/MasteRminD6666/storefront/blob/master/src/assets/Application-State-with-Redux.jpg)

# GiF
![](https://media.giphy.com/media/8FDvolCLPnStQlKy3v/giphy.gif)

<hr>

## Virtual Store

An online shopping portal for a fictional store

## Business Requirements

This application will power an online storefront that will allow users to browse product offerings by category, place items in their shopping cart, and check-out when they are ready to make their purchase.


### Phase 2 Requirements - Lab: Class 37

In phase 2, we will be adding the “Add to Cart” feature to our application, which will allow our users to not only browse items in the store, but also select them and have them persist in their “shopping cart” for later purchase.

The user stories from Phase 1 remain unchanged. For this phase, we are now adding the following new user stories to meet the new requirements.

- As a user, I want to choose from products in the list and add them to my shopping cart
- As a user, I want to see the products that I’ve added to my shopping cart so that
- As a user, I want to change the quantity of items I intend to purchase in my shopping cart
- As a user, I want to be able to remove an item from my shopping cart


### Phase 3 Requirements - Lab Class 38
### ![](https://media.giphy.com/media/vUFkrx2OgUsduHuOsO/giphy.gif)
In phase 3, we will be connecting our Virtual Store to a live API so that our data is persistent and able to be separately managed.

The user stories from Phases 1 and 2 remain unchanged. For this phase, we are now adding the following new user stories to meet the new requirements.

- As a user, I want to interact with live inventory so that I have confidence that the displayed products are in stock
- gstAs a user, I want to know to that when I add an item to my cart, that it is removed from inventory so that no other users can purchase it


### The core requirements and functionality are as follows:

- Display a list of our product categories
- Display a listing of products for each category, when the category is selected
- From the product listings:
- Click to view a full detail page about the product
- Add the product to your shopping cart
- Shopping cart (simple version) always visible on screen
- Full shopping cart and check out screen available from main navigation


### Phase 4 Requirements
In phase 4, we will be completing work on our Virtual Store by adding a two full page views to the application: Product Details and Checkout

The user stories from Phases 1, 2 and 3 remain unchanged. For this phase, we are now adding the following new user stories to meet the new requirements.

As a user, I want to see a full detail view of a product so that I can make a more informed choice about purchasing it.
As a user, I want to view my full cart and initiate the checkout process so that I can purchase my items and have them delivered

## Technical Requirements

The application will be created with the following overall architecture and methodologies

- React
- Redux Store for Application State
- Superagent or Axios for performing API Requests
- Material UI for layout and styling
- Test Driven Development, using Jest
- Deployment to a cloud provider (Netlify, or GitHub Pages)


