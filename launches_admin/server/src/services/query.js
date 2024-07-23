const DEFAULT_PAGE_NUMBER = 1;
const  DEFAULT_LIMIT_NUMBER = 0;

function getPagination(queryParams) {
  const limit = Math.abs(queryParams.limit) || DEFAULT_LIMIT_NUMBER;
  const page = Math.abs(queryParams.page) || DEFAULT_PAGE_NUMBER;
	const skip = (page - 1) * limit;

	return { skip, limit };
}

module.exports = { getPagination };
