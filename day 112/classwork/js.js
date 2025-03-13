//Codewars 1
//Check same case

function sameCase(a, b){
    if((a.toLowerCase () === a.toUpperCase()) || (b.toLowerCase() === b.toUpperCase())) {
      return -1
    }
    else if((a === a.toLowerCase() && b === b.toLowerCase() || (a === a.toUpperCase() && b === b.toUpperCase()))) {
      return 1
    }
    else {
      return 0
    }
}



//Codewars 2
//Count of positives / sum of negatives

function countPositivesSumNegatives(input) {
  if (!input || input.length === 0) return [];

  let countPositives = 0;
  let sumNegatives = 0;

  for (let num of input) {
      if (num > 0) countPositives++;
      else if (num < 0) sumNegatives += num;
  }

  return [countPositives, sumNegatives];
}


