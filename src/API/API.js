import axios from 'axios';

const API = {
  instance: axios.create({
    baseURL: 'https://api.themoviedb.org/3',
  }),

  params: {
    api_key: '82a1cc43eb07cca0624de05248811f1a',
  },

  async fetchMovieByName(query = '') {
    this.setConfigParams(query);

    const response = await this.instance.get(`/search/movie`, {
      params: this.params,
    });

    return response;
  },

  async fetchPopularMovie() {
    const response = await this.instance.get(`/trending/movie/day`, {
      params: this.params,
    });

    return response;
  },

  async fetchMovieById(id) {
    const response = await this.instance.get(`/movie/${id}`, {
      params: this.params,
    });

    return response;
  },

  async fetchMovieReviewById(id) {
    const response = await this.instance.get(`/movie/${id}/reviews`, {
      params: this.params,
    });

    return response;
  },

  async fetchMovieCastById(id) {
    const response = await this.instance.get(`/movie/${id}/credits`, {
      params: this.params,
    });

    return response;
  },

  setConfigParams(query) {
    this.setMovieName(query);
  },

  setMovieName(query) {
    this.params = { ...this.params, query };
  },
};

export { API };
