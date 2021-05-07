module.exports = {
  apps : [{
      name: "Gateway",
      script: './packages/gateway/server.js',
      watch: './packages/gateway/',
      env: {
        NODE_ENV: 'development',
        PORT: 80
      }
    },
    {
      name: "Database Service",
      script: './packages/db_service/server.js',
      watch : './packages/db_service/',
      env: {
        NODE_ENV: 'development',
        PORT: 81
      }
    }
  ],
};
