import { setup } from "xstate";

export const machine = setup({
  types: {
    events: {} as
      | { type: "set.pro" }
      | { type: "set.free" }
      | { type: "enter.name" }
      | { type: "go.back" },
  },
}).createMachine({
  context: {},
  initial: "subscription",
  states: {
    subscription: {
      initial: "free",
      on: {
        "enter.name": {
          target: "name",
        },
      },
      states: {
        free: {
          on: {
            "set.pro": {
              target: "pro",
            },
          },
        },
        pro: {
          on: {
            "set.free": {
              target: "free",
            },
          },
        },
        hist: {
          type: "history",
        },
      },
    },
    name: {
      on: {
        "go.back": {
          target: "subscription.hist",
        },
      },
    },
  },
});
