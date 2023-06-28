import ArticleItem from './ArticleItem'
import articleStyles from '../styles/Article.module.css'

const ArticleList = ({ articles }) => {
  return (
    <div className={articleStyles.grid}>
      {articles.map((article) => (
        // <div>{article.title}</div>
        <ArticleItem key={article} article={article} />
      ))}
    </div>
  )
}

export default ArticleList
