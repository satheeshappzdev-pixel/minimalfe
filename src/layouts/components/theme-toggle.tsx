import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import { useColorScheme } from '@mui/material/styles';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function ThemeToggle() {
  const { mode, setMode } = useColorScheme();

  const handleToggle = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  if (!mode) {
    return null;
  }

  return (
    <Tooltip title={mode === 'light' ? 'Dark mode' : 'Light mode'}>
      <IconButton onClick={handleToggle} color="default">
        {mode === 'light' ? (
          <Iconify icon="solar:moon-bold-duotone" width={24} />
        ) : (
          <Iconify icon="solar:sun-bold-duotone" width={24} />
        )}
      </IconButton>
    </Tooltip>
  );
}
