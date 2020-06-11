class Movie {
  constructor() {
    this.id = 0;
    this.title = '';
    this.overview = '';
    this.releaseDate = null;
    this.productionCompanies = [];
    this.genres = [];
    this.credits = null;
    this.runtime = 0;
    this.voteAverage = 0;
    this.voteCount = 0;
    this.trailer = null;
    this.posterPath = null;
    this.country = '';
  }

  get certification() {
    if (this.releaseDate && this.releaseDate.certification !== '')
      return this.releaseDate.certification;
    return null;
  }

  get releaseYear() {
    if (this.releaseDate)
      return new Date(this.releaseDate.release_date).getFullYear();
    return null;
  }
}

export default new Movie();
