module.exports = {
  apps: [
    {
      name: 'shop',
      script: 'server.js',
      instances: 'max',
      exec_mode: 'cluster',
      max_memory_restart: '1024M',
      env: {
        COMMON_VARIABLE: 'true',
      },
      env_dev: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
