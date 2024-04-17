const NewsItems = ({ article }) => {
    return (
        <div className='news_item'>
            <div className='thumbnail'>
                <img src={article.urlToImage} alt="썸네일" />
            </div>
            <div className='contents'>
                <h2>{article.title}</h2>
                <p>{article.description}</p>
            </div>
        </div>
    );
}

export default NewsItems;