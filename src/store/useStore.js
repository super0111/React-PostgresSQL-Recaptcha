import create from 'zustand';
import { devtools } from 'zustand/middleware';

const store = (set, get) => ({
  // ...createTextSlice(set, get),
});

const useStore = create(devtools(store));

export default useStore;
