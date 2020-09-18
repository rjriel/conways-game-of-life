# Rules to follow with conways game of life

Essentially you need to create a grid of cells. Each cell can have one of two states: alive or dead.
After the first grid is generated (randomly) and displayed the determination of the cells state for the next grid
is made according to the below 3 rules. The next grid is generated and displayed based on these determinations.

## The 3 golden rules

1. Any live cell with 2 or 3 live neighbours survives
2. Any dead cell with 3 live neighbours becomes alive
3. All other live cells die, all dead cells stay dead