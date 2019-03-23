module.exports = function getZerosCount(number, base) {
  
  const legendreComponents = findDividers(base);
  return Math.floor(psevdoFac(number, legendreComponents[0]) / legendreComponents[1]);

  function psevdoFac(number, divider) {
    if (number === 0) {
      return 0;
    }
    return Math.floor(number / divider) + psevdoFac(Math.floor(number / divider), divider);
  }

  function findNextOdd(number) {
    if (number % 2 === 0) {
      return ++number;
    }
    return number += 2;
  }
    
  function maxOf(a, b, powA, powB) {
    if ( Math.floor(Math.pow(a, powA) / Math.pow(b, powB)) > Math.pow(b, powB) ) {
      return [a, powA];
    }
    return [b, powB];
  }

  function defineDividerOfLegendre(dividers, powers) {
    if (dividers.length == 1) {
      return [dividers[0], powers[0]];
    }
    let max = maxOf(dividers[0], dividers[1], powers[0], powers[1]); 
    for (let i = 1; i < dividers.length - 1; i++) {
      max = maxOf(max[0], dividers[i+1], max[1], powers[i+1]); 
    }
    return max;
  }
  
  function findDividers(number) {
    const dividers = [],
          powers = [];
    let divider = 2;
    do {
      if (number % divider === 0) {
        number = number / divider;
        
        if ( ! dividers.includes(divider) ) {
          dividers.push(divider);
          powers[dividers.length - 1] = 0;
        }
        powers[dividers.length - 1]++;
        
      }
      else {
         divider = findNextOdd(divider);
      }
    } while (number != 1);
    
    return defineDividerOfLegendre(dividers, powers);
  }
}