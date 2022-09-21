import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { store } from '../../config/Data';
import './Style.css';

const Summary = () => {
    const [data] = useContext(store);
  return (
    <div className='mainContainer'>
        
        <div className="leftContainer">
        <h1 className="headingArt">
          Latest Article
        </h1>
        <Link className='blogItem-link' to={`/technology/${data[6].id}`}>
            <div className="cardArticle">
                    <img src={data[6].image} alt="image not found" />
                    <div className="discr">
                        <div className="titleDisc">
                            {data[6].title}
                        </div>
                        <h4 className="categ">Category : <span>Hollywood</span></h4>
                        <h4 className="issueD">issue Date : <span>{data[6].date}</span></h4>
                    </div>
            </div>
        </Link>

                    <Link className='blogItem-link' to={`/technology/${data[7].id}`}>
            <div className="cardArticle">
                    <img src={data[7].image} alt="image not found" />
                    <div className="discr">
                        <div className="titleDisc">
                            {data[7].title}
                        </div>
                        <h4 className="categ">Category : <span>Hollywood</span></h4>
                        <h4 className="issueD">issue Date : <span>{data[7].date}</span></h4>
                    </div>
            </div>
        </Link>
        
        <Link className='blogItem-link' to={`/technology/${data[8].id}`}>
            <div className="cardArticle">
                    <img src={data[8].image} alt="image not found" />
                    <div className="discr">
                        <div className="titleDisc">
                            {data[8].title}
                        </div>
                        <h4 className="categ">Category : <span>Hollywood</span></h4>
                        <h4 className="issueD">issue Date : <span>{data[8].date}</span></h4>
                    </div>
            </div>
        </Link>
        
        <Link className='blogItem-link' to={`/technology/${data[9].id}`}>
            <div className="cardArticle">
                    <img src={data[9].image} alt="image not found" />
                    <div className="discr">
                        <div className="titleDisc">
                            {data[9].title}
                        </div>
                        <h4 className="categ">Category : <span>Hollywood</span></h4>
                        <h4 className="issueD">issue Date : <span>{data[9].date}</span></h4>
                    </div>
            </div>
        </Link>
        

        </div>
        <div className="ritContainer">

            <div className="advertise">
                Advertisments
            </div>
            <div className="advertise">
                Advertisments
            </div>
        </div>
        
        
    </div>
  )
}

export default Summary