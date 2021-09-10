import express from 'express';
import { sendTestEmail } from '../controllers/email';

const router = express.Router();

router.get('/send-email', sendTestEmail);

module.exports = router;
