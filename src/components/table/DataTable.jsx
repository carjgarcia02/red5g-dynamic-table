import PropTypes from "prop-types";
import Filters from "./Filters";
import TableHeading from "./TableHeading";
import TableRow from "./TableRow";

const DataTable = ({ records }) => {
  return (
    <>
      <Filters />
      <table className="w-full text-sm">
        <TableHeading />
        <tbody>
          {records.map(({ id, brand, category, price, rating, stock }) => (
            <TableRow
              key={id}
              brand={brand}
              category={category}
              price={price}
              rating={rating}
              stock={stock}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

DataTable.propTypes = {
  records: PropTypes.array.isRequired,
};

export default DataTable;
