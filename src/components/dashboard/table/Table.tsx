import TableTitle from "./TableTitle";

const Table = () => {
  return (
    <table className="table">
      <thead>
        <tr className="table__header">
          <TableTitle name="organization" />
          <TableTitle name="username" />
          <TableTitle name="email" />
          <TableTitle name="phone number" />
          <TableTitle name="date joined" />
          <TableTitle name="status" />
        </tr>
      </thead>
    </table>
  );
};
export default Table;
