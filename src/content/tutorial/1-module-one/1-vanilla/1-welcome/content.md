---
type: lesson
title: Get Started with State Machines
focus: /firstMachine.js
---

## Getting Started with State Machines

In this tutorial, you will learn how to create a simple state machine using XState. You will create a state machine that has two states: `First State` and `Second State`. The machine will transition between these states when the `next` event is sent.

### Step 1: Create a State Machine

First, create a new state machine using the `createMachine` function from XState. The machine should have two states: `First State` and `Second State`. The machine should transition from `First State` to `Second State` when the `next` event is sent, and from `Second State` to `First State` when the `next` event is sent.

```js
import { createMachine } from "xstate";

export const machine = createMachine({
  id: "First Machine",
  initial: "First State",
  states: {
    "First State": {
      on: {
        next: [
          {
            target: "Second State",
            actions: [],
          },
        ],
      },
    },
    "Second State": {
      on: {
        next: [
          {
            target: "First State",
            actions: [],
          },
        ],
      },
    },
  },
});
```

### Step 2: Visualize the State Machine

You can visualize the state machine using the Stately Editor. Copy the machine definition and paste it into the editor to see a visual representation of the machine.

<a href="https://stately.ai/registry/editor/6ad630e7-c4f1-40e5-8068-4c0a0398a8e9?machineId=a5701504-59a3-4092-9bd4-3972be705357&mode=design" target="_blank">
Open in Stately Editor
<img src="/first-machine.png" alt="First Machine" />
</a>

```js add={9}
import { createMachine } from "xstate";
export const machine = createMachine({
  id: "First Machine",
  initial: "First State",
  states: {
    "First State": {
      on: {
        next: [
          {
            target: "Second State",
            actions: [],
          },
        ],
      },
    },
    "Second State": {
      on: {
        next: [
          {
            target: "First State",
            actions: [],
          },
        ],
      },
    },
  },
});
```
