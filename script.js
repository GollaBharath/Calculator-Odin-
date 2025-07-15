let res = 0;
let prev = 0;
let active = "";

function btnmg(event) {
  btn = event.target.textContent;
  if (!parseInt(btn) && btn != "0") {
    if (btn === ".") {
      res = res + "";
      if (!res.includes(".")) {
        res = decimal(res);
        print(res);
      } else {
        print(res);
      }
    } else {
      operators(btn);
    }
  } else {
    btn = parseInt(btn);
    if (Number.isInteger(res)) {
      res = res * 10 + btn;
    } else {
      res = res + "";
      let dec = 0;
      res = res + btn * 10 ** dec;
    }
    print(res);
  }
}

function decimal(num) {
  num = num + ".";
  return num;
}

function print(txt) {
  display = document.getElementById("txt");
  display.textContent = txt;
}

function operators(inp) {
  res = parseFloat(res);
  if (["+", "-", "*", "/"].includes(inp)) {
    active = inp;
    prev = res;
    res = 0;
    print("");
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
    if (!Number.isInteger(res)) {
      res = res + "";
      let dec = res.split(".")[1].length;
      if (dec >= 3) {
        dec = dec - 3;
        res = res.slice(0, -dec);
      }
    }
    print(res);
  }

  if (inp == "CLEAR") {
    res = 0;
    active = "";
    prev = 0;
    print(" ");
  }

  if (inp == "BackSpace") {
    if (Number.isInteger(res)) {
      res = Math.round(res / 10);
      print(res);
    } else {
      res = res + "";
      res = res.slice(0, -1);
      res = parseFloat(res);
      print(res);
    }
  }
}

// keyboard support
document.addEventListener("keydown", function (event) {
  if ("1234567890./*-+=".includes(event.key)) {
    btn = event.key;
    if (!parseInt(btn) && btn != "0") {
      if (btn === ".") {
        res = res + "";
        if (!res.includes(".")) {
          res = decimal(res);
          print(res);
        } else {
          print(res);
        }
      } else {
        operators(btn);
      }
    } else {
      btn = parseInt(btn);
      if (Number.isInteger(res)) {
        res = res * 10 + btn;
      } else {
        res = res + "";
        let dec = 0;
        res = res + btn * 10 ** dec;
      }
      print(res);
    }
  } else {
    if (event.key === "Delete") {
      operators("CLEAR");
    }
    if (event.key === "Backspace") {
      operators("BackSpace");
    }
    if (event.key === "Enter") {
      operators("=");
    }
  }
});
