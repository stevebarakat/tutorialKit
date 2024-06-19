import { setup } from "xstate";

export const machine = setup({
  types: {
    events: {} as { type: "switch" },
  },
}).createMachine({
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
