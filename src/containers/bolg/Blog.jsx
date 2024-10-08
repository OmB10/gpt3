import React from 'react'
import './blog.css'
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';

const Blog = () => {
    return (
        <div className="blog section-padding" id="blog">
            <div className="blog-heading">
                <h1 className="gradient-text">A lot is happening, <br /> We are blogging about it.</h1>
            </div>
            <div className="blog-container">
                <div className="blog-container-groupA">
                    <Article imgUrl={blog01} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                </div>
                <div className="blog-container-groupB">
                    <Article imgUrl={blog02} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                    <Article imgUrl={blog03} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                    <Article imgUrl={blog04} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                    <Article imgUrl={blog05} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                </div>
            </div>
        </div>
    )
}

export default Blog