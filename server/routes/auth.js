import express from 'express';
import {
  currentUser,
  privateRoute,
  instructorRoute
} from '../controllers/auth';
import { findOrCreateUser } from '../middlewares/auth';

const router = express.Router();

router.post('/current-user', findOrCreateUser, currentUser);
router.get('/private-route', findOrCreateUser, privateRoute);
router.get('/instructor-route', findOrCreateUser, instructorRoute);

module.exports = router;
