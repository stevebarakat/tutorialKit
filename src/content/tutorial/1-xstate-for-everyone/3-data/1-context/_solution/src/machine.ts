import { setup, assign, assertEvent } from "xstate";

export const machine = setup({
  types: {
    context: {} as { volume: number },
    events: {} as { type: "start" } | { type: "stop" },
  },
}).createMachine({
  context: {
    volume: 50,
  },
  id: "Volume Machine",
  initial: "Stopped",
  states: {
    Stopped: {
      on: {
        start: {
          target: "Playing",
        },
      },
    },
    Playing: {
      on: {
        stop: {
          target: "Stopped",
        },
      },
    },
  },
});
