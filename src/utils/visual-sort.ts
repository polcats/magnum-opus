import { Bar, SortingOrder, State } from '@/types/visual-sort';

const clearHighlighted = (state: State[]) => {
  const lastState = state[state.length - 1];
  lastState.bars.forEach((bar) => {
    bar.highlighted = false;
  });
  return lastState;
};

export const bubbleSort = (initialState: State, order: SortingOrder) => {
  const _bars: Bar[] = [...initialState.bars];
  const states: State[] = [initialState];
  let swapped = false;

  for (let i = 0; i < _bars.length; ++i) {
    swapped = false;
    for (let j = 0; j < _bars.length - 1; ++j) {
      let tempState: State = JSON.parse(JSON.stringify({ bars: [..._bars] }));
      tempState.bars[j].highlighted = true;
      tempState.bars[j + 1].highlighted = true;
      states.push(tempState);

      if (
        order === 'desc' ? _bars[j].value < _bars[j + 1].value : _bars[j].value > _bars[j + 1].value
      ) {
        swapped = true;
        const tempElem = _bars[j];
        _bars[j] = _bars[j + 1];
        _bars[j + 1] = tempElem;

        tempState = JSON.parse(JSON.stringify({ bars: [..._bars] }));
        tempState.bars[j].highlighted = true;
        tempState.bars[j + 1].highlighted = true;
        states.push(tempState);
      }
    }

    if (!swapped) {
      break;
    }
  }

  states.push(clearHighlighted(states));
  return states;
};
