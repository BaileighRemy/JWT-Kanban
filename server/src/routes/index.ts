import { Router } from 'express';
import authRoutes from './auth-routes.js';
import apiRoutes from './api/index.js';
// import { authenticateToken } from '../middleware/auth.js';

const router = Router();

router.use('/auth', authRoutes);
// TODO: Add authentication to the API routes, did this in the index.ts
router.use('/api/users', apiRoutes);
router.use('/api', apiRoutes);

export default router;
