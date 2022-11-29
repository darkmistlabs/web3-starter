// @mui
import { Stack } from '@mui/material';
//
import { NavProps } from '../types';
import NavList from './NavList';

// ----------------------------------------------------------------------

export default function NavDesktop({ isOffset, data }: NavProps) {
  return (
    <Stack component="nav" direction="row" spacing={10} sx={{ mr: 6 }}>
      {data.map((link) => (
        <NavList key={link.title} item={link} isOffset={isOffset} />
      ))}
    </Stack>
  );
}
