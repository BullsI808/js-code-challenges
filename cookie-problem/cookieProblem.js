module.exports = function cookieProblem(array) {
  // find the highest number in array because this represents the highest amt of cookies a person has
  let highestCookies = 0;
  let currentTotal = 0;

  array.forEach(cookies => {
    highestCookies = math.max(highestCookies, cookies);
  });

  currentTotal += cookies;
  return highestCookies * array.length - currentTotal;

  // return array,map(function(subarray){
  //   return math.max.apply(null, subarray);
  // });


  // find the sum of cookies everyone currently has

  // find the sum of cookies that everyone SHOULD have if they all had the same amt of cookies

  // subtract the sum of cookies everyone currently has from the sum of cookies everyone should have
}