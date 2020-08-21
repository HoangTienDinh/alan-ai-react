import React, { useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

const alanKey = process.env.REACT_APP_ALAN_KEY;

console.log(alanBtn())


const App = () => {
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command }) => {
        if (command === "testCommand") {
          alert("This code worked");
        }
      },
    });
  }, []);

  return (
    <div>
      <h1>Alan AI News Application</h1>
    </div>
  );
};

export default App;
