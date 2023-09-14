import { useRef } from 'react';

const useFirstMountState = () => {
  const firstStateRef = useRef<boolean>(true);

  if (firstStateRef.current) {
    firstStateRef.current = false;

    return true;
  }

  return firstStateRef.current;
};

export default useFirstMountState;
