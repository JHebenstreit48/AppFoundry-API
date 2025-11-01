# Instruments Profiling

## Overview
Instruments helps identify performance issues such as CPU hotspots, memory leaks, and UI stalls.

## Common Templates
- Time Profiler: CPU hotspots
- Allocations / Leaks: memory usage and leaks
- Energy Log: battery impact
- Core Animation: UI rendering performance

## Workflow
1) Choose a template and target your app  
2) Record while reproducing the issue  
3) Inspect call trees, retain cycles, or frame-time spikes  
4) Iterate with code changes and re-test

## Tips
- Keep sessions short and focused
- Use release-like settings when profiling performance-sensitive code
- Correlate spikes with user actions

