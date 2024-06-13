// 定義保存的資料
import { defineStore } from 'pinia'

// 使用 defineStore來定義一個名為setting的Vuex 模塊
export const useSettingsStore = defineStore('settings', {
//   state 放要保存的資料
  state: () => ({
    alarms: [
      { id: 1, name: '鬧鐘', file: new URL('@/assets/alarm.mp3', import.meta.url).href },
      { id: 2, name: 'yay', file: new URL('@/assets/yay.mp3', import.meta.url).href }
    ],
    selectedAlarm: 1
  }),
  // 類似 computed，先把state處理後再丟出來(找到id對應的檔案)
  getters:{
    selectedAlarmFile () {
      const i = this.alarms.findIndex(alarm => alarm.id === this.selectedAlarm)
     }
  },
  persist: {
    key: 'pomodoro-settings',
    // 只保存特定的東西
    paths: ['selectedAlarm']
  }
})
