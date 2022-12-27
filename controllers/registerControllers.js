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
   login: (req, res) => {
    return res.render("login");
  },
  processlogin: (req, res) => {
    let errors = validationResult(req);

    if (errors.isEmpty()) {
      let { name,surname,email,password,recordarme } = req.body;

      req.session.user = {
        name,surname,email,password 
      };

      if (recordarme) {
        res.cookie("login", req.session.user, {
          maxAge: 1000 * 60 * 60 * 24,
        });
      }

       return res.redirect("/valid"); 
    } else {
      return res.render("login", {
        errors: errors.mapped(),
      });
    }
  },
 
  valid: (req, res) => {
    return res.render("valid");
  },
  logout: (req, res) => {
    req.session.destroy();
    res.cookie("login", null, { maxAge: -1 });
    return res.redirect("/");
  },
};