import { getCompleteRouteDetails } from '../../models/model.js';

export default async (req, res) => {
    const { routeId } = req.params;
    const details = await getCompleteRouteDetails(routeId);
        if (!details) {
            return res.status(404).render('errors/404', {
                title: "This route can't be found"
            });
        }

    // TODO: getCompleteRouteDetails instead

    res.render('routes/details', { 
        title: 'Route Details',
        details
    });
};