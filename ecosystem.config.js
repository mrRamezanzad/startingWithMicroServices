module.exports = {
  apps : [{
      name: "Gateway",
      script: './packages/gateway/server.js',
      watch: './packages/gateway/',
      env: {
        NODE_ENV: 'development',
        PORT: 80,
        Q_URI: "amqps://ritgeven:u9dd0zQnk_nn9axaNTh6qxvosRKUIBI9@baboon.rmq.cloudamqp.com/ritgeven"
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
    },
    {
      name: "Mailing Service",
      script: "./packages/mail_service/index.js",
      watch: "./packages/mail_service/",
      env: {
        Q_URI: "amqps://ritgeven:u9dd0zQnk_nn9axaNTh6qxvosRKUIBI9@baboon.rmq.cloudamqp.com/ritgeven"
      }
    }
  ],
};
