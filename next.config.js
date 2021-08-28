const {PHASE_DEVELOPMENT_SERVER} = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "NextChris",
        mongodb_password: "1AQTcYVXRlaHEvhF",
        mongodb_clustername: "cluster0",
        mongodb_database: "my-blog-dev",
      },
    };
  }
  return {
    env: {
      mongodb_username: "NextChris",
      mongodb_password: "1AQTcYVXRlaHEvhF",
      mongodb_clustername: "cluster0",
      mongodb_database: "my-blog",
    },
  };
};
