import filter from "../../../assets/filter.png";

type Table = {
  name: string;
};

const TableTitle = ({ name }: Table) => {
  return (
    <th>
      <div
        className={`table__title ${name === "email" ? "table__email" : null} ${
          name === "date joined" ? "table__date-joined" : null
        } `}
      >
        <span>{name}</span>
        <img src={filter} alt={name} />
      </div>
    </th>
  );
};
export default TableTitle;
