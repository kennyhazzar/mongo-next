import axios from "axios"
import { useRouter } from "next/router"
import { useCallback, useEffect, useState } from "react"
import Layout from "../../components/Layout"

const ArticleById = props => {
    const router = useRouter()
    const [data, setData] = useState("Идет загрузка, подождите...")

    const fetchArticle = useCallback(
        async () => {
            if (!router.query.id) return
            const response = await axios.get(`http://localhost:3000/api/article/${router.query.id}`)
            console.log(response)
            setData(response.data)
        },
        [router],
    )

    useEffect(() => {
        fetchArticle()
    }, [fetchArticle])

    return (
        <Layout>
            {data == "Идет загрузка, подождите..." ? <p>{data}</p> :
                <div style={{marginLeft: "5%", marginRight: "5%"}}>
                    <p style={{ fontSize: 30 }}><strong>{data.title}</strong></p>
                    <p>{data.authors.map(author => <h4>{author}</h4>)}</p>
                    <p>{data.content}</p>
                    <p> <strong>Рецензии:<br/> </strong>{!data?.reviews ? `Рецензий пока нет`: data.reviews}</p>
                    
                </div>}
        </Layout>
    )
}

export default ArticleById