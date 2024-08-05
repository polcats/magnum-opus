'use client';

import React, { useCallback, useMemo, useState } from 'react';

import { AnimationState, Bar, SortingAlgorithm, SortOrder, SortState } from '@/types/visualgo';
import {
  bubbleSort,
  combSort,
  heapSort,
  insertionSort,
  selectionSort,
  shellSort,
} from '@/utils/visualgo';

type VisualgoContext = {
  order: SortOrder;
  bars: Bar[];
  speed: number;
  count: number;
  step: number;
  solution: SortState[];
  algorithm: SortingAlgorithm;
  animationState: AnimationState;
  play: () => void;
  pause: () => void;
  reset: () => void;
  nextStep: () => void;
  setSpeed: (speed: number) => void;
  setCount: (count: number) => void;
  setOrder: (order: SortOrder) => void;
  setAlgorithm: (algorithm: SortingAlgorithm) => void;
  generateBars: () => void;
};

export const VisualgoContext = React.createContext<VisualgoContext>({
  order: SortOrder.asc,
  bars: [],
  speed: 50,
  count: 15,
  step: 0,
  solution: [],
  algorithm: SortingAlgorithm.bubble,
  animationState: AnimationState.idle,
  play: () => {},
  pause: () => {},
  reset: () => {},
  nextStep: () => {},
  setSpeed: () => {},
  setCount: () => {},
  setOrder: () => {},
  setAlgorithm: () => {},
  generateBars: () => {},
});

export type VisualgoProps = React.PropsWithChildren;

export const VisualgoProvider: React.FC<VisualgoProps> = ({ children }) => {
  const [order, setOrder] = useState<SortOrder>(SortOrder.asc);
  const [bars, setBars] = useState<Bar[]>([]);
  const [speed, setSpeed] = useState<number>(50);
  const [count, setCount] = useState<number>(15);
  const [step, setStep] = useState<number>(0);
  const [animationState, setAnimationState] = useState<AnimationState>(AnimationState.idle);
  const [algorithm, setAlgorithm] = useState<SortingAlgorithm>(SortingAlgorithm.bubble);
  const [solution, setSolution] = useState<SortState[]>([]);

  const generateBars = useCallback(() => {
    // I don't want duplicate values
    const newValues = new Set<number>();
    while (newValues.size < count) {
      newValues.add(Math.round(Math.random() * 90) + 10);
    }

    const newBars = Array.from(newValues, (value) => ({
      value,
      isHighlighted: false,
    }));

    setStep(0);
    setSolution([]);
    setBars(newBars);
  }, [count]);

  const solve = useCallback(() => {
    let _sol: SortState[] | undefined;

    switch (algorithm) {
      case SortingAlgorithm.bubble:
        _sol = bubbleSort({ bars }, order);
        break;
      case SortingAlgorithm.comb:
        _sol = combSort({ bars }, order);
        break;
      case SortingAlgorithm.heap:
        _sol = heapSort({ bars }, order);
        break;
      case SortingAlgorithm.insertion:
        _sol = insertionSort({ bars }, order);
        break;
      case SortingAlgorithm.selection:
        _sol = selectionSort({ bars }, order);
        break;
      case SortingAlgorithm.shell:
        _sol = shellSort({ bars }, order);
        break;
      default:
        break;
    }

    if (!_sol) {
      return;
    }

    setSolution(_sol);
    setBars(_sol[step].bars);
    setAnimationState(AnimationState.running);
  }, [algorithm, bars, order, step]);

  const play = useCallback(() => {
    switch (animationState) {
      case AnimationState.idle:
        solve();
        break;
      case AnimationState.paused:
        setBars(solution[step].bars);
        setAnimationState(AnimationState.running);
        break;
      default:
        break;
    }
  }, [animationState, solve, solution, step]);

  const pause = useCallback(() => {
    if (animationState === AnimationState.running) {
      setAnimationState(AnimationState.paused);
    }
  }, [animationState]);

  const reset = useCallback(() => {
    setStep(0);
    setSolution([]);
    setAnimationState(AnimationState.idle);
    generateBars();
  }, [generateBars]);

  const nextStep = useCallback(() => {
    const nextStep = step + 1;
    if (!solution[nextStep]?.bars) {
      setAnimationState(AnimationState.finished);
      return;
    }

    setStep(nextStep);
    setBars(solution[nextStep].bars);
  }, [solution, step]);

  const value = useMemo(
    () => ({
      order,
      bars,
      speed,
      count,
      step,
      solution,
      algorithm,
      animationState,
      play,
      pause,
      reset,
      nextStep,
      setSpeed,
      setCount,
      setOrder,
      setAlgorithm,
      generateBars,
    }),
    [
      order,
      bars,
      speed,
      count,
      step,
      solution,
      algorithm,
      animationState,
      play,
      pause,
      reset,
      nextStep,
      generateBars,
    ]
  );

  return <VisualgoContext.Provider value={value}>{children}</VisualgoContext.Provider>;
};
