function isPalindrome(str) {
  str = str.toLowerCase();
  let length = str.length;
  for (let i = 0; i <= length; i++) {
    if (str[i] == str[length - 1 - i]) {
      return true;
    } else {
      return false;
    }
  }
}

function arrayMaxMin(arr) {
  /* Seu código aqui */
}
