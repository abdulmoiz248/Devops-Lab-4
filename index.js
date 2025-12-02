const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello v2!');
});

app.use(express.static('public'));

const quotes = [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
    { text: "Stay hungry, stay foolish.", author: "Steve Jobs" },
    { text: "World is big and life is short.", author: "Unknown" },
    { text: "Code is like humor. When you have to explain it, it’s bad.", author: "Cory House" },
    { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
    { text: "Experience is the name everyone gives to their mistakes.", author: "Oscar Wilde" },
    { text: "Java is to JavaScript what car is to Carpet.", author: "Chris Heilmann" },
    { text: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
    { text: "Make it work, make it right, make it fast.", author: "Kent Beck" },
    { text: "Fix the cause, not the symptom.", author: "Steve Maguire" },
    { text: "Optimism is an occupational hazard of programming: feedback is the treatment.", author: "Kent Beck" },
    { text: "When to use iterative development? You should use iterative development only on projects that you want to succeed.", author: "Martin Fowler" },
    { text: "Before software can be reusable it first has to be usable.", author: "Ralph Johnson" },
    { text: "It’s not a bug – it’s an undocumented feature.", author: "Anonymous" },
    { text: "Deleted code is debugged code.", author: "Jeff Sickel" }
];

app.get('/quote', (req, res) => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    res.json(randomQuote);
});

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'UP' });
});


app.listen(port, () => {
    console.log("Hello from Kubernetes!")
    console.log(`Quote app listening on port ${port}`);
});
