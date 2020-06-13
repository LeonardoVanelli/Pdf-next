import api from '../services/api';
import Genre from '../models/Genre'

class GenreController {
    async show() {

        let genresApi = await api.get('genre/movie/list', {
            params: {
                api_key: process.env.TMDB_KEY,
                language: 'pt-BR',
            }
        })

        return genresApi.data.genres.map(genreApi => new Genre(genreApi.id, genreApi.name))        
    }
}

export default new GenreController();
