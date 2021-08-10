const ignoreUndefinedParams = <Type>(filters: Type) => {
  const ret = Object.entries(filters).reduce((acc, [key, value]) => {
    if (value !== undefined) {
      return { ...acc, [key]: value };
    }

    return acc;
  }, {});

  return ret as Type;
};

export default ignoreUndefinedParams;
