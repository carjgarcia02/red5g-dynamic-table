import { useState, useEffect } from "react";

const useManageTable = () => {
  /* PAGINATION */
  /* Pagination variables */
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(5);

  /* Calculations needed to determine which product indexes must be shown */
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const nPages = Math.ceil(products.length / recordsPerPage);

  const fetchProducts = () => {
    fetch("https://dummyjson.com/products/?limit=40")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  let records = products.slice(firstIndex, lastIndex); // This variable defines what is shown in every page.

  /* Pagination functions */
  const goToPrevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage((currentPage) => currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage !== nPages)
      setCurrentPage((currentPage) => currentPage + 1);
  };

  const showLessRecords = () => {
    if (recordsPerPage > 2) {
      setRecordsPerPage((recordsPerPage) => recordsPerPage - 1);
    }
  };

  const showMoreRecords = () => {
    if (recordsPerPage < 10) {
      setRecordsPerPage((recordsPerPage) => recordsPerPage + 1);
    }
  };

  /* FILTERS */
  /* Filter variables */
  const initialValues = {
    brand: "",
    category: "",
    price: "",
    rating: "",
    stock: "",
  };
  const [filters, setFilters] = useState(initialValues);

  /* Filtering function */
  const handleFilterChange = (e) => {
    const { name, value } = e.target; // Recover name and value of the field where the user is typing.

    setFilters({
      ...filters,
      [name]: value /*We take advantage of the 'name' attribute
      inside our inputs to update filters accordingly*/,
    });

    /* Filters not working yet :/ */
  };

  return {
    records,
    currentPage,
    nPages,
    recordsPerPage,
    goToPrevPage,
    goToNextPage,
    showLessRecords,
    showMoreRecords,
    filters,
    handleFilterChange,
  };
};

export default useManageTable;
