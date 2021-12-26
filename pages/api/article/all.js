import { connectToDatabase } from '../../../util/mongodb'

export default async (req, res) => {
    const { db } = await connectToDatabase()
    const articles = await db.collection("article").find({}).toArray()

    res.json(articles)
}