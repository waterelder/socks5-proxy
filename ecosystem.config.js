module.exports = {
  apps: [
    {
      name: "socks5-proxy",
      script: "./index.js",
      env: {
        COMMON_VARIABLE: "true"
      },
      env_production: {
        NODE_ENV: "production"
      }
    }
  ],
  deploy: {
    prod: {
      user: "lex",
      host: "178.238.233.88",
      "ssh_options": "ForwardAgent=yes",
      ref: "origin/master",
      repo: "git@github.com:waterelder/socks5-proxy.git",
      path: "/var/www/socks5-proxy",
      "post-deploy": "yarn install && pm2 startOrRestart ecosystem.config.js --env production && pm2 save",
      env: {
        "NODE_ENV": "production"
      }
    },
  }
};
