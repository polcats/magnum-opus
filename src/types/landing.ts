import { blue, green, grey } from '@mui/material/colors';
import { SvgIconComponent } from '@mui/icons-material';

type Tag = 'beta' | 'integrated' | 'private' | 'ongoing' | '2018' | '2020' | '2022' | '2024';

export const TagColor = {
  beta: blue[500],
  integrated: blue[900],
  private: grey[500],
  ongoing: green[500],
  default: grey[800],
};

export type Project = {
  title: string;
  description: string;
  image?: string;
  icon?: React.ReactElement<SvgIconComponent>;
  notes?: string;
  href?: string;
  tags?: Tag[];
};
