function displaySum() {
  let firstNum = Number(document.getElementById('firstNum').innerHTML)
  let secondNum = Number(document.getElementById('secondNum').innerHTML)

  let total = firstNum + secondNum;
  document.getElementById("sumAnswer").innerHTML = ` ${firstNum} + ${secondNum}, equals to ${total}` ;
}

document.getElementById('sumButton').addEventListener("click", displaySum);

function displayMinus() {
  let firstNum = Number(document.getElementById('firstNum').innerHTML)
  let secondNum = Number(document.getElementById('secondNum').innerHTML)

  let total = firstNum - secondNum;
  document.getElementById("minusAnswer").innerHTML = ` ${firstNum} + ${secondNum}, equals to ${total}` ;
}

document.getElementById('minusButton').addEventListener("click", displayMinus);
