const express = require("express");
const axios = require("axios");
const app = express();
const port = 3000;


app.use(express.static(__dirname)); // Serve static files from the current directory


// Define a route for the root URL ("/")
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


// Define a route for fetching data
app.get('/fetch-data', async (req, res) => {
  try {
    const data = await getPrice();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});



async function getPrice() {
  const options = {
    method: 'GET',
    url: 'https://yahoo-finance127.p.rapidapi.com/price/eth-usd',
    headers: {
      'X-RapidAPI-Key': '05c8b7d7f5mshba9ec763084f913p1bb322jsn88fe1108d124',
      'X-RapidAPI-Host': 'yahoo-finance127.p.rapidapi.com'
    }
};
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    throw error;
  }

}


