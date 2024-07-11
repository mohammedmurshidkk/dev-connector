export const parseText = text => {
  return text
    .trim()
    .split('\n')
    .map(line => line.trim())
    .filter(line => line);
};
