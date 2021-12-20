import { DependencyList, EffectCallback, useEffect, useRef } from 'react';

function useUpdateEffect(callback: EffectCallback, depsList: DependencyList) {
  const skippedMount = useRef(false);
  useEffect(() => {
    if (skippedMount.current) {
      callback();
    } else {
      if (depsList.length === 0) {
        throw new Error('Invalid usage: use with at least one dependance');
      }
      skippedMount.current = true;
    }
  }, depsList);
}

export default useUpdateEffect;
