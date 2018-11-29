import express from 'express';
import bodyParser from 'body-parser';
import parcelRoutes from './routes/parcelRoutes';
import userRoutes from './routes/userRoutes'
import logger from 'morgan';
const jwt = require('jsonwebtoken')

const app = express();


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use('/api/v1/parcels', parcelRoutes);
app.use('/api/v1/users', userRoutes);


app.post('/api/login', verifyToken, ( req, res)=>{

  jwt.verify(req.token, 'secretkey', (err, authData)=>{
    if(err){
      res.sendStatus(403);
    } else{
      res.json({
        message: 'post created..',
        authData
      });
    }

    });
  });
 



  // authentication
// app.post('/api/login', verifyToken, ( req, res)=>{
  // user

  const user= {
    id:1,
    username:'jack',
    email:'user@gmail.com'
  }
  jwt.sign({user}, 'secretkey', (err, token)=>{
    res.json({
      token
    });
  });

// verify token 
function verifyToken(req, res, next){

  const bearerHeader = req.headers['authorization'];

  if(typeof bearerHeader !=='undefined'){

    const bearer= bearerHeader.split('');
    const bearerToken = bearer[1];
    req.token= bearerToken;
    next();


  }else {
    res.sendStatus(403)
  }
  

}
const port = process.env.PORT || 5000;

app.listen(port);

export default app;