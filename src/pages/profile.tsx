import { _posts } from 'src/_mock';
import { CONFIG } from 'src/config-global';

import { ProfileView } from 'src/sections/user/view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <title>{`Profile - ${CONFIG.appName}`}</title>

      <ProfileView />
    </>
  );
}
