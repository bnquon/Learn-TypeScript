import React from 'react';
import blogData from '../../blog.json';
import './Blog.css';

type Blog = {
    id: number;
    title: string;
    cover: string;
    author: string;
}

const Blog: React.FC = () => {
  return (
    <div className="container">
        <div className="blog">
            {blogData.map((blog: Blog) => 
                <div className="card" key={blog.id}>
                    <img src={blog.cover} alt="" />
                    <div className="details">
                        <h2>{blog.title}</h2>
                        <h4>{blog.author}</h4>
                    </div>
                </div>
            )}
        </div>
    </div>
  );
};

export default Blog;