export default {
  API:
    process.env.MODE === 'development' ? 'http://app3.startupkit.mangotest.com' : '{api}',
  modules: {
    user: false,
    security: true,
  },
};
