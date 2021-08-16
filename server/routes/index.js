const Router = require('express')
const router = new Router()
//heroku
const herokuRouter = Router.Router()
const apiRouter = require('./api')
//heroku

const deviceRouter = require('./deviceRouter')
const brandRouter = require('./brandRouter')
const typeRouter = require('./typeRouter')
const userRouter = require('./userRouter')

//heroku
herokuRouter.use('/api', apiRouter);

// Serve React build files in production
if (process.env.NODE_ENV === 'production') {
  const path = require('path');
  // Serve the frontend's index.html file at the root route
  herokuRouter.get('/', (req, res) => {
    res.cookie('XSRF-TOKEN', req.csrfToken());
    res.sendFile(
      path.resolve(__dirname, '../../client', 'build', 'index.html')
    );
  });

// Serve the static assets in the frontend's build folder
  herokuRouter.use(Router.static(path.resolve("../client/build")));

  // Serve the frontend's index.html file at all other routes NOT starting with /api
  herokuRouter.get(/^(?!\/?api).*/, (req, res) => {
    res.cookie('XSRF-TOKEN', req.csrfToken());
    res.sendFile(
      path.resolve(__dirname, '../../client', 'build', 'index.html')
    );
  });
}
// Add a XSRF-TOKEN cookie in development
if (process.env.NODE_ENV !== 'production') {
  herokuRouter.get('/api/csrf/restore', (req, res) => {
    res.cookie('XSRF-TOKEN', req.csrfToken());
    res.status(201).json({});
  });
}

router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/device', deviceRouter)

module.exports = router
module.exports = herokuRouter