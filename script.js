res = 0;
prev = 0;
active = "";

function btnmg(event) {
  btn = event.target.textContent;
  if (!parseInt(btn) && btn != "0") {
    operators(btn);
  } else {
    btn = parseInt(btn);
    res = res * 10 + btn;
    print(res);
  }
}

function print(txt) {
  display = document.getElementById("txt");
  display.textContent = txt;
}

function operators(inp) {
  if (["+", "-", "*", "/"].includes(inp)) {
    active = inp;
    prev = res;
    res = 0;
    print(res);
  }
  if (inp == "=") {
    if (active == "+") {
      res = prev + res;
    }
    if (active == "-") {
      res = prev - res;
    }
    if (active == "*") {
      res = prev * res;
    }
    if (active == "/") {
      res = prev / res;
    }
    print(res);
  }
}
