import { Navigation } from '@/components/common/navigation';
import { Bars } from '@/components/visualgo/bars';
import { Menu } from '@/components/visualgo/menu';

export const VisualAlgo = () => {
  return (
    <>
      <Navigation type="subpage" />
      <Menu />
      <Bars />
    </>
  );
};

export default VisualAlgo;
