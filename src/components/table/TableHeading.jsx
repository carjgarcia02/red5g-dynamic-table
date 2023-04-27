const TableHeading = () => {
  return (
    <thead className="h-12 py-4 text-[#413e4d] bg-[#f1f6fb] font-bold">
      <tr>
        <th className="w-[276px] h-4 pl-[72px] text-start">
          <p>Category</p>
        </th>
        <th>
          <p className="w-60 h-4 text-start">Brand</p>
        </th>
        <th className="w-[236px] h-4 text-start">
          <p>Price</p>
        </th>
        <th className="w-64 h-4 text-start">
          <p>Rating</p>
        </th>
        <th className="w-44 h-4 font-bold text-start">
          <p>Stock</p>
        </th>
      </tr>
    </thead>
  );
};

export default TableHeading;
