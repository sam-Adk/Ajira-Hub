const express = require('express');
const router = express.Router();
const { createJob, getHousehelpJobs, getEmployerJobs } = require('../controllers/jobController');

router.post('/create', createJob);
router.get('/househelp', getHousehelpJobs);
router.get('/employer', getEmployerJobs);

module.exports = router;


