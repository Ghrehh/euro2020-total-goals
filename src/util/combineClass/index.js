const combinedClass = (...args) =>
  args.filter((argument) => argument !== undefined).join(' ');

export default combinedClass;
