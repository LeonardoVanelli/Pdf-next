import api from './api';
import { random } from '../utils/number';

class RandomMovieService {
  async run(minYear = null, maxYear = null, genres = [], certificatio = '12') {
    const params = this.createFilter(certificatio, maxYear, minYear, genres);

    const response = await api.get('/discover/movie', {
      params,
    });

    if (response.data.results.length === 0) throw new Error('No movies found');

    params.page = random(String(response.data.total_pages));

    if (params.page === 0) params.page = 1;

    const responseRandomPage = await api.get('/discover/movie', {
      params,
    });
    console.log(responseRandomPage);
    const randomIndex = random(responseRandomPage.data.results.length - 1);

    if (responseRandomPage.data.results[randomIndex].overview === '') {
      return this.run(minYear, maxYear, genres, certificatio);
    }

    return responseRandomPage.data.results[randomIndex].id;
  }

  createFilter(certificatio, maxYear, minYear, genres) {
    const params = {
      api_key: process.env.TMDB_KEY,
      language: 'pt-BR',
      region: 'BR',
      'vote_average.gte': 4,
      certification_country: 'BR',
      'certification.lte': certificatio,
      adult: true,
    };
    if (maxYear) {
      params['release_date.lte'] = new Date(maxYear, 12, 31).toJSON();
    }
    if (minYear) {
      params['release_date.gte'] = new Date(minYear, 1, 1).toJSON();
    }
    if (genres.length > 0) {
      params.with_genres = genres.join(',');
    }
    return params;
  }
}

export default new RandomMovieService();
