import React from "react";

import { type SpecData } from "~/entities/const/content/clubsContent.type";

import { type CellData } from "./computerSpec.type";

export const ComputerSpec = ({ specData }: { specData: SpecData }) => {
  const data = specData.content as unknown as CellData[][];
  return (
    <>
      {data === null ? (
        <div>Данные незагрузились</div>
      ) : (
        <table>
          <tbody>
            {data.map((row: CellData[], rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell: CellData, cellIndex: number) => (
                  <React.Fragment key={cellIndex}>
                    {cell.main !== "" && (
                      <th>
                        <span>{cell.main}</span>
                      </th>
                    )}
                    {cell.descr !== "" && (
                      <td>
                        <span>{cell.descr}</span>
                      </td>
                    )}
                  </React.Fragment>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};
