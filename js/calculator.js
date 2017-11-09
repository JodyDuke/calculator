function looper(a, b){
  b.innerHTML = "";
  a.forEach(function(e){
      b.innerHTML += e;
      b.innerHTML += " ";
  });
};

(function calculator(){
  let memory = [],
  tracker = document.getElementById('tracker'),
  inputEl = document.getElementById('input'),
  input = "",
  btn = document.getElementById('clr'),
  event,
  nameChange;

  document.getElementById('container').addEventListener('click', function(event){
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
      else if(event.target.value === "=" && memory.length > 0){
        memory.push(inputEl.innerHTML);
        inputEl.innerHTML = eval(memory.join(''));
        looper(memory, tracker);
      }
      else if(event.target.value === "clear"){
        memory.pop();
        inputEl.innerHTML = "";
        input = "";
        looper(memory, tracker);
      }
  });

  btn.addEventListener("mousedown", function(){
    nameChange = setTimeout(function(){
      btn.innerHTML = 'AC';
    }, 180);

    event = setTimeout(function(){
      memory = [];
      input = "";
      inputEl.innerHTML = "";
      looper(memory, tracker);
    }, 1100);
  });

  btn.addEventListener("mouseup", function(){
    btn.innerHTML = 'CE';
    clearTimeout(event);
    clearTimeout(nameChange);
  });
})()



