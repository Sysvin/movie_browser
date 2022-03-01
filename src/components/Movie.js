import Hero from "./Hero";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";



// https://api.themoviedb.org/3/movie/11?api_key=<<api_key>>&language=en-US

const Movie = () => {
  const { id } = useParams() 
  console.log(id); 
  const [ movieDetails, setMovieDetails ] = useState({})
  const [ isLoading, setIsLoading] = useState(true)

  useEffect (() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=e2b77162f63d306b505032cf99cbb680&language=en-US`)
      .then(response => response.json())
      .then(data => {
        
          setMovieDetails(data)
          setIsLoading(false)
        
        
      })
  }, [id])

  

  function renderMovieDetails(){
    if(isLoading){
      return <Hero text="Loading..." />
    }
    if(movieDetails){
      // TODO - what if the postpath comes back null (use conditional)
      const posterPath=`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`
      const backdropUrl =  `https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`
      return (
        <>
          <Hero text={movieDetails.original_title} backdrop={backdropUrl} />
          <div className="container my-5">
              <div className="row">
                  <div className="col-md-3">
                  {!movieDetails.poster_path &&
                      <img src="https://images.pexels.com/photos/65128/pexels-photo-65128.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="There is no poster" className="img-fluid shadow rounded"/>
                  }
                  {movieDetails.poster_path &&
                  <img src={posterPath} alt="..." className="img-fluid shadow rounded"/>
                  }
                  
                        
                  </div>
                  <div className="col-md-9">
                      
                      <p className="lead">
                      <strong>Tagline:</strong> {movieDetails.tagline}
                      </p>
                      <p className="lead">
                      <strong>Overview:</strong> {movieDetails.overview}
                      </p>
                      <p className="lead">
                      <strong>Status:</strong> {movieDetails.status}
                      </p>
                      <p className="lead">
                      <strong>Original Language:</strong> {movieDetails.original_language}
                      </p>
                      <p className="lead">
                      <strong>Release Date:</strong> {movieDetails.release_date}
                      </p>
                      <p>
                        <a href={movieDetails.homepage} target="_blank">Click here to visit the home page</a>
                      </p>
                  </div>
              </div>
          </div>
        </>
      )
    }
  }
  return renderMovieDetails()
};

export default Movie;
