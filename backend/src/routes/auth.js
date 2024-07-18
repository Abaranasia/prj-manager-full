const { Router } = require('express');
const { authenticate } = require('../controllers/auth');

const router = Router();

router.post("/", authenticate);

module.exports = router;