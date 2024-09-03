
// You should implement your task here.

module.exports = function towelSort (matrix) {
  function compareNum(a,b) {
    return a-b;
  }
  function compareNumInDifOder(a,b) {
    return b-a;
  }
  let tempArr=[];
  if (!matrix) return [];
  for (let i=0; i<matrix.length; i++) {
    if (i%2) {
      matrix[i].sort(compareNumInDifOder);
    }
    else matrix[i].sort(compareNum);
    matrix[i].forEach(element => {
      tempArr.push(element);
    });
  }

  return tempArr;
}
