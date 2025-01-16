type User = {
  title: string;
  amount: number;
  color: string;
};

const users: User[] = [
  {
    title: "users",
    amount: 2436,
    color: "#DF18FF",
  },
  {
    title: "active users",
    amount: 2436,
    color: "#5718FF",
  },

  {
    title: "users with loan",
    amount: 2436,
    color: "#F55F44",
  },
  {
    title: "users with loan",
    amount: 2436,
    color: "#F36",
  },
];

const UserCard = () => {
  return (
    <>
      {users.map((user) => {
        const { title, amount, color } = user;
        return (
          <article key={title} className="user-card">
            <h2>{title}</h2>
            <h4>{amount}</h4>
          </article>
        );
      })}
    </>
  );
};
export default UserCard;
