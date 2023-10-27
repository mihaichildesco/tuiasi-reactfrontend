import AppBar from '@mui/material/AppBar';
import { ThemeProvider } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { selectFooterTheme } from 'app/store/fuse/settingsSlice';
import clsx from 'clsx';

function FooterLayout1(props) {
  const footerTheme = useSelector(selectFooterTheme);

  return (
      <></>
  );
}

export default memo(FooterLayout1);
