import { List } from "../list";
import { UserCard } from "../userCard";
import "./userList.css";
export const UserList = ({ dataList }) => {
  return (
    <section className="userList">
      <List
        data={dataList}
        render={(user, index) => {
          return (
            <li key={index}>
              <UserCard user={user} />
            </li>
          );
        }}
      />
    </section>
  );
};
