const log = (value: any) => {
  // For now log to the console in dev. In a production
  // environment this could be logged to a service.
  if (__DEV__) {
    console.log(value);
  }
};

export default {
  log,
};
