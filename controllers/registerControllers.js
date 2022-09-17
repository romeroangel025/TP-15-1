const { validationResult } = require("express-validator");

module.exports = {
  
register: (req, res) =>{
   
 return res.render('register');
 
},
registerValidation: (req, res) => {

    const errors = validationResult(req);
     if(errors.isEmpty()){
       return res.send("Registro exitoso")
    }else{
        return res.render('register',{
           errors : errors.mapped(),
            old : req.body
        })
    }
  },
};