import React from 'react';
import './article.css';

const Article = ({image ,date, text, learMore}) => {
  return (
    <div className='chatgpt3__article'>
       <div className='chatgpt3__article-image'>
        <img src={image} alt="article" />
       </div>
       <div className='chatgpt3__article-content'> 
         <small>{date}</small> 
          <h3>{text}</h3>
          <small>{learMore}</small>
       </div>
    </div>
  )
}

export default Article
