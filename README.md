## Setup

### Requirements
"node": ">= 4, git, yarn (optional), pm2 (optional)


###Installation
```
$ git clone https://github.com/waterelder/socks5-proxy.git
$ cd socks5-proxy
$ yarn install
$ cp config.json.dist config.json
// configure your password, login and port in config.json
$ pm2 run index.js

```
