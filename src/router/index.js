import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/Main.vue'
import Reg from '../views/Reg.vue'
import VXLogin from '../views/VXLogin.vue'
import QQLogin from '../views/QQLogin.vue'
import LogPhone from '../views/LogPhone.vue'
import Log from '../views/Log.vue'
import MainPage from '../views/MainPage.vue'
import shouye from '../components/shouye.vue'
import grzx from '../components/grzx.vue'
import lxwm from '../components/lxwm.vue'
import sjgl from '../components/sjgl.vue'
import tzsc from '../components/tzsc.vue'
import xtgl from '../components/xtgl.vue'
import zskgl from '../components/zskgl.vue'
import lsjl from '../components/lsjl.vue'
import lspjs from '../components/lspjs.vue'
import wbwjk from '../components/wbwjk.vue'
import wbwj from '../components/wjgl.vue'
import ybjqx from '../components/ybjqx.vue'
import sjjs from '../components/sjjs.vue'
import excel from '../components/excel.vue'

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'main',
            component: Reg,
            children: []
        },
        {
            path: '/logvx',
            component: VXLogin
        },
        {
            path: '/logQQ',
            component: QQLogin
        },
        {
            path: '/logPhone',
            component: LogPhone
        },
        {
            path: '/log',
            component: Log
        },
        {
            path: '/mainPage',
            component: MainPage
        }, {
            path: '/main',
            component: Main,
            children: [{
                    path: 'shouye',
                    name: '首页-1',
                    component: shouye
                },
                {
                    path: '',
                    name: '首页- 1',
                    component: shouye
                },
                {
                    path: 'grzx',
                    name: '个人中心-2',
                    component: grzx,
                },
                {
                    path: 'sjgl',
                    name: '数据管理-3',
                    component: sjgl
                },
                {
                    path: 'zskgl',
                    name: '知识库管理-4',
                    component: zskgl
                },
                {
                    path: 'tzsc',
                    name: '图纸生成-5',
                    component: tzsc
                },
                {
                    path: 'xtgl',
                    name: '系统管理-6',
                    component: xtgl
                },
                {
                    path: 'lxwm',
                    name: '联系我们-7',
                    component: lxwm
                },
                {
                    path: 'lsjl',
                    name: '个人中心 > 历史记录-2',
                    component: lsjl
                },
                {
                    path: 'lspjs',
                    name: '数据管理 > 耐雷水平计算-3',
                    component: lspjs
                },
                {
                    path: 'wbwjk',
                    name: '知识库管理 > 外部文件库-4',
                    component: wbwjk
                },
                {
                    path: 'wjgl',
                    name: '知识库管理 > 外部文件库 > 文件管理-4',
                    component: wbwj
                },
                {
                    path: 'rules',
                    name: '知识库管理 > 规则库',
                    component: import('../components/ruleBase.vue')
                },
                {
                    path: 'standard',
                    name: '知识库管理 > 标准模板图型库',
                    component: import('../components/standardLibrary.vue')
                },
                {
                    path: 'tower',
                    name: '知识库管理 > 杆塔数据',
                    component: import('../components/towerDatabase.vue')
                },
                {
                    path: 'ybjqx',
                    name: '数据管理 > 摇摆角计算-3',
                    component: ybjqx
                },
                {
                    path: 'stressVerCal',
                    name: '数据管理 > 导线悬挂点应力校验',
                    component: import('../components/stressVerCal.vue')
                },
                {
                    path: 'jumperVerCal',
                    name: '数据管理 > 跳线间隙校验',
                    component: import('../components/jumperVerCal.vue')
                },
                {
                    path: 'lineDisCal',
                    name: '数据管理 > 线间距离计算校验',
                    component: import('../components/lineDisCal.vue')
                },
                {
                    path: 'sjjs',
                    name: '数据管理 > 数据计算-3',
                    component: sjjs
                },
                {
                    path: 'excel',
                    name: '知识库管理 > Excel信息库-4',
                    component: excel
                },

            ]
        }
    ]
})

export default router