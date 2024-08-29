const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Import Card model
const Card = require('./models/Card');

const app = express();
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/helpcenter', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
});
app.get('/', (req, res) => {
    res.send('Welcome to the Help Center API! Use /ping to check server status.');
  });
// Simple endpoint to check if the server is running
app.get('/ping', (req, res) => {
  res.status(200).send('Server is running!');
});

// POST /cards - Create a new card
app.post('/cards', async (req, res) => {
  try {
    const { id, title, description } = req.body;

    // Validate request body
    if (!id || !title || !description) {
      return res.status(400).json({ error: 'Please provide id, title, and description.' });
    }

    // Create a new card
    const newCard = new Card({ id, title, description });
    await newCard.save();

    res.status(201).json(newCard);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create card.' });
  }
});

// GET /cards - Get all cards
app.get('/cards', async (req, res) => {
  try {
    const cards = await Card.find({});
    res.status(200).json(cards);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve cards.' });
  }
});

// GET /cards/:title - Get card by title
app.get('/cards/:title', async (req, res) => {
  try {
    const { title } = req.params;
    const card = await Card.findOne({ title });

    if (!card) {
      return res.status(404).json({ error: 'Card not found.' });
    }

    res.status(200).json(card);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve card.' });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
