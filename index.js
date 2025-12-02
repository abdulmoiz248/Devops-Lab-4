const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const quotes = [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
    { text: "Stay hungry, stay foolish.", author: "Steve Jobs" },
    { text: "World is big and life is short.", author: "Unknown" },
    { text: "Code is like humor. When you have to explain it, it’s bad.", author: "Cory House" },
    { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
    { text: "Experience is the name everyone gives to their mistakes.", author: "Oscar Wilde" },
    { text: "Java is to JavaScript what car is to Carpet.", author: "Chris Heilmann" }
];

app.get('/', (req, res) => {
    res.json({ message: "Welcome to the Quote of the Day API! Visit /quote for a quote." });
});

app.get('/quote', (req, res) => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    res.json(randomQuote);
});

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'UP' });
});

app.listen(port, () => {
    console.log(`Quote app listening on port ${port}`);
});
