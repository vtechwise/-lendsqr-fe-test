import userimage from "../../../assets/users.png";
import activeUser from "../../../assets/activeUser.png";
import usersLoan from "../../../assets/userLoan.png";
import userMoney from "../../../assets/money.png";

type User = {
  title: string;
  amount: number;
  color: string;
  icon: string;
};

const users: User[] = [
  {
    title: "users",
    amount: 2436,
    color: "#DF18FF",
    icon: userimage,
  },
  {
    title: "active users",
    amount: 2436,
    color: "#5718FF",
    icon: activeUser,
  },

  {
    title: "users with loan",
    amount: 2436,
    color: "#F55F44",
    icon: usersLoan,
  },
  {
    title: "users with loan",
    amount: 2436,
    color: "#F36",
    icon: userMoney,
  },
];

const UserCard = () => {
  return (
    <>
      {users.map((user) => {
        const { title, amount, icon } = user;
        return (
          <article key={title} className="user-card">
            <div
              className="user-card__icon-container"
             
            >
              <img src={icon} alt="" />
            </div>
            <h2>{title}</h2>
            <h4>{amount}</h4>
          </article>
        );
      })}
    </>
  );
};
export default UserCard;
