import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { store } from '../../config/Data';
import './Style.css';

const Technology = () => {
  const [data] = useContext(store);
  return (
<div className='cardContainer'>
       
    <Link className='blogItem-link' to={`/technology/${data[10].id}`}>
       <div className='card'>
            <img src={data[10].image} alt="not found" className='cardImg' />
            <div className="cardTitle">
                <h3 className="title">
                {data[10].title}
                </h3>
            </div>
            <h5 className="dateTitle">
              release date : <span> {data[10].date}</span>
            </h5>
        </div>
    </Link>

        
    <Link className='blogItem-link' to={`/technology/${data[11].id}`}>
       <div className='card'>
            <img src={data[11].image} alt="not found" className='cardImg' />
            <div className="cardTitle">
                <h3 className="title">
                {data[11].title}
                </h3>
            </div>
            <h5 className="dateTitle">
              release date : <span> {data[11].date}</span>
            </h5>
        </div>
    </Link>
       
    <Link className='blogItem-link' to={`/technology/${data[12].id}`}>
       <div className='card'>
            <img src={data[12].image} alt="not found" className='cardImg' />
            <div className="cardTitle">
                <h3 className="title">
                {data[12].title}
                </h3>
            </div>
            <h5 className="dateTitle">
              release date : <span> {data[12].date}</span>
            </h5>
        </div>
    </Link>

    </div>
  )
}

export default Technology