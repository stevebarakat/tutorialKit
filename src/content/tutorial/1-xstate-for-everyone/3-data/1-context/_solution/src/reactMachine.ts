import { setup } from "xstate";

export const machine = setup({
  types: {
    events: {} as { type: "toggle" },
  },
}).createMachine({
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
