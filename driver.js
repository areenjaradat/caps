'use strict';

const events=require('./events');

function pickUp(payload){
  console.log(`driver pickup ${payload.payload.orderId}`);
  setTimeout(()=>{
    events.emit('inTransit',payload);
  },1000);
}


function delivered(payload){
  payload.events='inTransit';
  payload.time=new Date();
  console.log('event',payload);
  setTimeout(()=>{
    events.emit('delivered',payload);
  },3000);
}
module.exports={pickUp,delivered};