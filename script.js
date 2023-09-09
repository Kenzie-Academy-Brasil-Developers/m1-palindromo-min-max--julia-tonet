function isPalindrome(str) {
  str = str.toLowerCase();
  str = str.split(" ");
  str = str.join("");
  let length = str.length;
  for (let i = 0; i <= length; i++) {
    if (str[i] !== str[length - 1 - i]) {
      return false;
    }
  }
  return true;
}

function arrayMaxMin(arr) {
  let arrMax = arr[0];
  let len = arr.length;
  let arrMin = arr[len - 1];
  for (let i = 0; i <= len; i++) {
    if (arr[i] > arrMax) {
      arrMax = arr[i];
    } else {
      arrMax = arrMax;
    }
    if (arr[i] < arrMin) {
      arrMin = arr[i];
    } else {
      arrMin = arrMin;
    }
  }
  let newArr = [arrMin, arrMax];
  return newArr;
}
