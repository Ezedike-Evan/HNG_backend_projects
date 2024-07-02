const express = require('express')
const axios = require('axios')
require('dotenv').config();

const app = express(); 

app.set('trust proxy', true)

const port = process.env.PORT || 3000;

app.get('/api/hello', async(req, res) => {
    const client_ip = req.ip
    const response = await axios.get(process.env.API_URL)
    
    const location = response.data.location.country
    const temp = response.data.current.temp_c
    // Get the visitor's name from the query parameter
    const visitorName = req.query.visitor_name || 'Guest';
    
    res.json({
        client_ip,
        location,
        greeting: `Hello, ${visitorName}!, the temperature is ${temp} degrees Celsius in ${location}`
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
