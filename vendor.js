'use strict';

require('dotenv').config();

const storeName=process.env.STORE;

const events=require('./events');

const faker=require('faker');

function newOrders(){
  let order={
    storeName:storeName,
    orderId:faker.datatype.uuid(),
    customerName:faker.name.findName(),
    address:faker.address.cityName(),
  };
  return order;
} 

function pickOrders(){
  console.log('order pickup ');
  events.emit('pickup',{
    event:'pickup',
    time:new Date(),
    payload:newOrders(),
  });
  
}

function thankYou(payload){
  payload.event='delivered';
  payload.time=new Date();
  console.log('vendor thank you ');
  console.log('event  ',payload);
}
module.exports={
  pickOrders,
  thankYou,
};