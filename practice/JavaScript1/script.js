function giveMeEms(pixels){
  var baseValue = 16;

  function doTheMath(){
    return pixels/baseValue;
  }

  return doTheMath;
}

var smallSize = giveMeEms(12);
var mediumSize = giveMeEms(18);
var largeSzie = giveMeEms(24);
var xlargeSize = giveMeEms(32);

console.log("Small size: ", smallSize());
console.log("Medium size: ", mediumSize());
console.log("large size: ", largeSzie());
console.log("Extra Large size: ", xlargeSize());

var greet = "Good";
var str = greet.concat("Morning");
var str2 = greet + "Morning";
console.log(str);
console.log(str2);
