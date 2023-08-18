import { useState } from "react";
import { GoArrowDown, GoArrowUp } from "react-icons/go";

function Table({ data, config }) {
  const renderedHeader = (
    <tr>
      {config.map((column) => {
        return <th key={column.label}>{column.label}</th>;
      })}
    </tr>
  );
  const cells = data.map((d) => {
    return (
      <tr key={d.id}>
        {config.map((column) => {
          return <td>{column.render(d)}</td>;
        })}
      </tr>
    );
  });
  return (
    <div className="movie-table">
      <table>
        <thead>{renderedHeader}</thead>
        <tbody>{cells}</tbody>
      </table>
    </div>
  );
}

export default Table;
