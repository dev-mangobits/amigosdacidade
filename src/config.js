export default {
  API:
    process.env.MODE === 'development' ? 'http://diegoveiculos.startupkit.mangotest.com' : '{url}',
  modules: {
    user: false,
    security: true,
  },
};
