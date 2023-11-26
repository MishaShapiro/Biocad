import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import express, { Router } from "express";

const PORT = 5000;

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/public/main.html')
})

app.get("/getAnalytics", (req, res) => {
    res.end(__dirname + '/public/analytics.html')
})

app.get("/getMain", (req, res) => {
    res.end(__dirname + '/public/main.html')
})

app.use(express.static(__dirname + '/public'));

app.listen(PORT, () => {console.log("SERVER START")})

