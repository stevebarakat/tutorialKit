import { setup } from "xstate";

export const machine = setup({
  types: {
    events: {} as { type: "weigh" } | { type: "grind" } | { type: "brew" },
  },
}).createMachine({
  id: "coffeeMachine",
  initial: "preparation",
  states: {
    preparation: {
      initial: "idle",
      states: {
        idle: {
          on: {
            weigh: {
              target: "weighed",
            },
          },
        },
        weighed: {
          on: {
            grind: {
              target: "ground",
            },
          },
        },
        ground: {
          on: {
            brew: {
              target: "#coffeeMachine.brewing",
            },
          },
        },
      },
    },
    brewing: {
      after: {
        "3000": {
          target: "ready",
        },
      },
    },
    ready: {
      type: "final",
    },
  },
});
