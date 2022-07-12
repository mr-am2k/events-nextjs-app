import { MongoClient } from 'mongodb'
const url = process.env.DB_URL
// /api/new-event
//function for POST request
const handler = async (req, res) => {
    if (req.method === 'POST') {
        const data = req.body;
        try {
            const client = await MongoClient.connect(url)
            const db = client.db('events-app');
            const eventsCollection = db.collection('events')
            await eventsCollection.insertOne(data)
            client.close()
            res.status(201).json({ message: 'Successful insert' })
        } catch (error) {
            res.status(400).json({ message: error })
        }
    }
}

export default handler