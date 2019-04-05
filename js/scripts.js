let answerArr = [];
let inputArr = [];
const regExChar = /[^0-9]/g;

function clearArrays(){
  console.log('Wiping out our Arrays for new user input and feedback');
  answerArr = [];
  inputArr = [];
};

function generateArr(maxNum){
    console.log('Generating inputArr based on user input');
    var tempArr = [];
    for(var i = 0; i <= maxNum; i++){
      tempArr.push(i.toString());
    }
    printArr(tempArr);
    return tempArr;
};

function printArr(myArr){
  console.log('Printing out our Arr to console');
  var arrStr = '[';
  for(var i = 0; i < myArr.length; i++){
    arrStr += myArr[i];
    if(i != myArr.length - 1){
      arrStr += ',';
    }
  }
  arrStr += ']';
  console.log(arrStr);
};

function arrLogic(myArr){
  console.log('Editing elements of our Array based on values');
  console.log(myArr[0][0]);
};

$(document).ready(function(){
  $('#myForm').submit(function(event){
    event.preventDefault();
    console.log('Submitting myForm');
    clearArrays();
    var myNum = $('#numInput').val();
    myNum = myNum.replace(regExChar,'');
    if(myNum === ''){
      $('#numInput').val('');
      $('#numInput').attr('placeholder', 'Please enter a VALID number of some sort...');
      return;
    }
    console.log('Your entered number is '+ myNum);
    inputArr = generateArr(myNum);
    answerArr = arrLogic(inputArr);
  });
});
