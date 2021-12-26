import axios from "axios"
import { useState } from "react"
import ArticleCard from "../components/ArticleCard"
import Layout from "../components/Layout"

const SearchByTitle = ({ articles }) => {

    console.log(articles)

    const [articleData, setArticleData] = useState(articles)
    const [value, setValue] = useState('')

    const inputHandler = e => {
        const currValue = e.target.value
        setValue(currValue)
        const filteredData = articles.filter(entry =>
            entry.title.includes(currValue))
        setArticleData(filteredData)
    }

    return (
        <Layout>
            <div style={{ position: "absolute", display: "flex", justifyContent: "center", height: 30 }}>
                <div>
                    <input onChange={inputHandler} value={value} type={'search'} name="q" placeholder="Поиск по названию" />
                </div>

            </div>
            {
                articleData.map(article => {
                    return (
                        <ArticleCard articleLink={`/article/${article.article_id}`} article={article} />
                    )
                })
            }
        </Layout>
    )
}

export async function getServerSideProps() {
    const response = await axios.get("http://localhost:3000/api/article/all")

    return {
        props: {
            articles: response.data
        }
    }
}

export default SearchByTitle