const checkMissingParams = (params: Object) => {
  const message = Object.entries(params).reduce((acc, [key, value]) => {
    if (value === undefined) {
      return acc + (acc === '' ? key : `, ${key}`);
    }

    return acc;
  }, '');

  if (message !== '') {
    throw new Error(`Missing param(s): ${message}.`);
  }
};

export default checkMissingParams;
