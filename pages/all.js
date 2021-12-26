import axios from "axios"
import ArticleCard from "../components/ArticleCard"
import Layout from "../components/Layout"

const ArticleAll = ({ articles }) => {

    console.log(articles)

    return (
        <Layout>

            {
                articles.map(article => {
                    return (
                        <ArticleCard articleLink={`/article/${article.article_id}`} article={article}/>
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

export default ArticleAll