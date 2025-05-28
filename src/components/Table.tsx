import React from "react";
interface Columns {
  header: string;
  accessor: string;
  className?: string;
}
const Table = ({
  columns,
  data,
  renderRow,
}: {
  columns: Columns[];
  data: any[];
  renderRow: (item: any) => React.ReactNode;
}) => {
  return (
    <table className="w-full mt-4">
      <thead>
        <tr className="text-left text-gray-500 text-sm">
          {columns.map((column) => (
            <th key={column.accessor} className={`${column.className}`}>
              {column.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{data.map((item) => renderRow(item))}</tbody>
    </table>
  );
};

export default Table;
