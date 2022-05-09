import "./styleUserCard.css";
import { IsAdult } from "../isAdult";
export const UserCard = ({ user }) => {
  {
    console.log(user);
  }
  return (
    <article className="userCard">
      <img src={user.userAvatar} alt={user.userName}></img>
      <h2>{user.userName}</h2>
      <p>{user.userLocation}</p>
      <IsAdult className="adult" boolean={user.userAdult} children="adult" />
    </article>
  );
};
