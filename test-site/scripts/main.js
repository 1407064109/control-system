let myImage = document.querySelector('img');

myImage.onclick = function(){
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/test.jpg'){
    myImage.setAttribute('src', 'images/p2.png');
  }else{
      myImage.setAttribute('src', 'images/test.jpg');
  }
};


let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
  let myName = prompt('请输入你的名字.');
  if(!myName || myName == null){
    setUserName();
  }else{
    localStorage.setItem('name',myName);
    myHeading.innerHTML = 'Mozilla too cool' + myName;
  }
}

if(!localStorage.getItem('name')){
  setUserName();
}else{
  let storedName =  localStorage.getItem('name');
  myHeading.textContent =  'Mozilla too cool' + stroedName;
}

myButton.onclick =  function(){
 setUserName();
};

