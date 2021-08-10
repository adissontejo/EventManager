const ignoreUndefinedParams = (filters: Object) => {
  const ret = Object.entries(filters).reduce((acc, [key, value]) => {
    if (value !== undefined) {
      return { ...acc, [key]: value };
    }

    return acc;
  }, {});

  return ret;
};

export default ignoreUndefinedParams;
