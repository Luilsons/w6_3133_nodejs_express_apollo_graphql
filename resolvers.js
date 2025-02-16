const movies = [];

const resolvers = {
  Query: {
    getAllMovies: () => movies,
    getMovieById: (_, { id }) => movies.find(movie => movie.id === id),
  },
  Mutation: {
    addMovie: (_, { name, director_name, production_house, release_date, rating }) => {
      const newMovie = { id: `${movies.length + 1}`, name, director_name, production_house, release_date, rating };
      movies.push(newMovie);
      return newMovie;
    },
    updateMovie: (_, { id, name, director_name, production_house, release_date, rating }) => {
      const movie = movies.find(movie => movie.id === id);
      if (!movie) return null;

      movie.name = name || movie.name;
      movie.director_name = director_name || movie.director_name;
      movie.production_house = production_house || movie.production_house;
      movie.release_date = release_date || movie.release_date;
      movie.rating = rating || movie.rating;

      return movie;
    },
    deleteMovie: (_, { id }) => {
      const index = movies.findIndex(movie => movie.id === id);
      if (index === -1) return null;

      return movies.splice(index, 1)[0];
    },
  },
};

module.exports = resolvers;
