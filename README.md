# Shopping Cart Client

Application where we simulate s shopping cart, where we can add items to the list of items and then to the shopping cart.

## Architecture

We will use a simple Client-Server architecture

- The client will be the web browser where we interact with the application.
- The server will be an API build with Java and Spring Boot.
- The communication between both services will be via HTTP.

<img src="https://res.cloudinary.com/du9fag77u/image/upload/v1621640012/shopping-cart_swoj3q.jpg" height="500px"></img>

## Behaviour

### Articles

Articles have the behaviour of a CRUD

- create articles
- read articles
- update articles
- delete articles

#### Create Articles

To save and article, a JSON request will be sent with the following data structure

```json
{
  "name": "example-name",
  "price": 0,
  "brand": "example-brand"
}
```

### Shopping Cart

The behaviour of the shopping cart is more basic as you can only add items, see the total amount of money and simulate a purchase.
