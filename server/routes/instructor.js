import express from 'express';
import { getAccountStatus, makeInstructor } from '../controllers/instructor';
import { findOrCreateUser } from '../middlewares/auth';

const router = express.Router();

router.post('/make-instructor', findOrCreateUser, makeInstructor);
router.post('/get-account-status', findOrCreateUser, getAccountStatus);

module.exports = router;
