const jwt = require('jsonwebtoken');
const config =require('./config');

const getToken=(user)=>{
    return jwt.sign({
        _id:user._id,
        name:user.name,
        email:user.email,
        isAdmin:user.isAdmin,
    }, config.JWT_SECRET);
}
const isAuth = (req, res, next) => {
    const token = req.headers.authorization;
    console.log(token);
    console.log(config.JWT_SECRET);
    console.log('starting jwt');
    if (token) {
      const onlyToken = token.slice(7, token.length);
      console.log(onlyToken);
      jwt.verify(onlyToken, config.JWT_SECRET, (err, decode) => {
        if (err) {
          console.log(err);
          return res.status(401).send({ message: 'Invalid Token' });
        }
        console.log(decode);
        req.user = decode;
        next();
        return;
      });
    } else {
      return res.status(401).send({ message: 'Token is not supplied.' });
    }
    console.log('ending jwt');
  };
  
  const isAdmin = (req, res, next) => {
    console.log(req.user);
    if (req.user && req.user.isAdmin) {
      return next();
    }
    return res.status(401).send({ message: 'Admin Token is not valid.' });
  };
  
  module.exports =  { getToken, isAuth, isAdmin };