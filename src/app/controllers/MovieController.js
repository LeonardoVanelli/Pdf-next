import DetailsMovieService from '../services/DetailsMovieService';
import RandomMovieService from '../services/RandomMovieService';

class MovieController {
  async show(minYear = null, maxYear = null, genres = [], certificatio = '12') {
    console.log('entrou')
    const randomMovieId = await RandomMovieService.run(
      minYear,
      maxYear,
      genres,
      certificatio
    );
    const movieDetails = await DetailsMovieService.run(randomMovieId);
    return movieDetails;
  }
}

export default new MovieController();
