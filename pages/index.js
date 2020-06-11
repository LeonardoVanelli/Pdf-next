import Head from 'next/head'
import Link from 'next/link'
import React, { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [videoKey, setvideoKey] = useState('');
  const [movie, setMovie] = useState({});

  async function handleGetMovie() {

    let randonMovie = await axios.get('/api/movie')
    console.log(randonMovie.data)
    setMovie(randonMovie.data);
  }

  return (
    <div class="MaxContainer">
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

      <button type="button" onClick={handleGetMovie}>
        Pesquisar filme
      </button>
    </div>
  )
}
