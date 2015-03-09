'use strict';

// the todo.Todo class is a Todo item, and has the obvious two properties
var todo = todo || {};
todo.Todo = function(data) {
  this.description = m.prop(data.description);
  this.done = m.prop(false);
};

// time for a view-model to handle the view state
todo.vm = (function() {
  var vm = {};
  vm.init = function() {

    // our running list of todo items
    vm.list = new todo.TodoList();

    // somewhere to store the name of a new todo before it is added to the model
    vm.description = m.prop('');

    // add a todo item to the list, and clear description field for next use
    vm.add = function() {
      if(vm.description()) {
        vm.list.push(new todo.Todo({description : vm.description()}));
        vm.description('');
      }
    }
  }
  return vm;
}());
