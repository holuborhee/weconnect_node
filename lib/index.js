import express from 'express';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../swagger.json';
import routes from '../routes/index';

const app = express();

const port = 8080;

// parse application/json and look for raw text
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json' }));


app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/api/v1', routes);

app.listen(port);

export default app;


/* // import userController from '../controller/user';
// import reviewController from '../controller/review';

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to we-connect Api',
  }));

   app.post('/auth/signup', userController.signup);
  app.post('/auth/signin', userController.singin);

  app.get('/businesses', businessController.getBusiness);
  app.post('/businesses/', businessController.create);
  app.put('/businesses/:businessId', businessController.update);
  app.delete('/businesses/:businessId', businessController.delete);

  app.post('/businesses/:businessId/reviews', reviewController.create);
  app.get('/businesses/:businessId/reviews', reviewController.fetch);
  // app.get('/users', userController.fetch);
}; */
