/* Components */
import HeaderDesktop from "../components/table/HeaderDesktop";
import HeaderDesembolsos from "../components/table/HeaderDesembolsos";
import DataTable from "../components/table/DataTable";

/* Navigation menu icons */
import TablePagination from "../components/table/TablePagination";

/* Custom hook to handle table pags. */
import useManageTable from "../hooks/useManageTable";

const TablePage = () => {
  const {
    records,
    currentPage,
    nPages,
    recordsPerPage,
    goToPrevPage,
    goToNextPage,
    showLessRecords,
    showMoreRecords,
  } = useManageTable();

  return (
    <main className="w-[1280px] bg-[#ffffff] flex flex-col items-center font-openSans">
      <HeaderDesktop />
      <HeaderDesembolsos />
      <DataTable records={records} />
      <TablePagination
        currentPage={currentPage}
        nPages={nPages}
        recordsPerPage={recordsPerPage}
        goToPrevPage={goToPrevPage}
        goToNextPage={goToNextPage}
        showLessRecords={showLessRecords}
        showMoreRecords={showMoreRecords}
      />
    </main>
  );
};

export default TablePage;
