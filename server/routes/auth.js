import express from 'express';
import { register } from '../controllers/auth';
import { currentUser } from '../controllers/currentUser';

const router = express.Router();

router.get('/register', register);
router.post('/current-user', currentUser);

module.exports = router;
