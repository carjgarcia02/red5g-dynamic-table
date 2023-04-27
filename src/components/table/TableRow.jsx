import PropTypes from "prop-types";

const TableRow = ({ brand, category, price, rating, stock }) => {
  return (
    <tr className="h-12 py-4 text-[#8e8e8e] even:bg-[#f7f7f7] odd:bg-white">
      <td className="w-[276px] h-4 pl-[72px] pr-6">{brand}</td>
      <td className="w-60 h-4">{category}</td>
      <td className="w-[236px] h-4">{price}</td>
      <td className="w-64 h-4">{rating}</td>
      <td className="w-44 h-4 font-bold">{stock}</td>
    </tr>
  );
};

TableRow.propTypes = {
  brand: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  stock: PropTypes.number.isRequired,
};

export default TableRow;
