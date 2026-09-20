/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { MetricItem } from '../types';

const metrics: MetricItem[] = [
  {
    id: 'metric-1',
    value: 'Tier 2',
    label: 'IT Support & Troubleshooting',
  },
  {
    id: 'metric-2',
    value: '7+',
    label: 'Programming Languages & Frameworks',
  },
  {
    id: 'metric-3',
    value: '60+',
    label: 'Users Recovered in Rapid Network Resolution',
  },
];

export const ImpactMetrics: React.FC = () => {
  return (
    <section 
      id="experience" 
      className="py-20 md:py-28 max-w-6xl mx-auto px-6 sm:px-8"
      aria-labelledby="metrics-heading"
    >
      {/* Hidden section title for screen readers / semantic structure */}
      <h2 id="metrics-heading" className="sr-only">
        Impact &amp; Metrics
      </h2>

      {/* Spaced Evenly Centered Flexbox Row */}
      <div 
        className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8 text-center fade-in-up"
        id="metrics-row"
      >
        {metrics.map((metric, index) => {
          const delayClass = index === 0 ? 'delay-100' : index === 1 ? 'delay-200' : 'delay-300';
          return (
            <div 
              key={metric.id} 
              id={metric.id}
              className={`flex-1 flex flex-col items-center justify-center p-4 fade-in-up ${delayClass}`}
            >
              {/* Huge Metallic Gold Stat Value */}
              <span 
                className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-3"
                style={{ color: '#B5A642' }}
              >
                {metric.value}
              </span>

              {/* Light Silver Subtitle Label */}
              <span className="text-sm sm:text-base text-[#C0C0C0] max-w-[240px] leading-snug font-normal">
                {metric.label}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};
