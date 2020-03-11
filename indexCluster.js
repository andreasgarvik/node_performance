const cluster = require('cluster')
const express = require('express')
const app = express()

if (cluster.isMaster) {
	cluster.fork()
} else {
	app.get('/', (req, res) => {
		res.send('Hi there')
	})

	app.listen(3000)
}
