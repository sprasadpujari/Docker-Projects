const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://database/ecommerce', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define MongoDB schemas and models
const Product = mongoose.model('Product', {
  name: String,
  description: String,
  price: Number,
});

const Order = mongoose.model('Order', {
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
  total: Number,
});

// Middleware
app.use(express.json());

// Product APIs
app.get('/api/products', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

app.post('/api/products', async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.json(product);
});

// Order APIs
app.post('/api/orders', async (req, res) => {
  const { products } = req.body;
  const total = products.reduce((sum, product) => sum + product.price, 0);
  const order = new Order({ products, total });
  await order.save();
  res.json(order);
});

app.get('/api/orders', async (req, res) => {
  const orders = await Order.find().populate('products');
  res.json(orders);
});

// Export the Express application
module.exports = app;