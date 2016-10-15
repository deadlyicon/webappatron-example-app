import path from 'path'
import express from 'express'

const publicPath = path.resolve(__dirname, '../public')

const server = express()
server.set('env', process.env.NODE_ENV)
server.set('port', process.env.PORT || '3000')

server.use(express.static(publicPath))

server.get('/*', (request, response) => {
  response.sendFile(publicPath+'/index.html')
});

if (process.env.NODE_ENV !== 'test'){
  server.listen(server.get('port'))
}
