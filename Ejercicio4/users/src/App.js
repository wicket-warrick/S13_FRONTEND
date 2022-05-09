import "./App.css";
// import userCompleteInformationList from "./data/users.json";
import { UserList } from "./components/userList";
import { userInformation } from "./helpers/usersParse";
function App() {
  return (
    <div className="App">
      <header className="title1">USERS INFORMATION</header>
      <main>
        <UserList dataList={userInformation}></UserList>
      </main>
      <footer>HACK A BOSS 2022 @Hugo Suárez</footer>
    </div>
  );
}

export default App;
