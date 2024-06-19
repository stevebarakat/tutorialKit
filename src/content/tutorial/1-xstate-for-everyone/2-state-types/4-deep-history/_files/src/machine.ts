import { setup } from "xstate";

export const machine = setup({
  types: {
    events: {} as
      | { type: "use.paypal" }
      | { type: "use.card" }
      | { type: "use.visa" }
      | { type: "use.masterCard" }
      | { type: "enter.address" }
      | { type: "go.back" },
  },
}).createMachine({
  context: {},
  initial: "payment",
  states: {
    payment: {
      initial: "paypal",
      on: {
        "enter.address": {
          target: "address",
        },
      },
      states: {
        card: {
          initial: "visa",
          states: {
            visa: {
              on: {
                "use.masterCard": {
                  target: "masterCard",
                },
              },
            },
            masterCard: {
              on: {
                "use.visa": {
                  target: "visa",
                },
              },
            },
          },
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
          history: "deep",
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
