// data
var todos = [
  'Click to remove',
  'Learn React',
  'Write Code',
  'Ship App',
];
var add_item = (text) => {
  todos = [ text ].concat(todos);
}
var remove_item = (index) => {
  todos = todos.filter((l, i) => { return i !== index; })
}

// bind events
var input = document.querySelector('.input');
var bind_add = () => {
  input.addEventListener('keypress', (e) => {
    var text = input.value;
    if((!text) || (e.key !== 'Enter')){ return; }
    add_item(text);
    input.value = '';
    render();
  })
}
var bind_remove = () => {
  var items = document.querySelectorAll('.item');
  items.forEach((dom, index) => {
    dom.addEventListener('click', () => {
      remove_item(index);
      render();
    });
  });
}

// render
var list = document.querySelector('.list');
var render = () => {
  var children = '';
  todos.forEach((label, index) => {
    children += `<div class='item'>${label}</div>`;
  });
  list.innerHTML = children;
  bind_remove();
}

// init
bind_add();
render();
