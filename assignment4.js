/*=======================
Problem:1  radianToDegree 
=======================*/

function radianToDegree(radian){
  if(typeof radian === 'number'){
    const degree = radian * (180 / Math.PI);
    const resultInDegree = parseFloat(degree.toFixed(2));
    return resultInDegree;
  }
  else{
    return 'Error: Input a valid number.';
  }
  
}

let radian = 199;
console.log(radianToDegree(radian));



/*=========================
Problem:2  isJavaScriptFile 
=========================*/

function isJavaScriptFile(fileName){
  if(typeof fileName === 'string'){
    const doExist = fileName.endsWith('.js');
    return doExist;
  }
  else{
    return 'Error: Input must be a string type with extension.';
  }
}

let fileName = 'assignment4.js';
console.log(isJavaScriptFile(fileName));



/*=================
Problem 3: oilPrice 
=================*/

function oilPrice(diesel, petrol, octane){
  if(typeof diesel !== 'number' || typeof petrol !== 'number' || typeof octane !== 'number'){
    return 'Error: Wrong input! Input must be a number.';
  }
  else{
    const dieselPrice = 114;
    const petrolPrice = 130;
    const octanePrice = 135;
  
    const totalPrice = (diesel * dieselPrice) + (petrol * petrolPrice) + (octane * octanePrice);
    return totalPrice;
  }
}

let diesel = 30;
let petrol = 20;
let octane = 10;
console.log(oilPrice(diesel, petrol, octane));



/*======================
Problem 4: publicBusFare
======================*/

function publicBusFare(person){
  if(typeof person === 'number'){
    const personInBus = 50;
    const personInMicrobus = 11;
    const fareOfPB = 250;
  
    const totalFareOfPublicBus = ((person % personInBus) % personInMicrobus) * fareOfPB;
    return totalFareOfPublicBus;
  }
  else{
    return 'Error: Input a valid number.';
  }

}

let person = 365;
console.log(publicBusFare(person));



/*=====================
Problem 5: isBestFriend 
=====================*/

function isBestFriend(obj1, obj2){
  if(typeof obj1 !== 'object' || typeof obj2 !== 'object' || Array.isArray(obj1) === true || Array.isArray(obj2) === true){
    return 'Error: Both inputs must be an object type.';
  }
  else{
    if(obj1.name === obj2.friend && obj1.friend === obj2.name){
      return true;
    }
    else{
      return false;
    }
  }
}

let friend1 = {name: 'abul', friend: 'babul'};
let friend2 = {name: 'babul', friend: 'abul'};
console.log(isBestFriend(friend1, friend2));
