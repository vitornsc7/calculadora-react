import { useState } from "react";
import Button from "./Button";

const Calculator = () => {
  const [resultado, setResultado] = useState("0");

  return (
    <div className="size-80 space-y-1">
      <div className="size-full h-18 bg-stone-700 rounded-md flex justify-end p-4.5 shadow">
        <p className="text-stone-400 font-bold text-right text-2xl">
          {resultado}
        </p>
      </div>
      <div className="space-y-1">
        <div className="flex grid-cols-4 gap-1">
          <Button
            resultado={resultado}
            setResultado={setResultado}
            digit={"7"}
          />
          <Button
            resultado={resultado}
            setResultado={setResultado}
            digit={"8"}
          />
          <Button
            resultado={resultado}
            setResultado={setResultado}
            digit={"9"}
          />
          <Button
            resultado={resultado}
            setResultado={setResultado}
            digit={"+"}
          />
        </div>
        <div className="flex grid-cols-4 gap-1">
          <Button
            resultado={resultado}
            setResultado={setResultado}
            digit={"4"}
          />
          <Button
            resultado={resultado}
            setResultado={setResultado}
            digit={"5"}
          />
          <Button
            resultado={resultado}
            setResultado={setResultado}
            digit={"6"}
          />
          <Button
            resultado={resultado}
            setResultado={setResultado}
            digit={"-"}
          />
        </div>
        <div className="flex grid-cols-4 gap-1">
          <Button
            resultado={resultado}
            setResultado={setResultado}
            digit={"1"}
          />
          <Button
            resultado={resultado}
            setResultado={setResultado}
            digit={"2"}
          />
          <Button
            resultado={resultado}
            setResultado={setResultado}
            digit={"3"}
          />
          <Button
            resultado={resultado}
            setResultado={setResultado}
            digit={"/"}
          />
        </div>
        <div className="flex grid-cols-4 gap-1">
          <Button
            resultado={resultado}
            setResultado={setResultado}
            digit={"C"}
          />
          <Button
            resultado={resultado}
            setResultado={setResultado}
            digit={"0"}
          />
          <Button
            resultado={resultado}
            setResultado={setResultado}
            digit={"="}
          />
          <Button
            resultado={resultado}
            setResultado={setResultado}
            digit={"*"}
          />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
