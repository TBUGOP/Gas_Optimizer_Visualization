import './index.css'
import LineChart from "./LineChart";
import LineChart1 from "./LineChart1";
import LineChart2 from "./LineChart2";
import LineChart3 from "./LineChart3";
import LineChart4 from "./LineChart4";
import LineChart5 from "./LineChart5";


function App() {

  return (
    <>
      <a style={{textDecoration:'none'}}href="http://127.0.0.1:8000/docs">
      <h1>Gas Optimizer</h1>
      </a>

      <div style={{ width: 600, position: "absolute", marginLeft: "28%" }}>
        <h2>Comparison Optimizer</h2>
        <LineChart />
      </div>
      <div style={{ width: 600, position: "absolute", marginLeft: "28%", marginTop: "30%" }}>
        <h2>Increment/Decrement Optimizer</h2>
        <LineChart1 />
      </div>
      <div style={{ width: 600, position: "absolute", marginLeft: "28%", marginTop: "60%" }}>
        <h2> Loop Optimizer</h2>
        <LineChart2 />
      </div>
      <div style={{ width: 600, position: "absolute", marginLeft: "28%", marginTop: "90%" }}>
        <h2>Explicit Initialization of Variables to default values Optimizer</h2>
        <LineChart3 />
      </div>
      <div style={{ width: 600, position: "absolute", marginLeft: "28%", marginTop: "120%" }}>
        <h2>Packing variables into a single block Optimizer</h2>
        <LineChart4 />
      </div>
      <div style={{ width: 600, position: "absolute", marginLeft: "28%", marginTop: "150%" }}>
        <h2>Unsigned Integer Types Optimizer</h2>
        <LineChart5 />
      </div>
    </>
  );
}

export default App;
