import { DependencyList, EffectCallback, useEffect, useRef } from 'react';

function useUpdateEffect(callback: EffectCallback, depsList: DependencyList) {
  const skippedMount = useRef(false);
  useEffect(() => {
    if (skippedMount.current) {
      callback();
    } else {
      skippedMount.current = true;
    }
  }, depsList);
}

export default useUpdateEffect;
