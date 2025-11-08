const http = require('http')
http.get({ hostname: 'jsonplaceholder.typicode.com', path: '/todos/1', agent: false }, res => {
  let data = ''
  res.on('data', c => data += c)
  res.on('end', () => console.log('response', data))
}).on('error', e => console.error(e))
