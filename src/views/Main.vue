<script setup>
import { useRouter, useRoute, onBeforeRouteUpdate } from 'vue-router'
import { ElMessage } from 'element-plus'
let router = useRouter()
let route = useRoute()
import { ref, watch } from 'vue'
import {
  Menu,
  House,
  User,
  Files,
  Reading,
  DocumentRemove,
  Setting,
  Headset
} from '@element-plus/icons-vue'
let name = ref(route.name.split('-')[0])
let index = ref(route.name.split('-')[1])
let toggle = (NAME, to) => {
  // name.value = NAME
  router.push(to)
}
function onRouteChange (to, from) {
  // 在这里实现你的逻辑
  console.log('路由从', from, '切换到', to)
  name.value = to.name.split('-')[0]
  index.value = to.name.split('-')[1]
}

onBeforeRouteUpdate((to, from, next) => {
  // 调用你的函数
  onRouteChange(to, from)
  // 确保调用 next()
  next()
})
let logout = () => {
  router.push('/')
}
</script>

<template>
  <div class="wrapper">
    <div class="nav">
      <el-menu
        class="el-menu-vertical-demo"
        style="padding: 0 10%"
        :default-active="index"
        background-color="rgb(7, 59, 99)"
        text-color="#fff"
        active-text-color="#ffd04b"
        @select="handleSelect"
      >
        <div class="logo"></div>
        <el-menu-item index="1" @click="toggle('任务提交', '/mainPage')"
          ><el-icon><House /></el-icon>首页</el-menu-item
        >
        <el-menu-item index="2" @click="toggle('任务列表', '/main/grzx')"
          ><el-icon><User /></el-icon>个人中心</el-menu-item
        >
        <el-menu-item
          index="3"
          @click="toggle('张量序列详细信息', '/main/sjgl')"
          ><el-icon><Files /></el-icon>数据管理</el-menu-item
        >
        <el-menu-item
          index="4"
          @click="toggle('内存交换优化详情', '/main/zskgl')"
          ><el-icon><Reading /></el-icon>知识库管理</el-menu-item
        >
        <el-menu-item index="5" @click="toggle('系统性能监测', '/main/tzsc')"
          ><el-icon><DocumentRemove /></el-icon>图纸生成</el-menu-item
        >
        <el-menu-item index="6" @click="toggle('api文档', '/main/xtgl')"
          ><el-icon><Setting /></el-icon>系统管理</el-menu-item
        >
      </el-menu>
    </div>
    <div class="component">
      <div class="header">
        <el-icon style="left: 1vw"><Menu size="20" /></el-icon>
        <el-icon
          style="left: 2vw; width: 20vw; display: flex; justify-content: left"
          >{{ name }}</el-icon
        >
        <div
          class="useravatar"
          @click="router.push('/user')"
          v-if="name == 'user'"
        ></div>
        <div class="useravatar" v-else></div>
        <div class="username" v-if="name == 'user'">user</div>
        <div class="username" v-else>郝碧佘</div>
        <div class="logout" @click="logout">退出</div>
      </div>
      
      <div
        class="content"
        style="
          margin-top: 7vh;
          background-color: rgb(255, 255, 255);
          height: 76vh;
          width: 100%;
          padding-top: 0vh;
          overflow-y: scroll;
        "
      >
        <router-view></router-view>
      </div>
    </div>
  </div>
  <div class="footer">
    <div class="f-left">
      <div class="left-up" style="margin-top: 2vh">
        京ICP备10026449号| 用户协议| 隐私权政策| 意见反馈
      </div>
      <div class="left-down" style="margin-top: 2vh">
        <div>客服热线：151XXXXXX22</div>
        <div>地址：XXXX市XXX路XX号XXXX基地</div>
      </div>
    </div>
    <div class="f-middle">
      <div class="m-left">技术支持</div>
      <div class="m-right">二维码</div>
    </div>
    <div class="f-right"></div>
  </div>
</template>

<style scoped>
.wrapper {
  width: 100vw;
  height: 83vh;
  padding-bottom: 5vh;
  display: flex;
}
.nav {
  width: 11%;
  height: 87vh;
  background-color: rgb(7, 59, 99);
}
.useravatar {
  width: 5vh;
  height: 5vh;
  background: url(../assets/user.png) no-repeat;
  background-size: contain;
  z-index: 9999;
  margin-left: 50vw;
  /* position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 20%; */
  cursor: pointer;
}
.username {
  /* position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 16%; */
  height: 3vh;
  margin: 0.5vw;
  z-index: 9999;
  width: 4vw;
  color: black;
}

.component {
  width: 87%;
  height: 83vh;
  /* padding-bottom: 5vh; */
}
.banner {
  width: 100%;
  height: 7vh;
  padding: 0 10%;
  display: flex;
  align-items: center;
}
.banner div {
  margin-right: 1vw;
}
.logout {
  /* position: absolute;
  right: 10%;
  top: 50%;
  transform: translateY(-50%); */
  color: #ccc;
  cursor: pointer;
}
.logout:hover {
  color: #0567B3;
}
.header {
  position: fixed;
  width: 100%;
  height: 7vh;
  z-index: 99;
  display: flex;
  align-items: center;
  /* justify-content: end; */
  background-color: #fff;
}
.logo {
  width: 110%;
  height: 9vh;
  margin: 0 auto;
  background: url(../assets/logo-white.png) no-repeat;
  background-size: contain;
}
.user-icon {
  width: 5vw;
  height: 5vw;
  margin: 1vh auto;
  background: url(../assets/user.png) no-repeat;
  background-size: contain;
}
.footer {
  /* width: 100%;
  height: 17vh;
  display: flex;
  padding: 0 12vw;
  background-color: rgb(4, 51, 87);
  align-items: center;
  justify-content: space-between; */
  width: 100%;
  height: 13vh;
  margin-top: 4vh;
  display: flex;
  padding: 0 7vw;
  background-color: rgb(4, 51, 87);
  align-items: center;
  justify-content: space-between;
  letter-spacing: 2px;
  
}
.f-left {
  height: 100%;
  width: 35%;
  color: white;
  font-size: 14px;
}
.f-middle {
  height: 100%;
  width: 13%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-left: 20vw;
}
.f-right {
  width: 24%;
  height: 40%;
  background: url(../assets/footer-icons.png) no-repeat;
  background-size: contain;
}
.left-down {
  display: flex;
  align-items: center;
  justify-content: left;
}
.m-left {
  /* width: 1vw;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 14px; */
  width: 1.5vw;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 14px;
}
.m-right {
  height: 90%;
  width: 7vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
}
</style>
