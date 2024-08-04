import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { bubbleSort } from '@/utils/visual-sort';
import { useMount } from 'react-use';
import { Bar, State } from '@/types/visual-sort';

type Props = {
  data: number[];
};

export const BubbleSort: React.FC<Props> = ({ data }) => {
  const bars = [...data].map((item) => ({ value: item }));

  const svgRef = useRef<SVGSVGElement>(null);
  const [currentData, setCurrentData] = useState<Bar[]>(bars);
  const [step, setStep] = useState(0);
  const states = bubbleSort({ bars }, 'asc');

  useEffect(() => {
    if (!svgRef.current) {
      return;
    }

    const transition = 250;
    const width = svgRef.current.clientWidth;
    const height = svgRef.current.clientHeight;
    const svg = d3.select(svgRef.current);
    const margin = { top: 20, right: 30, bottom: 40, left: 40 };

    const x = d3
      .scaleBand()
      .domain(currentData.map((_, index) => index.toString()))
      .range([margin.left, width - margin.right])
      .padding(0.1);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(currentData, (d) => d.value) || 0])
      .nice()
      .range([height - margin.bottom, margin.top]);

    svg.select('.x-axis').attr('transform', `translate(0,${height - margin.bottom})`);

    svg.select('.y-axis').attr('transform', `translate(${margin.left},0)`);

    svg
      .select('.bars')
      .selectAll('.bar')
      .data(currentData)
      .join(
        (enter) =>
          enter
            .append('rect')
            .attr('class', 'bar')
            .attr('x', (_, i) => x(i.toString())!)
            .attr('y', height) // Start from the bottom
            .attr('height', 0) // Start with zero height
            .attr('width', x.bandwidth())
            .attr('fill', (d) => (d.highlighted ? 'orange' : 'steelblue'))
            .call((enter) =>
              enter
                .transition()
                .duration(transition)
                .attr('y', (d) => y(d.value)) // Move to the correct y position
                .attr('height', (d) => y(0) - y(d.value)) // Animate height
                .attr('fill', (d) => (d.highlighted ? 'orange' : 'steelblue'))
            ),
        (update) =>
          update.call((update) =>
            update
              .transition()
              .duration(transition)
              .attr('x', (_, i) => x(i.toString())!)
              .attr('y', (d) => y(d.value))
              .attr('height', (d) => y(0) - y(d.value))
              .attr('fill', (d) => (d.highlighted ? 'orange' : 'steelblue'))
          ),
        (exit) =>
          exit.call((exit) =>
            exit
              .transition()
              .duration(transition)
              .attr('y', height) // Move to the bottom
              .attr('height', 0) // Shrink to zero height
              .remove()
          )
      );
  }, [currentData]);

  const showNextState = () => {
    if (step < states.length - 1) {
      console.log(
        states[step].bars.map((bar) => bar.value),
        step,
        states.length
      );
      setCurrentData(states[step].bars);
      setStep((prev) => prev + 1);
    }
  };

  useEffect(() => {
    const timer = setTimeout(showNextState, 500);
    return () => clearTimeout(timer);
  }, [step]);

  return (
    <svg ref={svgRef} width="100%" height="500">
      <g className="x-axis" />
      <g className="y-axis" />
      <g className="bars" />
    </svg>
  );
};
