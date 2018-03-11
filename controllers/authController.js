

/**
  * Authentication Controller
  * @class AuthController
  *
  */
class AuthController {
  /**
      * Registers a new User
      *
      * @param {object} req The request body of the request.
      * @param {object} res The response body.
     * @returns {object} res.
     */
  static register(req, res) {
    const { name } = req.body;

    if (!name) {
      return res.status(400).send({
        message: 'Some required fields were not present',
        error: true,
      });
    }

    return res.status(201).send({
    	message: `You have been registered with name : ${name}`,
    	error: false,
    });
  }

  /**
      * Authenticate an existing user
      *
      * @param {object} req The request body of the request.
      * @param {object} res The response body.
     * @returns {object} res.
     */
  static login(req, res) {
  	const { key, password } = req.body;

  	if (!key || !password) {
  	  return res.status(400).send({
  	    message: 'You have to provide email and Password',
  	    error: true,
  	  });
  	}

  	return res.status(200).send({
  	  message: `Here is your email or phone: ${key}`,
  	  error: false,
  	});
  }
}

export default AuthController;
