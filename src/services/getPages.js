
export const getPages = (currentPage, totalPages) => {
    if(totalPages === 1) return [1];

    const firstPage = 1;
    const lastPage = totalPages;
    const prevPage = currentPage - 1;
    const nextPage = currentPage + 1;

    const pages = [];

    pages.push(firstPage);

    if(prevPage > firstPage) {
      pages.push(prevPage);
    }

    if(currentPage !== firstPage && currentPage !== lastPage) {
      pages.push(currentPage);
    }

    if(nextPage < lastPage) {
      pages.push(nextPage);
    }

    pages.push(lastPage);

    return [... new Set(pages)].sort((a, b) => a -b)
  }