import * as React from 'react';
import { Button } from '@mui/base';

/**
 * how you used the components
 */
export default function App() {
  return (
    <Button disabled slots={{ root: 'span' }}>
      Button
    </Button>
  );
}
