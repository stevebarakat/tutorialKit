import { createActor } from "xstate";
import counterMachine from "./counterMachine";
import "./style.css";

// document.querySelector("#app").innerHTML = `
//   <div>
//     <h1>Counter</h1>
//     <p id="count">0</p>
//     <button id="decrement">-</button>
//     <button id="increment">+</button>
//   </div>
// `;

const counterService = createActor(counterMachine).start();

document.getElementById("increment").addEventListener("click", () => {
  counterService.send({
    type: "INCREMENT",
  });
});

document.getElementById("decrement").addEventListener("click", () => {
  counterService.send({
    type: "DECREMENT",
  });
});
