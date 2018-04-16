const express = require('express');
const sass = require('node-sass');
const path = require('path');
const PORT = process.env.PORT || 5000;

express()
  .set('views', path.join(__dirname, 'views'));
  .set('view engine', 'ejs');
  .get('/', (req, res) => res.render('pages/index'));
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));
  .use(
    sass.middleware({
      src: __dirname + '/sass',
      dest: __dirname + '/public/stylesheets',
      prefix:  '/stylesheets',
      debug: true,
    })
  );
  .use(express.static(path.join(__dirname, 'public')));
  )
