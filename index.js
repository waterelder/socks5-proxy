const socks = require('socksv5');

const fs = require('fs');
const config = JSON.parse(fs.readFileSync('./config.json', 'utf8'));

const srv = socks.createServer((info, accept, deny) => {
  console.log(info);
  accept();
});

srv.listen(config.port, '0.0.0.0', () => {
  console.log(`SOCKS server listening on port ${config.port}`);
});

srv.useAuth(socks.auth.UserPassword((user, password, cb) => {
  cb(user === config.user && password === config.password);
}));
