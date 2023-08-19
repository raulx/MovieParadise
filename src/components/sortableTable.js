import { useState } from "react";
import { GoArrowDown, GoArrowUp } from "react-icons/go";
import Table from "./Table";

function SortableTable({ data, config }) {
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);
  const getIcons = (label, sortBy, sortOrder) => {
    if (label != sortBy || !sortOrder) {
      return (
        <div>
          <GoArrowDown />
          <GoArrowUp />
        </div>
      );
    } else {
      if (sortOrder === "asc") {
        return <GoArrowUp />;
      } else {
        return <GoArrowDown />;
      }
    }
  };
  const changeSortOrder = () => {
    if (sortOrder === null) {
      setSortOrder("asc");
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
    } else {
      setSortOrder(null);
      setSortBy(null);
    }
  };
  const handleClick = (column) => {
    setSortBy(column.label);
    changeSortOrder();
  };
  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    } else {
      return {
        ...column,
        header: () => (
          <th
            onClick={() => {
              handleClick(column);
            }}
          >
            <div className="sortable">
              {column.label}
              {getIcons(column.label, sortBy, sortOrder)}
            </div>
          </th>
        ),
      };
    }
  });
  let updatedData = data;

  if (sortBy) {
    updatedData = [...data].sort((a, b) => {
      const valueA = a[sortBy];
      const valueB = b[sortBy];

      const order = sortOrder === "asc" ? 1 : -1;
      return (valueA - valueB) * order;
    });
  }

  return (
    <div>
      <Table data={updatedData} config={updatedConfig} />
    </div>
  );
}

export default SortableTable;
