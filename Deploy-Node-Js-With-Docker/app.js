// app.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
// Health check
app.get('/', (req, res) => {
  res.send('Health check OK');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


// app.js

// Sample in-memory data (for demonstration purposes)
let patients = [];

// Patient registration
app.post('/register', (req, res) => {
  const { name, age, email } = req.body;
  const newPatient = { id: patients.length + 1, name, age, email };
  patients.push(newPatient);
  res.json(newPatient);
});

// Appointment booking
app.post('/appointments', (req, res) => {
  const { patientId, doctor, date } = req.body;
  // Logic for booking appointment
  res.send('Appointment booked successfully');
});

// Medical records
app.get('/patients/:id/records', (req, res) => {
  const patientId = req.params.id;
  // Fetch medical records for the patientId
  res.json({ patientId, records: [] }); // Sample response
});
