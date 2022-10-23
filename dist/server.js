//1.导入http模块
const http = require('http')
const fs = require('fs')
const path = require('path')
//2.创建web服务器实例
const server = http.createServer()
//3.为服务器实例绑定request事件，监听客户端的请求
server.on('request', (req, res) => {

    let url = req.url;
    let fspath = path.join(__dirname, url)
    fs.readFile(fspath, 'utf-8', (err, string) => {
        if (err) {
            return res.end('404 not found')
        }
        res.end(string)
    })
})
//4.启动服务器
server.listen(8000, () => {
    console.log('server running')
})
