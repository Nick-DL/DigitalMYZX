import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './custom.css'
import './style/index.css'
import Linkcard from "./components/Linkcard.vue"



export default {
  extends: DefaultTheme,
  enhanceApp({app}: {app: any}) { 
    // 注册全局组件
    app.component('Linkcard' , Linkcard)
  }
} satisfies Theme