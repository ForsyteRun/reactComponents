export const getStorageData = (value: string): string => {
  console.log(value);

  return JSON.parse(localStorage.getItem(`${value}`) as string);
};
