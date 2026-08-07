function printListRepetition(list) {
    let alternativeList = [];
    let tmp = list;

    while (tmp) {
        alternativeList.unshift(tmp.value);
        tmp = tmp.next;
    }

    for (let value of alternativeList) {
        alert(value);
    }
}

function printListRecursion(list) {
    if (list.next != null) printListRecursion(list.next);

    alert(list.value);
}

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

printListRepetition(list);

printListRecursion(list);
