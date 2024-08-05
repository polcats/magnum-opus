export type Bar = {
  value: number;
  isHighlighted?: boolean;
};

export type SortState = {
  bars: Bar[];
};

export enum SortOrder {
  asc = 'asc',
  desc = 'desc',
}

export enum SortingAlgorithm {
  bubble = 'bubble',
  comb = 'comb',
  heap = 'heap',
  insertion = 'insertion',
  selection = 'selection',
  shell = 'shell',
}

export enum AnimationState {
  idle = 'idle',
  running = 'running',
  paused = 'paused',
  finished = 'finished',
}
