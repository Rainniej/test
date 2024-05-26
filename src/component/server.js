const express = require('express');
const app = express();
const PORT = 3000; // use any port number you prefer

// Mock data for products
const products = [
  {
    "id": "1",
    "name": "Product 1",
    "weight": 1.2,
    "volume": 0.5,
    "quantity": 10,
    "price": 100,
    "availability": true
  },
  {
    "id": "2",
    "name": "Product 2",
    "weight": 2.0,
    "volume": 1.0,
    "quantity": 5,
    "price": 200,
    "availability": false
  }
];

// Route to get all products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// Route to get a specific product by ID
app.get('/api/products/:id', (req, res) => {
  const productId = req.params.id;
  const product = products.find(prod => prod.id === productId);
  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }
  res.json(product);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
