import useManageTable from "../../hooks/useManageTable";

const Filters = () => {
  const { filters, handleFilterChange } = useManageTable();

  return (
    <section className="w-full h-[88px] px-[72px] py-4 flex justify-between items-center bg-[#fafafa] gap-x-4">
      <div className="relative w-[272px] h-14">
        <select
          className="w-[272px] h-14 border border-[#ABB9C780] rounded-md px-4"
          name="category"
          onChange={handleFilterChange}
        >
          <option value="">Select category</option>
          <option value="smartphones">Smartphones</option>
          <option value="laptops">Laptops</option>
          <option value="fragrances">Fragrances</option>
          <option value="skincare">Skincare</option>
          <option value="groceries">Groceries</option>
          <option value="home-decoration">Home-Decoration</option>
          <option value="Furniture">Furniture</option>
          <option value="Tops">Tops</option>
        </select>
      </div>
      <div className="relative w-44 h-14">
        <input
          className="w-44 h-14 border border-[#ABB9C780] rounded-md placeholder:px-4"
          type="text"
          name="brand"
          value={filters.brand}
          placeholder="Brand"
          onChange={handleFilterChange}
        />
      </div>
      <div className="relative w-[272px] h-14">
        <input
          className="w-[272px] h-14 border border-[#ABB9C780] rounded-md placeholder:px-4"
          type="text"
          name="price"
          value={filters.price}
          placeholder="Price"
          onChange={handleFilterChange}
        />
      </div>
      <div className="relative w-44 h-14">
        <input
          className="w-full h-full border border-[#ABB9C780] rounded-md placeholder:px-4"
          type="text"
          name="rating"
          value={filters.rating}
          placeholder="Rating"
          onChange={handleFilterChange}
        />
      </div>
      <div className="relative w-44 h-14">
        <input
          className="w-full h-full border border-[#ABB9C780] rounded-md placeholder:px-4"
          type="text"
          name="stock"
          value={filters.stock}
          placeholder="Stock"
          onChange={handleFilterChange}
        />
      </div>
    </section>
  );
};

export default Filters;
