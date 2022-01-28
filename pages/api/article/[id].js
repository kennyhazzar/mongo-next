import { connectToDatabase } from '../../../util/mongodb'
export default async (req, res) => {

    const { db } = await connectToDatabase()
    const article = await db.collection('article').findOne({ "article_id": req.query.id })

    if (!article) {
        return res.status(404).json({ error: "this document does not exist" })
    }
    res.json(article)
}