import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import Card from "./Card";
function App() {
  return (
    <div className="App">
      <Navbar />
      <table style = {{margin: "60px 140px"}}>
        <tr>
          <td style = {{paddingRight: "20px"}}><Card/></td>
          <td style = {{paddingRight: "20px"}}><Card/></td>
          <td style = {{paddingRight: "20px"}}><Card/></td>
          <td style = {{paddingRight: "20px"}}><Card/></td>
        </tr>
        <tr>
          <td style = {{paddingRight: "20px"}}><Card/></td>
          <td style = {{paddingRight: "20px"}}><Card/></td>
          <td style = {{paddingRight: "20px"}}><Card/></td>
          <td style = {{paddingRight: "20px"}}><Card/></td>
        </tr>
        <tr>
          <td style = {{paddingRight: "20px"}}><Card/></td>
          <td style = {{paddingRight: "20px"}}><Card/></td>
          <td style = {{paddingRight: "20px"}}><Card/></td>
          <td style = {{paddingRight: "20px"}}><Card/></td>
        </tr>
        <tr>
          <td style = {{paddingRight: "20px"}}><Card/></td>
          <td style = {{paddingRight: "20px"}}><Card/></td>
          <td style = {{paddingRight: "20px"}}><Card/></td>
          <td style = {{paddingRight: "20px"}}><Card/></td>
        </tr>

      </table>
    </div>
  );
}

export default App;
