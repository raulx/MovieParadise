import { useState } from "react";
import { GoArrowDown, GoArrowUp } from "react-icons/go";

function Table({ data }) {
  const cells = data.map((d) => {
    return (
      <tr key={d.id}>
        <td>{d.id}.</td>
        <td>{d.name}</td>
        <td>{d.year}</td>
        <td>{d.rating}</td>

        <td>
          <a href={d.url}>Download/Watch</a>
        </td>
      </tr>
    );
  });
  return (
    <div className="movie-table">
      <table>
        <thead>
          <tr>
            <th>S.no</th>
            <th>Movie</th>
            <th>Year</th>
            <th>Imdb rating</th>
            <th>Download Link</th>
          </tr>
        </thead>
        <tbody>{cells}</tbody>
      </table>
    </div>
  );
}

export default Table;
