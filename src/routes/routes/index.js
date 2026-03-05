import { bookingPage, processBookingRequest } from '../routes/book.js';
import confirmationPage from '../routes/confirm.js';
import listRoutesPage from '../routes/list.js';
import routeDetailsPage from '../routes/details.js';
import { Router } from 'express';

const router = Router();

// List all routes
router.get('/', listRoutesPage);

// Route details page
router.get('/:routeId', routeDetailsPage);

// Book ticket
router.get('/booking/:scheduleId', bookingPage);
router.post('/book', processBookingRequest);

// Booking confirmation page
router.get('/confirmation/:confirmationId', confirmationPage);

export default router;
