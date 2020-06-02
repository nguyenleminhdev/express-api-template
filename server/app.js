class Server {
    constructor() {
        this.express = require('express')
        this.app = this.express()
        this.router = this.express.Router()
        this.server = require('http').Server(this.app)
        this.fs = require('fs')
        this.path = require('path')
        this.async = require('async')
        this._ = require('lodash')
        this.colors = require('colors')
        this.morgan = require('morgan')
        this.glob = require('glob')
        this.request = require('request')
        this.mongoose = require('mongoose')
        this.redis = require('redis')
        this.socket_io = require('socket.io')
        this.ws = require('ws')
        this.cors = require('cors')
        this.body_parser = require('body-parser')
        this.elasticsearch = require('elasticsearch')
        this.jsonwebtoken = require('jsonwebtoken')
        this.jwt_decode = require('jwt-decode')
        this.uuid = require('uuid')
        this.bcryptjs = require('bcryptjs')
        this.aes256 = require('aes256')
    }

    init() {
        this.async.waterfall([
            (next) => {
                require('./configs/sencurity')(this)
                next()
            },
            (next) => {
                this.glob
                    .sync('./api/*(policies)/*.js')
                    .map(file => require(this.path.resolve(file))(this))
                next()
            },
            (next) => {
                this.glob
                    .sync('./configs/!(sencurity).js')
                    .map(file => require(this.path.resolve(file))(this))
                next()
            },
            (next) => this.connect_mongo_db(e => (e) ? next(e) : next()),
            (next) => this.connect_redis(e => (e) ? next(e) : next()),
            (next) => this.connect_elastic_search(e => (e) ? next(e) : next()),
            (next) => {
                this.glob
                    .sync('./api/*(controllers|models|response|services)/*.js')
                    .map(file => require(this.path.resolve(file))(this))
                next()
            },
            (next) => this.listen(() => next())
        ], e => {
            if (e) return console.log(`Error on start server: ${JSON.stringify(e, null, 4)}`.red)
            console.log('Start server sucessfuly'.cyan)
        })
    }
}

const SERVER = new Server()
SERVER.init()