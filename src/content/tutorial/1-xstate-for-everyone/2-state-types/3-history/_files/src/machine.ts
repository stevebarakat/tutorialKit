import { setup } from "xstate";

export const machine = setup({
  types: {
    events: {} as
      | { type: "use.paypal" }
      | { type: "use.card" }
      | { type: "enter.address" }
      | { type: "go.back" },
  },
}).createMachine({
  context: {},
  initial: "payment",
  states: {
    payment: {
      initial: "card",
      on: {
        "enter.address": {
          target: "address",
        },
      },
      states: {
        card: {
          on: {
            "use.paypal": {
              target: "paypal",
            },
          },
        },
        paypal: {
          on: {
            "use.card": {
              target: "card",
            },
          },
        },
        hist: {
          type: "history",
        },
      },
    },
    address: {
      on: {
        "go.back": {
          target: "#(machine).payment.hist",
        },
      },
    },
  },
});
