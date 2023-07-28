import React from "react";
import "../styles/Navbar.css";
const Home = () => {
  // const GetMeal = async () => {
  //   let res = await fetch(
  //     "https://themealdb.com/api/json/v1/1/search.php?s=Arrabiata",
  //     {
  //       method: "GET",
  //     }
  //   );

  //   let mealData = await res.text();
  //   console.log(mealData);
  // };

  return (
    <div className="home">
      <div className="child">
        <h1>&#x1F44B; HI, I'm  Pavithra</h1>
        <p>I’m a Product Designer with a passion for participate in every
        <br /> stage of digital product, from discovery to delivery.Helping to
        <br /> focus the business goals on users.</p>
        <div className="home1">
          <p>I’m looking for new opportunities<br/>
          Previously I worked at Multiplica Talent Chile</p>
          <p>Contact Email<br />pavi@gmail.com</p>
          
        </div>
        <p>&#x1F447;Check some project</p>
        <div className="last">
          
  <div className="div1"><img className="ss" src="f3.jpg" alt=""/></div>
  <div className="div2"><img className="ss1" src="f4.jpg" alt=""/></div>
  <div className="div2"><img className="ss1" src="f5.jpg" alt=""/></div>
  {/* <div className="div3"><img className="ss2" src="/s3.jpg" alt=""/></div> */}
  </div>
      </div>
      <div className="card">
        <img src="on.jpeg" alt="" style={{ width: 100, height: 100 }}></img>
        <h3>Pavithra S</h3>
        <p>Devloper</p>
        <div className="c1">
        <h6>🔀  Flow charts</h6>
        </div>
        <div className="c2">
          <h6>🎨  UI Kit</h6>
        </div>
        <div className="c3">
          <h6>🔍  User Research</h6>
        </div>
        <div className="c4">
          <h6>🔤  Fonts</h6>
        </div>
        <div className="c5">
          <h6>🔔  Icons</h6>
        </div>
     
      </div>
      <div className="c6">
          <img src="f.png" alt=""></img>
        </div>
      <div className="c7">
        <img src="f1.jpg" alt=""></img>
      </div>
      <div className="c8">
        <img src="f2.jpg" alt=""></img>
      </div>   
      
    </div>
      
  
  );
};

export default Home;
