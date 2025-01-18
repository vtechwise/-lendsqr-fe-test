import Table from "../../components/dashboard/table/Table";
import UserCard from "../../components/dashboard/user/UserCard";

const User = () => {
  return (
    <div>
      <h2>user</h2>
      <div className="user-card-container">
        <UserCard />
      </div>
      {/* <div> */}
        <Table/>
      {/* </div> */}
    </div>
  );
};
export default User;
