// src/counterMachine.js
import { createMachine } from "xstate";

const counterMachine = createMachine(
  {
    id: "counter",
    initial: "active",
    context: {
      count: 0,
    },
    states: {
      active: {
        on: {
          INCREMENT: {
            actions: "incrementCount",
          },
          DECREMENT: {
            actions: "decrementCount",
          },
        },
      },
    },
  },
  {
    actions: {
      incrementCount: ({ context }) => {
        console.log("context", context);
        context.count += 1;
        document.getElementById("count").textContent = context.count;
      },
      decrementCount: ({ context }) => {
        context.count -= 1;
        document.getElementById("count").textContent = context.count;
      },
    },
  }
);

export default counterMachine;
