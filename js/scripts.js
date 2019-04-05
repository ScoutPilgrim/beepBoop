let answerArr = [];
let inputArr = [];
const regExChar = /[^0-9]/g;
const caseRegEx =/[123]/g

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
  var charPriority;
  var myCase;
  for(var i = 0; i < myArr.length; i++){
    var caseFound = false;
    var caseCompared = false;
    myCase = 0;
    for(var j = 0; j < myArr[i].length; j++){
      if(!!myArr[i][j].match(caseRegEx)){
        caseFound = true;
      }
      if(caseFound === true){
        myCase = casePrio(myCase, myArr[i][j]);
        caseFound = false;
        caseCompared = true;
      }
    }
    if(caseCompared === true){
      answerArr.push(whichCase(myCase));
      continue;
    }else{
      answerArr.push(myArr[i]);
    }
  }
  return answerArr;
};

function whichCase(myChar){
  console.log('Which case is being called for the char ' + myChar);
  switch (myChar) {
    case '1':
      return 'Beep!';
      break;
    case '2':
      return 'Boop!';
      break;
    case '3':
      return "I'm sorry, Dave. I'm afraid I can't do that.";
      break;

  }
};

function casePrio(myChar, myNewChar){
  console.log('Calling casePrio to determine which spec to call. Current Spec: ' +myChar+ '. New Spec: ' +myNewChar);
  var myInt = parseInt(myChar);
  var myNewInt = parseInt(myNewChar);
  if(myInt < myNewInt){
    console.log('Updating priority to case '+myNewChar);
    return myNewChar;
  }else{
    console.log('Case remains as ' +myChar);
    return myChar;
  }
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
    console.log(answerArr);
    $('.isHide').show();
    $('#myAns').find('p').text(answerArr);
  });
});
