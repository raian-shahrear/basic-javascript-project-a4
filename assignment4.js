// Problem:1  radianToDegree

function radianToDegree(radian){
  if(typeof radian === 'number'){
    const degree = radian * (180 / Math.PI);
    const resultInDegree = parseFloat(degree.toFixed(2));
    return resultInDegree;
  }
  else{
    return 'Error: Input a valid number';
  }
  
}

let radian = 10;
console.log(radianToDegree(radian));



// Problem:2  isJavaScriptFile

function isJavaScriptFile(fileName){
  if(typeof fileName === 'string'){
    const doExist = fileName.endsWith('.js');
    return doExist;
  }
  else{
    return 'Error: Input a valid file name with extension';
  }
}

const fileName = 'assignment.js';
console.log(isJavaScriptFile(fileName));



// Problem 3: oilPrice

function oilPrice(diesel, petrol, octane){
  if(typeof diesel !== 'number' || typeof petrol !== 'number' || typeof octane !== 'number'){
    return 'Error: Wrong input! Input must be a number';
  }
  else{
    const dieselPrice = 114;
    const petrolPrice = 130;
    const octanePrice = 135;
  
    const totalPrice = (diesel * dieselPrice) + (petrol * petrolPrice) + (octane * octanePrice);
    return totalPrice;
  }
}

const diesel = 30;
const petrol = 20;
const octane = 10;
console.log(oilPrice(diesel, petrol, octane));



// Problem 4: publicBusFare

function publicBusFare(person){
  if(typeof person === 'number'){
    const personInBus = 50;
    const personInMicrobus = 11;
    const fareOfPB = 250;
  
    const totalFareOfPublicBus = ((person % personInBus) % personInMicrobus) * fareOfPB;
    return totalFareOfPublicBus;
  }
  else{
    return 'Error: Input a valid number';
  }

}

const person = 62;
console.log(publicBusFare(person));



// Problem 5: isBestFriend

function isBestFriend(obj1, obj2){
  if(typeof obj1 !== 'object' || typeof obj2 !== 'object' || Array.isArray(obj1) === true || Array.isArray(obj2) === true){
    return 'Error: Both inputs must be an object type';
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

const friend1 = {name: 'abul', friend: 'babul'};
const friend2 = {name: 'babul', friend: 'abul'};
console.log(isBestFriend(friend1, friend2));
