### DOM - Working & Reconciler

<br />

### Diffing Algorithm

- Basically Reconsilation
- sees difference - stripped down version of dom
- write code in App.js outside app compo

```js
const h1_virtual = <h1>Hello</h1>;
const h1_real = document.createElement('h1');

h1_real.innerText = `Hello World`;
console.log(h1_virtual); // small obj & proto
console.log(h1_real); // huge obj & proto as real dom
```

<br />

#### Stack Reconciler -

```
- LIFO

  - Problems are
    - slower animations
    - Low priority task
    - increases problems

- Stack Reconciler

  - Didnt have
    1. Interruptable Reconciler
    2. Priority
    3. Performed updates when ready
       rather on screen would be better
```

- Performs updates in Real time ie on screen

#### Fiber Reconciler -

- has priority as per ...
- does updates offscreen than onscreen

##### Has 2 Phases

```
  1. render() Phase

     - makes updates
     - offscreen in memory

  2. Commit Phase
     - puts on browser

a. in Counter code eg
  - how does it go from 0 to 1
  - uses workloop -> has function `beginwork()`
```

#### Render Phase

```js
beginWork(currentFiberNode, workInProgressFiberNode, renderLanes);
```

> - beginWork() - walks down in tree & adds flags
> - currentFiberNode - current on screen
> - workInProgressFiberNode - new updated node
> - renderLanes - imp for scheduling tasks

- FiberRootNode is the root node of a React Fiber tree and represents the entire tree for the root render cycle.

- The currentTreeDom and workInProgressDom are part of React's reconciliation process, where the current tree (old DOM) is disconnected and the updated tree (new DOM) is connected during the commit phase.

#### Complete Work

```js
completeWork(currentFiberNode, workInProgressFiberNode, renderLanes);
```

> - constructs
>   - tree of HTML elements in memory
>   - walks inside & back up in tree
>   - creates element tree
>   - render phase done

#### Commit Phase

> - updates in browser

> #### FiberRootNode - is obj/fxn
>
> |
> ----- currentTreeDom - disconnect(from old)
> |
> ------workInProgressDom - connect(to new)

| FiberRootNode     | Description           |
| ----------------- | --------------------- |
| currentTreeDom    | disconnect (from old) |
| workInProgressDom | connect (to new)      |

---
#### REACT FIBER DONE
---