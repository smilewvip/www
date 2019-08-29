import App from './App'
const home = r => require.ensure([], () => r(require('./page/home')), 'home')
const login = r => require.ensure([], () => r(require('./page/Login')), 'login')

export default [{
    path: '/',
    component: App, //顶层路由，对应index.html
    children: [ //二级路由。对应App.vue
        //地址为空时跳转home页面
         {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: home
        },
        {
            path: '/login',
            component: login
        },
    ]
}]