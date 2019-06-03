const express = require('express');
const app = express();
const routes = require('./routes/routes');
const port = 2000;
const { cartItems } = require('./cart-items');
const cors = require('cors');

app.use(cors());

app.use(express.json());
app.use('/routes', routes);

app.listen(port, () => console.log(`app is up and running on port: ${port}`));