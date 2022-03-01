import Hero from './Hero';

const Home = (props) => {


    return(
      <>
        <Hero text="Welcome to the Movie Browser"/>
        <div className="container">
          <div className="row">
              <div className="col-lg-8 offset-lg-2 my-5">
                <h2>
                This is an app that I built with React.js, using Function Based Components. This was a project for a Udemy class entitled "The Ultimate 2022 Fullstack Web Development Bootcamp" by Kalob Taulien. This project uses props, React Router, and React Hooks: such as useState, useEffect, and useNavigate. 
                </h2>
                <br></br>
                <h2>
                To use this app enter a movie title into the search input in the navigation bar. Press "search" and you will be given the results of your search. Press the "Details" button on any of the results, to see the more in depth information about any of the movies.  

                </h2>
              </div>
          </div>
        </div>
      </>
    )
  }

  export default Home; 