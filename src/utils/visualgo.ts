import { Bar, SortOrder, SortState } from '@/types/visualgo';

const createFinalState = (state: SortState[]) => {
  const lastState = state[state.length - 1];
  lastState.bars.forEach((bar) => {
    bar.isHighlighted = false;
  });
  return lastState;
};

export const bubbleSort = (initialState: SortState, order: SortOrder) => {
  const _bars: Bar[] = [...initialState.bars];
  const states: SortState[] = [initialState];
  let swapped = false;

  for (let i = 0; i < _bars.length; ++i) {
    swapped = false;
    for (let j = 0; j < _bars.length - 1; ++j) {
      let tempState: SortState = JSON.parse(JSON.stringify({ bars: [..._bars] }));
      tempState.bars[j].isHighlighted = true;
      tempState.bars[j + 1].isHighlighted = true;
      states.push(tempState);

      if (
        order === 'desc' ? _bars[j].value < _bars[j + 1].value : _bars[j].value > _bars[j + 1].value
      ) {
        swapped = true;
        const tempElem = _bars[j];
        _bars[j] = _bars[j + 1];
        _bars[j + 1] = tempElem;

        tempState = JSON.parse(JSON.stringify({ bars: [..._bars] }));
        tempState.bars[j].isHighlighted = true;
        tempState.bars[j + 1].isHighlighted = true;
        states.push(tempState);
      }
    }

    if (!swapped) {
      break;
    }
  }

  states.push(createFinalState(states));
  return states;
};

export const combSort = (initialState: SortState, order: SortOrder) => {
  const n = initialState.bars.length;
  const elements = [...initialState.bars];
  let gap = n;
  let swapped = true;
  const states: SortState[] = [];

  const getNextGap = (gap: number) => {
    const local_gap = Math.floor((gap * 10) / 13);
    return local_gap < 1 ? 1 : local_gap;
  };

  while (1 !== gap || true === swapped) {
    gap = getNextGap(gap);
    swapped = false;

    for (let i = 0; i < n - gap; ++i) {
      let tempState: SortState = JSON.parse(JSON.stringify({ bars: [...elements] }));
      tempState.bars[i].isHighlighted = true;
      tempState.bars[i + gap].isHighlighted = true;
      states.push(tempState);

      if (
        order === SortOrder.desc
          ? elements[i].value < elements[gap + i].value
          : elements[i].value > elements[gap + i].value
      ) {
        swapped = true;

        const temp = elements[i];
        elements[i] = elements[gap + i];
        elements[i + gap] = temp;

        tempState = JSON.parse(JSON.stringify({ bars: [...elements] }));
        tempState.bars[i].isHighlighted = true;
        tempState.bars[i + gap].isHighlighted = true;
        states.push(tempState);
      }
    }
  }

  states.push(createFinalState(states));
  return states;
};

export const heapSort = (initialState: SortState, order: SortOrder) => {
  const n: number = initialState.bars.length;
  const elements = [...initialState.bars];
  const states: SortState[] = [];

  const heapify = (elements: Bar[], n: number, i: number, solution: SortState[], order: string) => {
    let current = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (
      left < n &&
      (order === 'descending'
        ? elements[left].value < elements[current].value
        : elements[left].value > elements[current].value)
    ) {
      current = left;
    }

    if (
      right < n &&
      (order === 'descending'
        ? elements[right].value < elements[current].value
        : elements[right].value > elements[current].value)
    ) {
      current = right;
    }

    let tempState: SortState = JSON.parse(JSON.stringify({ bars: [...elements] }));
    tempState.bars[i].isHighlighted = true;
    tempState.bars[current].isHighlighted = true;
    states.push(tempState);

    if (current !== i) {
      const temp = elements[i];
      elements[i] = elements[current];
      elements[current] = temp;

      tempState = JSON.parse(JSON.stringify({ bars: [...elements] }));
      tempState.bars[i].isHighlighted = true;
      tempState.bars[current].isHighlighted = true;
      states.push(tempState);

      heapify(elements, n, current, solution, order);
    }
  };

  for (let i = Math.trunc(n / 2) - 1; i >= 0; --i) {
    heapify(elements, n, i, states, order);
  }

  for (let i = n - 1; i >= 0; --i) {
    const temp = elements[0];
    elements[0] = elements[i];
    elements[i] = temp;

    const tempState: SortState = JSON.parse(JSON.stringify({ bars: [...elements] }));
    tempState.bars[0].isHighlighted = true;
    tempState.bars[i].isHighlighted = true;
    states.push(tempState);

    heapify(elements, i, 0, states, order);
  }

  states.push(createFinalState(states));
  return states;
};

export const insertionSort = (initialState: SortState, order: SortOrder) => {
  const elements = [...initialState.bars];
  const states: SortState[] = [];

  for (let i = 1; i < elements.length; ++i) {
    const key = elements[i];
    let j = i - 1;

    let tempState: SortState = JSON.parse(JSON.stringify({ bars: [...elements] }));
    tempState.bars[j].isHighlighted = true;
    tempState.bars[j + 1].isHighlighted = true;
    states.push(tempState);

    while (
      j >= 0 &&
      (order === SortOrder.desc ? elements[j].value < key.value : elements[j].value > key.value)
    ) {
      tempState = JSON.parse(JSON.stringify({ bars: [...elements] }));
      tempState.bars[j].isHighlighted = true;
      tempState.bars[j + 1].isHighlighted = true;
      states.push(tempState);

      elements[j + 1] = elements[j];

      tempState = JSON.parse(JSON.stringify({ bars: [...elements] }));
      tempState.bars[j].isHighlighted = true;
      tempState.bars[j + 1].isHighlighted = true;
      states.push(tempState);

      j = j - 1;
    }
    elements[j + 1] = key;
  }

  states.push(createFinalState(states));
  return states;
};

export const selectionSort = (initialState: SortState, order: SortOrder) => {
  const elements = [...initialState.bars];
  const states: SortState[] = [];

  for (let i = 0; i < elements.length - 1; ++i) {
    let current = i;

    let tempState: SortState = JSON.parse(JSON.stringify({ bars: [...elements] }));
    tempState.bars[i].isHighlighted = true;
    tempState.bars[current].isHighlighted = true;
    states.push(tempState);

    let j = 0;
    for (j = i + 1; j < elements.length; ++j) {
      tempState = JSON.parse(JSON.stringify({ bars: [...elements] }));
      tempState.bars[i].isHighlighted = true;
      tempState.bars[j].isHighlighted = true;
      tempState.bars[current].isHighlighted = true;
      states.push(tempState);

      if (
        order === SortOrder.desc
          ? elements[j].value > elements[current].value
          : elements[j].value < elements[current].value
      ) {
        current = j;
      }
    }

    const temp = elements[current];
    elements[current] = elements[i];
    elements[i] = temp;
  }

  states.push(createFinalState(states));
  return states;
};

export const shellSort = (initialState: SortState, order: SortOrder) => {
  const n: number = initialState.bars.length;
  const elements = [...initialState.bars];
  const states: SortState[] = [];

  for (let gap: number = Math.trunc(n / 2); gap > 0; gap = Math.trunc(gap / 2)) {
    for (let i = gap; i < n; ++i) {
      const temp = elements[i];
      let j;
      let tempState: SortState;

      for (
        j = i;
        j >= gap &&
        (order === SortOrder.desc
          ? elements[j - gap].value < temp.value
          : elements[j - gap].value > temp.value);
        j -= gap
      ) {
        tempState = JSON.parse(JSON.stringify({ bars: [...elements] }));
        tempState.bars[i].isHighlighted = true;
        tempState.bars[j - gap].isHighlighted = true;
        states.push(tempState);

        elements[j] = elements[j - gap];

        tempState = JSON.parse(JSON.stringify({ bars: [...elements] }));
        tempState.bars[j].isHighlighted = true;
        tempState.bars[j - gap].isHighlighted = true;
        states.push(tempState);
      }

      tempState = JSON.parse(JSON.stringify({ bars: [...elements] }));
      tempState.bars[i].isHighlighted = true;
      tempState.bars[j].isHighlighted = true;
      states.push(tempState);

      elements[j] = temp;
    }
  }

  states.push(createFinalState(states));
  return states;
};
