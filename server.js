const express = require('express');
const app = express();

const converter = require('./converter');  // Make sure file is named converter.js

app.use(express.json());

// Celsius → Fahrenheit
app.get('/toF', (req, res) => {
    const c = Number(req.query.c);
    const result = converter.celsiusToFahrenheit(c);
    res.json({ result });
});

// Fahrenheit → Celsius
app.get('/toC', (req, res) => {
    const f = Number(req.query.f);
    const result = converter.fahrenheitToCelsius(f);
    res.json({ result });
});

// Celsius → Kelvin
app.get('/toK', (req, res) => {
    const c = Number(req.query.c);
    const result = converter.celsiusToKelvin(c);
    res.json({ result });
});

// Kelvin → Celsius
app.get('/fromK', (req, res) => {
    const k = Number(req.query.k);
    const result = converter.kelvinToCelsius(k);
    res.json({ result });
});

// Fix Chrome DevTools warning
app.get('/.well-known/appspecific/com.chrome.devtools.json', (req, res) => {
    res.json({});
});

app.listen(3000, () => console.log("Server running on port 3000"));
