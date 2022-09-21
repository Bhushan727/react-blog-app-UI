import React, { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { store } from '../../config/Data';

import './Style.css'

const CategoryDetails = () => {
  const { userId } = useParams();
  const [data] = useContext(store);
  const [blog, setBlog ] = useState(null);
  const [blogId, setBlogId ] = useState(null);
  const [blogTitle, setBlogTitle ] = useState(null);
  const [blogImage, setBlogImage ] = useState(null);
  const [blogContent, setBlogContent ] = useState(null);
  const [blogDate, setBlogDate ] = useState(null);


  // useEffect(()=> {
  //   let blog = data.find((blog) => blog.id === parseInt(userId));
  //   if(blog)
  //   {
  //     setBlog(blog);
  //   }
  // },[])

  
  useEffect(() => {
    
   const filter = data.filter((blog) => blog.id === parseInt(userId));
   setBlog(filter[0]);
   setBlogId(filter[0].id);
   setBlogTitle(filter[0].title);
   setBlogImage(filter[0].image);
   setBlogContent(filter[0].content);
   setBlogDate(filter[0].date);

   
   
 },[])

  return (
    <div>
      <div className="detailsContainer">

        <img src={blogImage} alt="link can't resolved" className='detailImage'/>
        <h2 className="detailTitle">
         {blogTitle} abcdef
        </h2>
        <p className="details">
          {blogContent}
          {/* {console.log(blogDate)} */}
        </p>
        <h3 className="detailIssue">
          release date : <span className="date">{blogDate}</span>
        </h3>
      </div>
      
    </div>
  )
}

export default CategoryDetails;