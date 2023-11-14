export const getStorageData = (value: string): string => {
  return JSON.parse(localStorage.getItem(`${value}`) as string);
};
