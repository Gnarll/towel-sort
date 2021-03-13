module.exports = function towelSort (matrix) {

  if(matrix == undefined || matrix.length == 0) return [];

  let solution = [];
  for(let i = 0; i < matrix.length;) {
    for(let j = 0; j < matrix[i].length; j++) {
      solution.push(matrix[i][j]);
    }

    if(++i >= matrix.length) break;

    for(let j = matrix[i].length - 1; j >= 0 ; j--) {
      solution.push(matrix[i][j]);
    }
    i++;
  }
  return solution;
}
