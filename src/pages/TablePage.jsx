/* Components */
import HeaderDesktop from "../components/table/HeaderDesktop";
import HeaderDesembolsos from "../components/table/HeaderDesembolsos";
import DataTable from "../components/table/DataTable";

/* Navigation menu icons */
import TablePagination from "../components/table/TablePagination";

const TablePage = () => {
  return (
    <main className="w-[1280px] bg-[#ffffff] flex flex-col items-center font-openSans">
      <HeaderDesktop />
      <HeaderDesembolsos />
      <DataTable />
      <TablePagination />
    </main>
  );
};

export default TablePage;
