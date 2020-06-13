import genresController from '../../src/app/controllers/GenreController'

export default async (req, res) => {
  try {
    let genres = await genresController.show();

    res.send(genres);

  } catch (Error) {
    console.log(Error)
    return res.status(500).send({Message: "Algo deu errado", Error});
  }

}