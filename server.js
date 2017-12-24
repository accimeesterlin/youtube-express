


// What is express?
    // Web Application Framework for Node.js


// Routing

// Three lines

const express = require('expres');
const app = express();

// app.get();
// app.post();

app.get('/', (req, res) => {
    res.json({username:'accimeesterli'});
});

app.listen(8080, () => {
    console.log("App is starting at port 8080");
});
