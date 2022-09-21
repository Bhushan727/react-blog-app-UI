import React from 'react'
import './Style.css'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { store } from '../../config/Data'



const Latest = () => {
    const [data] = useContext(store);
        
  return (
    <div className='cardContainer'>

            <Link className='blogItem-link' to={`/technology/${data[0].id}`}>
                <div className='card'>
                    <img src={data[0].image} alt="not found" className='cardImg' />
                    <div className="cardTitle">
                        <h3 className="title">
                                {data[0].title}
                        </h3>
                    </div>
                    <h5 className="dateTitle">
                    release date : <span> {data[0].date}</span>
                    </h5>
                </div>
            </Link>    

            <Link className='blogItem-link' to={`/bollywood/${data[1].id}`}>   
                <div className='card'>
                    <img src={data[1].image} alt="not found" className='cardImg' />
                    <div className="cardTitle">
                        <h3 className="title">
                             {data[1].title}   
                        </h3>
                    </div>
                    <h5 className="dateTitle">
                    release date : <span>{data[1].date}</span>
                    </h5>
                 </div>
            </Link>
            
            <Link className='blogItem-link' to={`/fitness/${data[2].id}`}>
                <div className='card'>
                    <img src={data[2].image} alt="not found" className='cardImg' />
                    <div className="cardTitle">
                        <h3 className="title">
                        {data[2].title}
                        </h3>
                    </div>
                    <h5 className="dateTitle">
                    release date : <span>{data[2].date}</span>
                    </h5>
                </div>
            </Link>
    
    </div>
  )
}

export default Latest;