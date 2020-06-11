// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import movieController from '../../src/app/controllers/MovieController'
import trailerService from '../../src/app/services/TrailerService'

export default async (req, res) => {
  try {
  let randonMovie = await movieController.show(2010, 2020);

  let videoId = await trailerService.run(
    randonMovie.title,
    new Date(randonMovie.releaseDate.release_date).getFullYear()
  );

  let urlTrailler = `https://www.youtube.com/embed/${videoId}`

  return res.send({...randonMovie, urlTrailler})

  } catch (Error) {
    console.log(Error)
    return res.status(500).send({Message: "Algo deu errado", Error});
  }

}
