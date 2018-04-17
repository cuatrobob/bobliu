const express = require('express')
const path = require('path')
const sassMiddleware = require('node-sass-middleware')
const PORT = process.env.PORT || 5000

express()
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .use(
    sassMiddleware({
      src: __dirname + '/sass',
      dest: __dirname + '/public/stylesheets',
      prefix:  '/stylesheets',
      debug: true,
    })
  )
  .use(express.static(__dirname + '/public'))
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
