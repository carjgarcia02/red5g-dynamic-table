const TableHeading = () => {
  return (
    <thead className="h-12 py-4 text-[#413e4d] bg-[#f1f6fb] font-bold">
      <tr>
        <th>
          <p className="w-[276px] h-4 ml-[72px] text-start">Fecha y Hora</p>
        </th>
        <th className="w-60 h-4 text-start">
          <p>Número de desembolso</p>
        </th>
        <th className="w-[236px] h-4 text-start">
          <p>Tipo de documento</p>
        </th>
        <th className="w-64 h-4 text-start">
          <p>Número de documento</p>
        </th>
        <th className="w-44 h-4 font-bold text-start">
          <p>Monto</p>
        </th>
      </tr>
    </thead>
  );
};

export default TableHeading;
