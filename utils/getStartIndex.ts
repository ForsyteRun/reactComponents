const getStartIndex = (
  currentPage: number = 1,
  pageSize: number = 10
): number => {
  let startIndex = 1;

  if (!pageSize) {
    pageSize = 10;
  }

  if (currentPage === 2) {
    startIndex += pageSize;
  } else if (currentPage > 2) {
    startIndex = pageSize * (currentPage - 1) + 1;
  }

  return startIndex;
};

export default getStartIndex;
