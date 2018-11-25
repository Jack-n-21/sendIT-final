import express from 'express';
import parcelControllers from '../controllers/parcelControllers'

const router = express.Router();
// create a new parcel
router.post('/', parcelControllers.create);
router.get('/', parcelControllers.getParcels);
router.get('/:id', parcelControllers.getParcelById);
router.put('/:id/cancel', parcelControllers.cancelParcel);

export default router;
