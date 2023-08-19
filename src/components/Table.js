import { useState } from "react";
import { GoArrowDown, GoArrowUp } from "react-icons/go";
import { Fragment } from "react";

function Table({ data, config }) {
  const renderedHeader = (
    <tr>
      {config.map((column) => {
        if (column.header) {
          return <Fragment key={column.label}>{column.header()}</Fragment>;
        } else {
          return <th key={column.label}>{column.label}</th>;
        }
      })}
    </tr>
  );
  const cells = data.map((d) => {
    return (
      <tr key={d.id}>
        {config.map((column) => {
          return <td key={column.label}>{column.render(d)}</td>;
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
