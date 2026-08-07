// The recursive variant of printList(list) follows a simple logic: to output a list we should output the current element list, then do the same for list.next:

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

  alert(list.value); // output the current item

  if (list.next) {
    printList(list.next); // do the same for the rest of the list
  }

}

printList(list);

// Now what’s better?

// Technically, the loop is more effective. These two variants do the same, but the loop does not spend resources for nested function calls.

// From the other side, the recursive variant is shorter and sometimes easier to understand.
