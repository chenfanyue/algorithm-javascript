function sumMatrix(matrix: number[][]) {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    let currentRow = matrix[i];
    for (let j = 0; j < currentRow.length; j++) {
      sum += currentRow[j];
    }
  }

  return sum;
}
