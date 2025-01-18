import TableTitle from "./TableTitle";

const Table = () => {
  return (
    <section className="table-container">
      <table className="table">
        <thead>
          <tr className="">
            {/* <div className="table__header"> */}
            <TableTitle name="organization" />
            <TableTitle name="username" />
            <TableTitle name="email" />
            <TableTitle name="phone number" />
            <TableTitle name="date joined" />
            <TableTitle name="status" />
            {/* </div> */}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span>victor olabisi</span>
            </td>
            <td>
              <span>victor olabisi</span>
            </td>
            <td>
              <span>victor olabisi</span>
            </td>
            <td>
              <span>victor olabisi</span>
            </td>
            <td>
              <span>victor olabisi</span>
            </td>
            <td>
              <span>victor olabisi</span>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};
export default Table;
