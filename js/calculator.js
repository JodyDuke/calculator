function calculator(){
  let memory = [];

  let buttons = document.querySelectorAll('.button')

  for(i = 0; i < buttons.length ; i++){
    buttons[i].addEventListener('click', function(){
      let input = document.getElementById('input');
      switch (this.value){
        case 'clear':
          memory = [];
          break;
        case '=':
          memory.push(input.value)
          console.log(eval(memory.join('')))
          input.value = '';
          break;
        default:
          memory.push(input.value)
          memory.push(this.value)
          input.value = '';
      }
    })
  }
}

calculator()



