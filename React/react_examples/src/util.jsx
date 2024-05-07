export const delay = (duration = 1000) => {
  let now = performance.now();
  while (performance.now() - now < duration) {
    // Artificial delay -- do nothing for 100ms
  }
};
