import React from "react";

import { type TypeComputerSpecsData } from "~/entities/const/content/clubsContent.type";

export const ComputerSpec = ({
  specData,
}: {
  specData: TypeComputerSpecsData[][];
}) => {
  return (
    <>
      <table>
        <tbody>
          {specData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <React.Fragment key={cellIndex}>
                  <th>
                    <span>{cell.main}</span>
                  </th>
                  <td>{cell.descr && <span>{cell.descr}</span>}</td>
                </React.Fragment>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
