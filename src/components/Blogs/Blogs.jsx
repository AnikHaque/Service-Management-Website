import React, { useEffect, useState } from 'react';
import { BlogCard } from './BlogCard';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch("blogs.json")
            .then((res) => res.json())
            .then((data) => setBlogs(data));
    }, []);

    return (

        <div className='ml-20 mr-20'>
            <h1 className='font-semibold text-3xl mb-8'>Our Event Projects</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-2'>
                {
                    blogs?.map((blog) => <BlogCard key={blog.id} blog={blog}>

                    </BlogCard>)
                }
            </div>

        </div>

    );
};

export default Blogs;