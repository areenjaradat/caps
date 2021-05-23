'use strict';

const events=require('./events');

const vendor=require('./vendor');
const driver=require('./driver');

setInterval(()=>{
  vendor.pickOrders();
},5000);
events.on('pickup',driver.pickUp);
events.on('inTransit',driver.delivered);
events.on('delivered',vendor.thankYou);