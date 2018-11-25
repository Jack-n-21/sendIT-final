import express from "express";
import bodyParser from 'body-parser';
import parcelRoutes from './routes/parcelRoutes';
import userRoutes from './routes/userRoutes'
import logger from 'morgan';

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use('/api/v1/parcels', parcelRoutes);
app.use('/api/v1/users', userRoutes);

app.get('/',(req,res)=>{
  res.send({
    message:"welcome"
  })
})
const port = process.env.PORT || 5000;

app.listen(port);

export default app;