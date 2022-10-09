import useMediaQuery from './mediaQuery';

export function useIsMobile() {
  return useMediaQuery(`(max-width: 640px)`);
}
