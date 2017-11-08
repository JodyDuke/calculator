function clearButton(){
let btn = document.getElementById('clr');

let event;

let nameChange;

btn.addEventListener("mousedown", function(){
  nameChange = setTimeout(function(){
  	btn.innerHTML = 'AC';
  }, 180);

  event = setTimeout(function(){
  	console.log('cleared')
  }, 1200);
});

btn.addEventListener("mouseup", function(){
  btn.innerHTML = 'CE'
  clearTimeout(event)
  clearTimeout(nameChange)
});

}

clearButton()
