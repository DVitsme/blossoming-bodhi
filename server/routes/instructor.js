import express from 'express';
import { makeInstructor } from '../controllers/instructor';
import { findOrCreateUser } from '../middlewares/auth';

const router = express.Router();

router.post('/make-instructor', findOrCreateUser, makeInstructor);

module.exports = router;
