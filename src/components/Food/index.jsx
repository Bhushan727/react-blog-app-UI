import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { store } from '../../config/Data';
import './Style.css';

const Food = () => {

  const [data] = useContext(store);
  return (
<div className='cardContainer'>
       

<Link className='blogItem-link' to={`/technology/${data[13].id}`}>
       <div className='card'>
            <img src={data[13].image} alt="not found" className='cardImg' />
            <div className="cardTitle">
                <h3 className="title">
                {data[13].title}
                </h3>
            </div>
            <h5 className="dateTitle">
              release date : <span> {data[13].date}</span>
            </h5>
        </div>
    </Link>



    <Link className='blogItem-link' to={`/technology/${data[14].id}`}>
       <div className='card'>
            <img src={data[14].image} alt="not found" className='cardImg' />
            <div className="cardTitle">
                <h3 className="title">
                {data[14].title}
                </h3>
            </div>
            <h5 className="dateTitle">
              release date : <span> {data[14].date}</span>
            </h5>
        </div>
    </Link>
    

    <Link className='blogItem-link' to={`/technology/${data[15].id}`}>
       <div className='card'>
            <img src={data[15].image} alt="not found" className='cardImg' />
            <div className="cardTitle">
                <h3 className="title">
                {data[15].title}
                </h3>
            </div>
            <h5 className="dateTitle">
              release date : <span> {data[15].date}</span>
            </h5>
        </div>
    </Link>

    </div>
  )
}

export default Food