import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './custom.css'
import './style/index.css'
import Linkcard from "./components/Linkcard.vue"
import { Icon } from '@iconify/vue'
import VueTippy from 'vue-tippy'
import 'tippy.js/dist/tippy.css'
import LinkList from '../components/unique/LinkList.vue'



export default {
  extends: DefaultTheme,
  enhanceApp({app}: {app: any}) { 
    // 注册全局组件
    app.component('Linkcard' , Linkcard)
    app.component('Icon', Icon)
    app.component('LinkList', LinkList)
    // 注册 VueTippy 插件和指令
    app.use(VueTippy, { directive: 'tip' })
  }
} satisfies Theme