import { withAuth } from '@clerk/nextjs/api';
import dbConnect from '../../lib/mongodb';
import Event from '../../models/Event';

export default withAuth(async (req, res) => {
  const { method, auth } = req;
  const userId = auth.userId;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const events = await Event.find({ userId });
        res.status(200).json(events);
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'POST':
      try {
        const event = new Event({ ...req.body, userId });
        await event.save();
        res.status(201).json(event);
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
});
