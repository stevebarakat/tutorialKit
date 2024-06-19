import { setup } from "xstate";

export const machine = setup({
  types: {
    events: {} as
      | { type: "set.pro" }
      | { type: "set.free" }
      | { type: "set.yearly" }
      | { type: "set.monthly" }
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
          initial: "monthly",
          states: {
            monthly: {
              on: {
                "set.yearly": {
                  target: "yearly",
                },
              },
            },
            yearly: {
              on: {
                "set.monthly": {
                  target: "monthly",
                },
              },
            },
          },
          on: {
            "set.free": {
              target: "free",
            },
          },
        },
        hist: {
          type: "history",
          history: "deep",
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
