import { defineStore } from 'pinia';

export const useRootStore = defineStore('root', {
  state: () => ({
    themeColor: 'rgb(0, 163, 82)',
    selectedTab: 't_0',
    anchor: 'portfolio',
    appName: '字节链'
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    anchorActions(id) {
      this.anchor = id;
    },
  },
});
