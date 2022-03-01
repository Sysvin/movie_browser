import Hero from './Hero';
import { Link } from 'react-router-dom';

// tmbt api = e2b77162f63d306b505032cf99cbb680
// Example link for movie searches = https://api.themoviedb.org/3/search/movie?api_key=e2b77162f63d306b505032cf99cbb680&language=en-US&query=star%20wars&page=1&include_adult=false

const MovieCard = (props) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`
  const detailUrl = `/movies/${props.movie.id}`
  return (
    <div className="col-lg-3 col-md=3 col-2 my-4">
    <div className="card">
          {!props.movie.poster_path &&
              <img src="https://images.pexels.com/photos/10718272/pexels-photo-10718272.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="There is no poster" className="card-img-top"/>
          }
          {props.movie.poster_path &&
              <img src={posterUrl} className="card-img-top" alt={props.movie.original_title} />
          }
      <div className="card-body">
        <h5 className="card-title">{props.movie.original_title}</h5>
        <Link to={detailUrl} className="btn btn-primary">Show Details</Link>
      </div>
    </div>
    </div>
  )

}

const Search = (props) => {

const title = `You are searching for ${props.keyword}`;
  const resultsHtml = props.searchResults.map((obj, i) => {
    return <MovieCard movie = {obj} key={i}/>
  })



  return (
    <>
    {props.keyword ? <Hero text={title} /> : <Hero text="Search for any movie" />}
    {resultsHtml &&
      <div className="container">
          {resultsHtml && props.keyword ? (
              <div className="row">
                {resultsHtml}
              </div>
            ) : (
              <></>
            )
          }
          {resultsHtml.length ===0 && props.keyword ? (
               <div className="row">
               <h1 className="text-muted my-5 text-center">Oops! The search for {props.keyword} returned no results</h1>
            </div>
            ) : (
              <></>
            )
            
               
            
          }
          
      </div>
    }
      
    </>
  );
};

export default Search;
