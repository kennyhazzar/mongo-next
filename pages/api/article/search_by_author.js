import { connectToDatabase } from '../../../util/mongodb'

export default async (req, res) => {
    if (req.method === 'POST') {

        if (!req.body) {
            return res.status(400).json({ error: "body is empty!" })
        }

        const { db } = await connectToDatabase()
        const articles = await db.collection("article").find({ "authors.name": "Kolchanov" })

        return res.json(articles)
    }
}