import { type TypeClubTariff } from "~/entities/const/clubsContent.type";
import { Expand } from "~/shared/ui/Expand/Expand";

export const PriceTable = ({ priceData }: { priceData: TypeClubTariff }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>
              <span>{`${priceData.name}`}</span>{" "}
              <strong>{`${priceData.tariff}`}</strong>
            </th>
          </tr>
        </thead>
        <tbody>
          {priceData.rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>
                  <span>{cell.main}</span>
                  {cell.descr && <span>{cell.descr}</span>}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <Expand titleExpand="Уточнения">
        <ul>
          {priceData.description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </Expand>
    </>
  );
};
