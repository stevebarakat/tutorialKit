import { createMachine } from "xstate";
export const machine = createMachine({
  initial: "Off",
  states: {
    Off: {
      on: {
        switch: {
          target: "On",
        },
      },
    },
    On: {
      on: {
        switch: {
          target: "Off",
        },
      },
    },
  },
});
