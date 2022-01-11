module.exports = function toReadable (number) {
  const unitsArr = [' ', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
        dozensArr = [' ', 'twenty','thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
     
  if (number!==0 && number < 20){
    return number = unitsArr[number];
  } else if (number < 100 && number >= 20){
    return number = (dozensArr[Math.floor(number/10)-1] + ' ' + unitsArr[(number % 10)]).trim();
  } else if (number < 1000 && number >= 100 && number % 100 < 20){
    return number = (unitsArr[Math.floor(number/100)]  + ' hundred ' +  unitsArr[number % 100]).trim();
  } else if (number < 1000 && number >= 100 && number % 100 >= 20){
    return number = (unitsArr[Math.floor(number/100)]  + ' hundred ' + dozensArr[Math.floor((number % 100)/10)-1] + ' ' + unitsArr[(number % 10)]).trim();
  }
    return 'zero';
}