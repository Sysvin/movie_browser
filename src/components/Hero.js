const Hero = (props) => {
    return (
      <header className="bg-dark text-white p-5 hero-container text-center">
        <h1 className="hero-text">{props.text}</h1>
        {props.backdrop &&
          <div className="hero-backdrop" style={{backgroundImage: `url(${props.backdrop})`}}>
            
          </div>
        }
      </header>

    )
  }

  export default Hero; 