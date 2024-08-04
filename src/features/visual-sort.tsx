'use client';

import { Navigation } from '@/components/common/navigation';
import { BubbleSort } from '@/components/visual-sort/sort';
import { Container } from '@mui/material';

const VisualSort = () => {
  return (
    <>
      <Navigation type="subpage" />
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          width: '100vw',
        }}
      >
        <BubbleSort data={[2, 3, 1, 5, 20, 15, 10]} />
      </Container>
    </>
  );
};

export default VisualSort;
