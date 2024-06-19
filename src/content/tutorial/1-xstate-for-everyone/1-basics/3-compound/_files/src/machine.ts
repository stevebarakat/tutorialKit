import { setup } from "xstate";

export const machine = setup({
  types: {
    events: {} as
      | { type: "OPEN" }
      | { type: "PLAY" }
      | { type: "STOP" }
      | { type: "PAUSE" }
      | { type: "CLOSE" },
  },
}).createMachine({
  initial: "Opened",
  states: {
    Opened: {
      on: {
        CLOSE: {
          target: "Closing",
        },
      },
    },
    Closing: {
      after: {
        "1500": {
          target: "Closed",
        },
      },
    },
    Closed: {
      initial: "Stopped",
      on: {
        OPEN: {
          target: "Opened",
        },
      },
      states: {
        Stopped: {
          on: {
            PLAY: {
              target: "Playing",
            },
          },
        },
        Playing: {
          on: {
            PAUSE: {
              target: "Paused",
            },
            STOP: {
              target: "Stopped",
            },
          },
        },
        Paused: {
          on: {
            PLAY: {
              target: "Playing",
            },
            STOP: {
              target: "Stopped",
            },
          },
        },
      },
    },
  },
});
