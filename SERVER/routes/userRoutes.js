import express from 'express';
import parcelControllers from '../controllers/parcelControllers';
import userControllers from '../controllers/userControllers';

const router=express.Router();

router.get('/:userId/parcels', parcelControllers.getParcelsOfUser);
router.get('/', userControllers.getUsers)

export default router;
