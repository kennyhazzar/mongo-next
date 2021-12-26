import Link from "next/link"
import style from '../styles/ArticleCard.module.scss'
const ArticleCard = props => {
    return (
        <Link href={props.articleLink}><div className={style.Card}>
            <div><strong>Название</strong>: <p>{props.article.title}</p></div>
            <div><strong>Авторы</strong>: {props.article.authors.map((author, index) => <p key={index}>{`${author} `}</p>)}</div>
            <div><strong>Дата размещения</strong>: {props.article.date_of_publication}</div>
        </div></Link>
    )
}

export default ArticleCard