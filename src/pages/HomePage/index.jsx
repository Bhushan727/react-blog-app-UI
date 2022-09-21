import React from 'react'
import Banner from '../../components/Banner'
import Food from '../../components/Food';
// import Footer from '../../components/Footer';
import Latest from '../../components/Latest';
// import { store } from '../config/Data'
// import { useContext } from 'react'
import Sports from "../../components/Sports/index";
import Summary from '../../components/Summary';
import Technology from '../../components/Technology';

const Home = () => {
  // const [data] = useContext(store);

  // console.log(data);

  // {
  //   data.map((blog) => {
  //     // console.log(blog.id);
  //     if(blog.category === "sports")
  //     {
  //       console.log(blog.category);
  //     }
      
  //   })
  // }

  return (
    <div className='home'>
        <Banner />

        <h1 className="headLine">
          Latest Article
        </h1>
        <Latest/>

        <h1 className="headLine">
          Latest Sports Stories
        </h1>
        <Sports />

        <Summary />

        <h1 className="headLine">
          Latest Technology News
        </h1>
        <Technology />

        <h1 className="headLine">
          Latest Food Article
        </h1>
        <Food />
        
        
    </div>
  )
}

export default Home