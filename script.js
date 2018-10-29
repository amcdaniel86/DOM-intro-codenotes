

let theButton = document.querySelector('#add-item-button');

// theButton.onclick = wow


// theButton.onclick = function(){

  // let empty = document.getElementById('empty-div');
  // let theInput = document.querySelector('.theInput');
  // let whateverITyped = theInput.nodeValue;
  
  // let newThing = document.createElement('h2');
  
  // newThing.innerHTML = 'whateverITyped';
  
  // empty.appendChild(newThing);
  
  // theInput.value= '';
  
  //console.log('hello');
  
  
}

theButton.onclick = function(e){
  e.preventDefault()

  let empty = document.getElementById('empty-div');
  let theInput1 = document.querySelectorAll('.theInput')[0];
  let theInput2 = document.querySelectorAll('.theInput')[1];
  
  let result = `${theInput1.value} plus ${theInput2.value} plus  ${ equals} plus ${result};`

  newThing.innerHTML = result;

  empty.appendChild(newThing);

  theInput1.value = '';
  theInput2.value = '';


}

let buttons = document.getElementsByClassName('btn');

for(let i =0; i < buttons.length; i++){
  
  buttons[i].onclick = function(event){

    event.currentTarget.classList += " small-blue";

    }
  
}