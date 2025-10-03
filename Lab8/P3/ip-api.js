const express = require('express');
const axios = require('axios');
const app = express();

async function fetchIP() {
    try {
        const response = await axios.get('https://httpbin.org/ip');
        return {
            ip: response.data.origin,
            source: "httpbin.org"
        };
    } catch (error) {
        throw {
            error: "Failed to fetch IP address",
            message: error.message
        };
    }
}

app.get('/ip', async (req, res) => {
    try {
        const ipData = await fetchIP();
        console.log('Handled /ip request, responding with:', ipData);
        res.json(ipData);
    } catch (err) {
        console.error('Error handling /ip request:', err);
        res.status(500).json(err);
    }
});

app.listen(8082, () => {
    console.log("Server running at http://localhost:8082");
}).on('error', (err) => {
    console.error("Failed to start server:", err.message);
});
