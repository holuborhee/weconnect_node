import express from 'express';
import { BusinessController, AuthController } from '../controllers';


const app = express();
// const router = express.Router();


app.route('/')
  .get((req, res) => res.status(200).send({ message: 'WECONNECT API VERSION1' }));

app.route('/businesses')
  .post(BusinessController.create)
  .get(BusinessController.index);


app.route('/businesses/:id')
  .delete(BusinessController.destroy)
  .get(BusinessController.show)
  .put(BusinessController.update);

app.route('/businesses/:id/reviews')
  .get((req, res) => res.json({ message: `This is to get all reviews of business with id of ${req.params.id}` }))
  .post((req, res) => res.json({ message: `This is to post a new review for business with id of ${req.params.id}` }));


app.post('/auth/signup', AuthController.register);

app.post('/auth/login', AuthController.login);


export default app;


/* Test Cases

 Registration - When required fields were not present
                When all required fileds present but none required filed not present
                When allfileds present


 Login - When username or password not provided
         When username and password doesn;t match
         When username and pasword matches

*/
