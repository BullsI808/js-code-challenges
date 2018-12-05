module.exports = function needleInHaystack(haystack) {
  // write code in here

  //failed code

  // var needleLocations = [];
  // var find = 'needle';
  // var findNeedle = array.indexOf(find);
  // while (find != -1){
  //   needleLocations.push(findNeedle);
  //   findNeedle = array.indexOf(needle, findNeedle + 1);
  // }
  // return needleLocations;


    if(haystack.includes('needle')){
      return haystack.indexOf('needle');
    } else{
      return false;
    }


}