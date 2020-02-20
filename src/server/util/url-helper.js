export const isValidURL = (str) => {
  //https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url/49849482
  
  try {
    new URL(str);
    return true;
  } catch (_) {
    return false;  
  }
}