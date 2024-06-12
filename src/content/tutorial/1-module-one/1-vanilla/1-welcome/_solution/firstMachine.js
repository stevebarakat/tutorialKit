import { createMachine } from "xstate";
export const machine = createMachine({
  initial: "First State",
  states: {
    "First State": {
      on: {
        next: [
          {
            target: "Second State",
          },
        ],
      },
    },
    "Second State": {
      on: {
        next: [
          {
            target: "First State",
          },
        ],
      },
    },
  },
});
