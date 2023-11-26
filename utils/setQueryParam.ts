const setQueryParam = (paramName: string, paramValue?: string) => {
  const searchParams = new URLSearchParams(window.location.search);

  if (paramValue) {
    searchParams.set(paramName, paramValue);
  } else {
    searchParams.delete(paramName);
  }

  window.history.replaceState(null, '', `?${searchParams.toString()}`);
};

export default setQueryParam;
