import { capitalize, FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material';

import { useVisualgo } from '@/hooks/useVisualgo';
import { SortingAlgorithm, SortOrder } from '@/types/visualgo';

export const MenuSelects: React.FC = () => {
  const { order, setOrder, algorithm, setAlgorithm } = useVisualgo();

  return (
    <>
      <Grid
        item
        sx={{
          width: {
            xs: '100%',
            sm: '100%',
            md: 200,
          },
          alignSelf: 'center',
        }}
      >
        <FormControl
          size="small"
          sx={{
            width: '100%',
          }}
        >
          <InputLabel id="order-select-label">Order</InputLabel>
          <Select
            labelId="order-select-label"
            id="order-select"
            value={order}
            label="Order"
            onChange={(e) => setOrder(e.target.value as SortOrder)}
          >
            <MenuItem value={SortOrder.asc}>Ascending</MenuItem>
            <MenuItem value={SortOrder.desc}>Descending</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid
        item
        sx={{
          alignSelf: 'center',
          width: {
            xs: '100%',
            sm: '100%',
            md: 200,
          },
        }}
      >
        <FormControl
          size="small"
          sx={{
            width: '100%',
          }}
        >
          <InputLabel id="algorithm-select-label">Algorithm</InputLabel>
          <Select
            labelId="algorithm-select-label"
            id="algorithm-select"
            value={algorithm}
            label="Algorithm"
            onChange={(e) => setAlgorithm(e.target.value as SortingAlgorithm)}
          >
            {Object.keys(SortingAlgorithm).map((algo) => {
              return (
                <MenuItem key={algo} value={algo}>
                  {capitalize(algo)}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Grid>
    </>
  );
};
