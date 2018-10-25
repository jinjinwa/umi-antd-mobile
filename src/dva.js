export default {
  config() {
    return {
      onError(err) {
        err.preventDefault();
      },
    };
  },
};
