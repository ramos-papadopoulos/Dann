Rann.prototype.normalizeSequence = function normalizeSequence(
  sequence,
  record
) {
  // Find largest value
  if (record !== undefined) {
    if (record === true) {
      let largest = 0;
      for (let i = 0; i < sequence.length; i++) {
        for (let j = 0; j < sequence[0].length; j++) {
          let v = sequence[i][j];
          if (largest < v) {
            largest = v;
          }
        }
      }
      this.largestSequenceValue = largest;
    }
  }
  // Normalize sequence
  let new_sequence = [];
  for (let i = 0; i < sequence.length; i++) {
    new_sequence[i] = [];
    for (let j = 0; j < sequence[0].length; j++) {
      new_sequence[i].push(sequence[i][j] / this.largestSequenceValue);
    }
  }
  return new_sequence;
};