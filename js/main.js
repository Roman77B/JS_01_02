// функция решения задания № 3
// если два числа положительные, вывести их разность
// если два числа отрицательные, вывести их произведение
// если два числа разных знаков, вывести их сумму, 0 - положительное число
function dz3(a, b) {
  var val = ""
  if (a >= 0 && b >= 0) {
    val = (a + " - " + b + " = " + (a - b))
  } else if (a < 0 && b < 0) {
    val = (a + " * " + b + " = " + (a * b))
  } else {
    val = (a + " + " + b + " = " + (a + b))
  }
  console.log(val)
}

// функция решения задания № 4
function dz4(a) {
  var val = ''
  switch (a) {
    case 0:
      val += ' ' + a
      a++
    case 1:
      val += ' ' + a
      a++
    case 2:
      val += ' ' + a
      a++
    case 3:
      val += ' ' + a
      a++
    case 4:
      val += ' ' + a
      a++
    case 5:
      val += ' ' + a
      a++
    case 6:
      val += ' ' + a
      a++
    case 7:
      val += ' ' + a
      a++
    case 8:
      val += ' ' + a
      a++
    case 9:
      val += ' ' + a
      a++
    case 10:
      val += ' ' + a
      a++
    case 11:
      val += ' ' + a
      a++
    case 12:
      val += ' ' + a
      a++
    case 13:
      val += ' ' + a
      a++
    case 14:
      val += ' ' + a
      a++
    case 15:
      val += ' ' + a
      a++
      console.log(val)
      break
    default:
      break
  }

}

// функции арифметических действий для решения задания № 5
function summa(a, b) {
  return a + b
}
function raznost(a, b) {
  return a - b
}
function umnozh(a, b) {
  return a * b
}
function delen(a, b) {
  if (b === 0) console.log("на ноль делить нельзя")
  else return a / b
}

// функция решения задания № 6
function mathOperation(a, b, operation) {
  var val = ""
  switch (operation) {
    case "+":
      val = (a + " + " + b + " = " + summa(a, b))
      break
    case "-":
      val = (a + " - " + b + " = " + raznost(a, b))
      break
    case "*":
      val = (a + " * " + b + " = " + umnozh(a, b))
      break
    case "/":
      val = (a + " / " + b + " = " + delen(a, b))
      break
    default:
      break
  }
  console.log(val)
}

// функция решения задания № 8
// рекурсия возведения в степень числа 
function pw(val, pow) {
  pow === 0 ? val = 1 : val *= pw(val, pow - 1)
  return val
}

