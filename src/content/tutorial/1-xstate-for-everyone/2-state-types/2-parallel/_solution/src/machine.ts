import { setup } from "xstate";

export const machine = setup({
  types: {
    events: {} as
      | { type: "FAN.ON" }
      | { type: "FAN.AUTO" }
      | { type: "COOL" }
      | { type: "HEAT" },
  },
}).createMachine({
  context: {},
  type: "parallel",
  states: {
    fan: {
      initial: "auto",
      states: {
        auto: {
          on: {
            "FAN.ON": {
              target: "on",
            },
          },
        },
        on: {
          on: {
            "FAN.AUTO": {
              target: "auto",
            },
          },
        },
      },
    },
    setting: {
      initial: "heating",
      states: {
        heating: {
          on: {
            COOL: {
              target: "cooling",
            },
          },
        },
        cooling: {
          on: {
            HEAT: {
              target: "heating",
            },
          },
        },
      },
    },
  },
});
