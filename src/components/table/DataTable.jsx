import TableHeading from "./TableHeading";
import TableRow from "./TableRow";

const DataTable = () => {
  return (
    <>
      <section className="w-full h-[88px] px-[72px] py-4 flex justify-between items-center bg-[#fafafa]">
        <input
          className="w-44 h-14 border border-[#ABB9C780] rounded-md"
          type="select"
        />
        <input
          className="w-[272px] h-14 border border-[#ABB9C780] rounded-md"
          type="text"
        />
        <input
          className="w-[272px] h-14 border border-[#ABB9C780] rounded-md"
          type="text"
        />
        <div className="relative w-44 h-14">
          <input
            className="w-full h-full border border-[#ABB9C780] rounded-md"
            type="text"
          />
        </div>
        <div className="relative w-44 h-14">
          <input
            className="w-full h-full border border-[#ABB9C780] rounded-md"
            type="text"
          />
        </div>
      </section>
      <table className="w-full text-sm">
        <TableHeading />
        <tbody>
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
        </tbody>
      </table>
    </>
  );
};

export default DataTable;
