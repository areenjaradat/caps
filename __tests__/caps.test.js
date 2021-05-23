'use strict';

const faker =require('faker');

const vendor=require('../vendor');
const driver=require('../driver');

describe('test',()=>{

  let test={
    storeName:'shopping',
    orderId:faker.datatype.uuid(),
    customerName:faker.name.findName(),
    address:faker.address.cityName(),
  };



  let consoleSpy;

  beforeAll(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });
  afterAll(() => {
    consoleSpy.mockRestore();
  });

  it('new order',()=>{
    vendor.pickOrders();
    expect(consoleSpy).toHaveBeenCalled();
  });
  it('driver pickup order',()=>{
    let testPayload = {
      event: 'inTransit',
      time: new Date().toISOString(),
      payload: test,
    };
    driver.pickUp(testPayload);
    expect(consoleSpy).toHaveBeenCalled();
  });
  it('driver deliver order',()=>{
    let testPayload = {
      event: 'delivered',
      time: new Date().toISOString(),
      payload: test,
    };
    driver.delivered(testPayload);
    expect(consoleSpy).toHaveBeenCalled();
  });
  it('vendor thankyou ',()=>{
    let testPayload = {
      event: 'delivered',
      time: new Date().toISOString(),
      payload: test,
    };
    vendor.thankYou(testPayload);
    expect(consoleSpy).toHaveBeenCalled();
  });

});