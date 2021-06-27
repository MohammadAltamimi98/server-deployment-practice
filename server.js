'use strict';

const express= require ('express');
const app = express();

app.get('/', (req,res)=> {
  res.status(200).send('hello world !');
});



function start(port) {
  app.listen(port,()=>console.log(`This server is up and running on port ${port}`));
}



module.exports={
  app:app,
  start:start,
};