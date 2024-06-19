import { createMachine } from "xstate";
export const machine = createMachine({
  initial: "Inactive",
  states: {
    Inactive: {
      on: {
        toggle: {
          target: "Active",
        },
      },
    },
    Active: {
      on: {
        toggle: {
          target: "Inactive",
        },
      },
    },
  },
});
