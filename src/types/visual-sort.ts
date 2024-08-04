export type SortingOrder = 'asc' | 'desc';

export type Bar = {
  value: number;
  highlighted?: boolean;
};

export type State = {
  bars: Bar[];
};
