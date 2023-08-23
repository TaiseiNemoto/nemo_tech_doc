import DefaultTheme from 'vitepress/theme'
import './custom.css'
import PersonList from './components/PersonList.vue'

export default {
    ...DefaultTheme,
    enhanceApp(ctx) {
      DefaultTheme.enhanceApp(ctx)
      ctx.app.component('PersonList', PersonList);
    }
  }