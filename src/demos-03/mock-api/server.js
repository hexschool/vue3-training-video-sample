import { createServer } from 'node:http'

const PORT = 3001

const users = [
  { id: 1, name: 'Antonio' },
  { id: 2, name: 'Bella' },
  { id: 3, name: 'Charlie' },
]

const server = createServer((req, res) => {
  console.log(`${new Date().toLocaleTimeString()}  ${req.method} ${req.url}  Host: ${req.headers.host}  Origin: ${req.headers.origin ?? '（沒有）'}`)

  if (req.method === 'GET' && req.url === '/api/users') {
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' })
    res.end(JSON.stringify(users))
    return
  }

  res.writeHead(404, { 'Content-Type': 'application/json; charset=utf-8' })
  res.end(JSON.stringify({ message: 'Not Found' }))
})

server.listen(PORT, () => {
  console.log(`Mock API 已啟動：http://localhost:${PORT}/api/users（沒有開 CORS）`)
})
