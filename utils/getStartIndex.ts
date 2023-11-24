const getStartIndex = (currentPage: number, pageSize: number): number => {
  let startIndex = 1;

  if (currentPage === 2) {
    startIndex += pageSize;
  } else if (currentPage > 2) {
    startIndex = pageSize * (currentPage - 1) + 1;
  }

  return startIndex;
};

export default getStartIndex;
