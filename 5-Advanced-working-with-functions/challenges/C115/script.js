// They were returning the same value because multiple functions were being created, and all of them accessed the same `i`; by the time `makeArmy()` finished, `i` was already 10.

function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let shooter = function(number) {
      return function() {
        alert(number);
      }
    };
    shooters.push(shooter(i));
    i++;
  }

  return shooters;
}

let army = makeArmy();

army[0]();
army[1]();
army[2]();
