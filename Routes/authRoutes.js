import express from 'express';

import { loginUser, signUpUser, userLogout } from '../Controllers/userController.js';
import Joi from 'joi';
import validator from 'express-joi-validation';
import { userCheck } from '../middleware/authCheck.js';


const validate = validator.createValidator({});


const signUpSchema = Joi.object({
  fullname: Joi.string().min(4).max(25).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(4).max(25).required(),

});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(4).max(25).required(),
});

const router = express.Router();

router.route('/login').post(validate.body(loginSchema), loginUser); //

router.route('/signup').post(validate.body(signUpSchema), signUpUser);

// router.route('/update').patch(userCheck, updateUser);

// router.route('/profile').get(userCheck, getUserProfile);

router.route('/logout').post(userLogout);

export default router;
