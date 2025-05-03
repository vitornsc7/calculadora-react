import { CalculatorIcon } from "lucide-react";
import "./App.css";
import Calculator from "./components/Calculator";

function App() {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen bg-stone-400">
      <div className="bg-stone-500 p-4 rounded-md shadow">
        <h1 className="text-stone-300 font-bold text-2xl text-center pb-4 text-shadow">
          Calculadora React
        </h1>
        <Calculator />
      </div>
    </div>
  );
}

export default App;
