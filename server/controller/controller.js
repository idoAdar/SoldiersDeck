const express = require('express');
const logic = require('../logic/logic');

const route = express.Router();

// Url: http://localhost:5000
// DESC: Fetch all soliers
// Method: GET
// Public
route.get('/', logic.fetchSoliders);

// Url: http://localhost:5000/id
// DESC: Fetch soliers per job
// Method: GET
// Public
route.get('/:id', logic.fetchSolidersPerJob);

// Url: http://localhost:5000/
// DESC: Add new soliers
// Method: POST
// Public
route.post('/', logic.newSoldier);

// Url: http://localhost:5000/job
// DESC: Add new job
// Method: POST
// Public
route.post('/job', logic.newJob);

// Url: http://localhost:5000/:sId/:jId
// DESC: Delete from divistions
// Method: DELETE
// Public
route.delete('/:sId/:jId', logic.removeSoliersFromJob);

// Url: http://localhost:5000/update
// DESC: Add new solider per job
// Method: POST
// Public
route.post('/update', logic.addSoliderPerJob);

module.exports = route;