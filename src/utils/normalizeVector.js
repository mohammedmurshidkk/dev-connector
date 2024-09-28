export const normalizeVector = (vector, targetDimension = 1536) => {
  if (vector.length === targetDimension) {
    return vector;
  } else if (vector.length > targetDimension) {
    return vector.slice(0, targetDimension);
  } else {
    return [...vector, ...Array(targetDimension - vector.length).fill(0)];
  }
};
