import React, { useState, useEffect } from 'react';
import './News_list.css';
import axios from 'axios';
import NewsItems from './NewsItems';

const News = () => {

    const [articles, setArticles] = useState([]);

    const getNews = async() => {
        try {
            const apiKey = process.env.REACT_APP_API_KEY
            const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr&apiKey=${apiKey}`)
            console.log(response.data.articles);
            setArticles(response.data.articles)
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        getNews();
    }, [])
    
    return (
        <div className='news_list'>
            {articles.map((article, idx) => (
                <NewsItems key={idx} article={article} />
            ))}
        </div>
    );
}

export default News;