// The loop-based variant of the solution:

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printList(list) {
  let tmp = list;

  while (tmp) {
    alert(tmp.value);
    tmp = tmp.next;
  }

}

printList(list);

// Please note that we use a temporary variable tmp to walk over the list. Technically, we could use a function parameter list instead:

/*
function printList(list) {

  while(list) {
    alert(list.value);
    list = list.next;
  }

}
*/

// …But that would be unwise. In the future we may need to extend a function, do something else with the list. If we change list, then we lose such ability.

// Talking about good variable names, list here is the list itself. The first element of it. And it should remain like that. That’s clear and reliable.

// From the other side, the role of tmp is exclusively a list traversal, like i in the for loop.
