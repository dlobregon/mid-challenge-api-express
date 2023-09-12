const paginationMiddleware = (pageSize) => (req, res, next) => {
  const pageNumber = parseInt(req.query.page, 10) || 1;
  const startIndex = (pageNumber - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  req.pagination = {
    page: pageNumber,
    limit: pageSize,
    startIndex,
    endIndex,
  };
  next();
};

module.exports = paginationMiddleware;
