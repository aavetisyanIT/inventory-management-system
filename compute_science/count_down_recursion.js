function countDownRecursion(number) {
  if (number === 0) return;

  console.log(number);
  countDownRecursion(number - 1);
}

countDownRecursion(5);
