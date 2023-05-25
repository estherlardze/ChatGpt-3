import React from 'react';
import './blog.css';
import {Article} from '../../components';
import { blog01, blog02, blog03, blog05 } from './images';

const Blog = () => {
  return (
    <div className='chatgpt3__blog container-margin' id="library">
       <h1>A lot is happening, We are blogging about it.</h1>
       <div className='chatgpt3__blog-container'>
         <div className='chatgpt3__blog-container_A'>
            <Article image = {blog01} date="Sep 26, 2021"
             text = "GPT-3 and Open  AI is the future. Let us exlore how it is?" learMore="Read Full Article"/>
         </div>
        <div className='chatgpt3__blog-container_B'>
        <Article  image = {blog02}  date="Sep 26, 2021"
             text = "GPT-3 and Open  AI is the future. Let us exlore how it is?" learMore="Read Full Article"/>
        <Article image = {blog03} date="Sep 26, 2021"
             text = "GPT-3 and Open  AI is the future. Let us exlore how it is?" learMore="Read Full Article"/>
        <Article image = {blog02} date="Sep 26, 2021"
             text = "GPT-3 and Open  AI is the future. Let us exlore how it is?" learMore="Read Full Article" />
        <Article image = {blog05} date="Sep 26, 2021"
             text = "GPT-3 and Open  AI is the future. Let us exlore how it is?" learMore="Read Full Article" />
        </div>
       </div>
    </div>
  )
}

export default Blog
