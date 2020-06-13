import Head from 'next/head'
import Link from 'next/link'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {
  const [movie, setMovie] = useState({});
  const [genresApi, setGenresApi] = useState([]);
  const [minYear, setMinYear] = useState("2000");
  const [maxYear, setMaxYear] = useState(new Date().getFullYear());
  const [genres, setGenres] = useState([]);
  const [certificatio, setCertificatio] = useState("12");


  useEffect(() => {
    async function start() {
      try {
        let response = await axios.get('/api/genres')
  
        console.log(response.data)
        setGenresApi(response.data)
        
      } catch (error) {
        console.log(error)
      }
    }
    start();
  }, []);

  async function handleGetMovie() {
    let randonMovie = await axios.post('/api/movie', {
      data: {
        minYear,
        maxYear,
        genres,
        certificatio
      }
    })    
    setMovie(randonMovie.data);

  }

  function changeGenres(event) {
    let genreSelected = event.target.id

    let genreInList = genres.find(element => (element == genreSelected))

    if (genreInList > -1)
    {
      let index = genres.indexOf(genreInList)
      genres.splice(index,1)
      setGenres(genres)
    }
    else 
      setGenres([...genres, genreSelected])
  }

  return (
    <div className="MaxContainer">
      {movie.title && (
        <>
          <header>
            <p>{movie.title}</p>
            <p>{movie.releaseYear}</p>
            <p>{movie.voteCount}</p>
            <p>{movie.voteAverage}</p>
          </header>
          <div id="genres">
            {movie.genres.map(genre => {
              return <p key={genre.id}>{genre.name}</p>;
            })}
          </div>
       
          <a href={"https://www.google.com/search?q="+ movie.title}>Mais sobre o filme</a>
       
          <div class="descposter">
            <img id="poster" src={movie.posterPath} alt="poster"></img>
            
            <div id="overview">{movie.overview}</div>
          </div>


          <div class="container">
          <iframe
            class="responsive-iframe"
            title="teste"
            src={movie.urlTrailler}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            controls={0}
          />
          </div>
        </>
      )}

      <form>
        Pesquisar do ano {" "}
        <input type="text" placeholder="AAAA" value={minYear} onChange={event => setMinYear(event.target.value)}/>        
        {""} até o ano {" "}
        <input type="text" placeholder="AAAA" value={maxYear} onChange={event => setMaxYear(event.target.value)}/>

        <div class="genres">
          {genresApi.map(genre => {
            return (
              <div key={genre.Id}>
                <input type="checkbox" id={genre.Id} name={genre.Id} value={genre.Name} onChange={changeGenres}/>
                <label for={genre.Id}> {genre.Name}</label>
              </div>
            )
          })}
        </div>

        <label for="certificatio">Classificação máxima: </label>
        <select name="certificatio" id="certificatio" value={certificatio} onChange={() => setCertificatio(event.target.value)}>
          <option value="L">L</option>
          <option value="10">10</option>
          <option value="12">12</option>
          <option value="14">14</option>
          <option value="16">16</option>
          <option value="18">18</option>

        </select>
      </form>

      <button type="button" onClick={handleGetMovie}>
        Pesquisar filme
      </button>
    </div>
  )
}
