## Setup

### Requirements
node.js, git, yarn (optional), pm2 (optional)


### Installation

#### Manual
```
$ git clone https://github.com/waterelder/socks5-proxy.git
$ cd socks5-proxy
$ yarn install
$ cp config.json.dist config.json
// configure your password, login and port in config.json
$ pm2 run index.js

```
#### Docker

```
$ git clone https://github.com/waterelder/socks5-proxy.git
$ cd socks5-proxy
$ docker-compose up -d    // Don't forget specify your port in docker-compose.yml
```
