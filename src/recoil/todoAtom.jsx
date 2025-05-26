import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const todoAtom = atom({
  key: 'todoList',
  default: [],
  effects_UNSTABLE: [persistAtom],
});
