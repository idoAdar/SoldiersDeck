const experss = require('express');
const cors = require('cors');
const routes = require('./controller/controller');
const PORT  = process.env.PORT || 5000;

const app = experss();

app.use(cors());
app.use(experss.json());
app.use('/', routes);

// Error Middleware:
app.use((error, req, res, next) => {
    throw new Error(`Error ${error.code || 500}: ${error.message || 'An unknown error occurred'}`);
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));