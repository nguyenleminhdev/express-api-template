module.exports = self => {
    self.express = require('express')
    self.body_parser = require('body-parser')
    self.cors = require('cors')
    self.morgan = require('morgan')
    self.async = require('async')
    self._ = require('lodash')
    self.colors = require('colors')
    self.path = require('path')
    self.mongoose = require('mongoose')
    self.web_socket = require('ws')
}