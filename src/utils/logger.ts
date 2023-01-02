const log = (value: any) => {
  if (__DEV__) {
    console.log(value);
  }
};

export default {
  log,
};
