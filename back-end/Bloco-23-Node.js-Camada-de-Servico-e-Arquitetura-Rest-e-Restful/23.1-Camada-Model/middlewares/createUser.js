// joi é um validador no node
const joi = require('joi');
// rescue é um empacodador que assegura que todos os erros assíncronos passem pelos tratamentos de erros
const rescue = require('rescue');
const userModel = require('../models/user');

const userSchema = joi.object({
    firstName: joi.string().required(),
    lastName: joi.string().required(),
    email: joi.string().email().required(),
    passwords: joi.string().min(6).required()
});
module.exports = [
    (req, res, next) => {
        const { error } = userSchema.validate(req.body);
        if (error) return next(error);
        next();
    },
    rescue(async(req, res, next) => {
        const { firstName, lastName, email, password } = req.body;
        res.status(201).json(newUser);
    })

]