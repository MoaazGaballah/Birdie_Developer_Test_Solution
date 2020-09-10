import * as express from "express";
import { connect } from '../database'

export const eventController = express.Router();

eventController.get('/events', async (_,res) => { 
    const conn = await connect();
    const events = await conn.query('SELECT id, event_type, timestamp, visit_id FROM events');
    res.status(200).json(events[0]);
});