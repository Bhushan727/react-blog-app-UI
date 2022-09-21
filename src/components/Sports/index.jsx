import React from 'react'
import './Style.css'
import { store } from '../../config/Data' 
import { useContext } from 'react'
import { Link } from 'react-router-dom'
// import SportList from './SportsItem'


const Sports = () => {
    const [data] = useContext(store);
  return (
    <div className='cardContainer'>
       
       <Link className='blogItem-link' to={`/fitness/${data[3].id}`}>
       <div className='card'>
            <img src={data[3].image} alt="not found" className='cardImg' />
            <div className="cardTitle">
                <h3 className="title">
                    {data[3].title}
                </h3>
            </div>
            <h5 className="dateTitle">
              release date : <span> {data[3].date}</span>
            </h5>
    </div>
    </Link>

    <Link className='blogItem-link' to={`/fitness/${data[4].id}`}>
       <div className='card'>
            <img src={data[4].image} alt="not found" className='cardImg' />
            <div className="cardTitle">
                <h3 className="title">
                    {data[4].title}
                </h3>
            </div>
            <h5 className="dateTitle">
              release date : <span> {data[4].date}</span>
            </h5>
    </div>
    </Link>
    
    <Link className='blogItem-link' to={`/fitness/${data[5].id}`}>
       <div className='card'>
            <img src={data[5].image} alt="not found" className='cardImg' />
            <div className="cardTitle">
                <h3 className="title">
                    {data[5].title}
                </h3>
            </div>
            <h5 className="dateTitle">
              release date : <span> {data[5].date}</span>
            </h5>
    </div>
    </Link>
{/* 
            {
                data.map((blog) => (
                    blog.category === 'sports' ? <SportList blog={blog} key={blog.id} /> : null
                    
                ))
            } */}

       
    
    </div>
  )
}

export default Sports;