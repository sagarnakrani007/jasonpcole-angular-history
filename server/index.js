
/*
 * jasonco.de-angular-history
 * https://github.com/jasonpcole/jasonco.de-angular-history
 *
 * Copyright (c) 2015 jasonpcole
 * Licensed under the MIT license.
 */

'use strict';

// import

var express = require('express')
  , app = express()
  , port = process.env.PORT || 3000

// configure

app.use(express.favicon())
app.use(express.logger('dev'))
app.use(express.bodyParser())
app.use(express['static'](__dirname + '/../www'))

// catch-all

app.all('*', function(req, res) {
  res.sendfile('www/index.html')
})

// bind

app.listen(port)

console.log('jasonco.de-angular-history listening on port ' + port + '.');
