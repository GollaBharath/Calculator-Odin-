let newnum = true;
let first = true;
let res = 0;
let firstnumber = 0;
let secondnumber = 0;

function btnmg(event) {
  let btn = event.target.textContent;
  if (!isNaN(parseInt(btn))) {
    btn = parseInt(btn);
    if (newnum == true) {
      if (first == true) {
        addtofirst(btn);
      } else {
        addtosecond(btn);
      }
    }
  } else {
    operator(btn);
  }
}

function addtofirst(a) {
  firstnumber = firstnumber + 10 * a;
}

function addtosecond(a) {
  secondnumber = secondnumber + 10 * a;
}

function operator(fun) {
  if (fun === "+") {
    res = firstnumber + secondnumber;
    console.log(res);
    first = false;
  }
}
