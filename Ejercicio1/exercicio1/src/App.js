import "./App.css";
// import foto from "./data/foto.jpeg";

function App() {
  return (
    <div className="App">
      {/* <img src={foto} className="foto" alt="leon" /> */}
      <img src={process.env.PUBLIC_URL + "foto.jpeg"} alt="leon" />
      <p>HACK A BOSS @{process.env.REACT_APP_AUTHOR_PROJECT} 2022</p>
    </div>
  );
}

export default App;
