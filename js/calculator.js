function looper(a, b){
  b.innerHTML = "";
  a.forEach(function(e){
      b.innerHTML += e;
      b.innerHTML += " ";
  });
}

function calculator(){
  let memory = [],
  tracker = document.getElementById('tracker'),
  inputEl = document.getElementById('input'),
  input = "";

  document.getElementById('container').addEventListener('click', function(event){
    //event.target.value;
      if(event.target.value.match(/[.0123456789]/g)) {
        input += event.target.value;
        inputEl.innerHTML = input;
      }
      else if(event.target.value.match(/[*/+-]/g)) {
        memory.push(inputEl.innerHTML, event.target.value);
        inputEl.innerHTML = "";
        input = "";
        looper(memory, tracker);    
      }
      else if(event.target.value === "="){
        memory.push(inputEl.innerHTML);
        inputEl.innerHTML = eval(memory.join(''));
        looper(memory, tracker); 
      }

  });
}

calculator()



