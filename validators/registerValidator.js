const { check } = require("express-validator");

module.exports = [
  check('name')
        .notEmpty().withMessage('El nombre es obligatorio').bail()
        .isAlpha('es-ES').withMessage('No se permite esos caracteres').bail()
        .isLength({
            min : 2
        }).withMessage('Como mínimo 2 caracteres'),
        check('surname')
        .notEmpty().withMessage('El nombre es obligatorio').bail()
        .isAlpha('es-ES').withMessage('No se permite esos caracteres').bail()
        .isLength({
            min : 2
        }).withMessage('Como mínimo 2 caracteres'),
        check('email')
        .notEmpty().withMessage('El email es obligatorio').bail()
        .isEmail().withMessage('De ser un email válido').bail(),
        check('password')
        .notEmpty().withMessage('La contraseña es obligatoria').bail()
        .isLength({
            min : 6,
            max : 12
        }).withMessage('La contraseña debe tener entre 6 y 12 caracteres'),
];