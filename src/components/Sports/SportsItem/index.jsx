import React from 'react'
import './style.css';

const SportList = ({blog}) => {
  return (
    <div className='card'>
            <img src="assets/valley3.jpg" alt="not found" className='cardImg' />
            <div className="cardTitle">
                <h3 className="title">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias quae accusantium architecto quas quia quod aut quos dolores non beatae. Distinctio voluptate neque cupiditate non repellat tempora officiis aspernatur praesentium.
                </h3>
            </div>
            <h5 className="dateTitle">
              release date : <span> 02/09/2022</span>
            </h5>
    </div>
  )
}

export default SportList