const express = require('express');
const { createRegister, login, profile } = require('../controllers/auth.controller');
const validate = require('../middlewares/validate.middleware');
const { registerSchema, loginSchema } = require('../validations/auth.validation');
const authMiddleware = require('../middlewares/auth.middleware');

const authRoute = express.Router();

authRoute.post("/register", validate(registerSchema), createRegister)
authRoute.post("/login", validate(loginSchema), login)
authRoute.get("/me", authMiddleware, profile)

module.exports = authRoute