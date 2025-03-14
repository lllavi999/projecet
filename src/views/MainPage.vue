<script setup>
import { ref, onMounted } from 'vue'
import { useRouter, useRoute, onBeforeRouteUpdate } from 'vue-router'
let yiyue = ref('')
let router = useRouter()
const value = ref('')
onMounted(() => {
  // console.log(document.querySelector('.m-2'))
  document.querySelectorAll('.m-2 div')[0].style.background = 'none'
  document.querySelector('.el-carousel__container').style.height = '100%'
  // console.log(document.querySelector('#app > div > div > div.m-pic > div > div'))
  // console.log(dcs)
  // for (let i = 0; i < dcs.length; i++) {
  //   dcs[i].style.height = '100%'
  // }
})
const options = [
  {
    value: '个人中心',
    label: '个人中心'
  },
  {
    value: '数据管理',
    label: '数据管理'
  },
  {
    value: '知识库管理',
    label: '知识库管理'
  },
  {
    value: '数据生成',
    label: '数据生成'
  },
  {
    value: '系统管理',
    label: '系统管理'
  }
]
const skip = data => {
  if (data == '个人中心') {
    router.push('/main/grzx')
  } else if (data == '数据管理') {
    router.push('/main/sjgl')
  } else if (data == '知识库管理') {
    router.push('/main/zskgl')
  } else if (data == '系统管理') {
    router.push('/main/xtgl')
  } else if (data == '数据生成') {
    router.push('/main/tzsc')
  }
}
let lunbo = [
  '../../src/assets/lb1.jpg',
  '../../src/assets/lb2.png',
  '../../src/assets/lb3.jpg'
]
</script>

<template>
  <div class="mainpage-wrapper">
    <div class="header">
      <div class="logo"></div>
      <div class="wenhao"></div>
      <div class="shouye">首  页</div>
      <el-select
        v-model="value"
        class="m-2"
        placeholder="功能"
        size="middle"
        style="width: 100px;height: 8vh;
        color:white;background-color: none; 
        margin-left: 2vw;
        margin-top: 4vh;"
        @change="skip"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <div class="user" @click="router.push('/main/grzx')"></div>
      <div class="welcome">郝碧佘，您好</div>
    </div>
    <el-carousel class="m-pic">
      <el-carousel-item
        v-for="item in lunbo"
        :key="item"
        style="width: 100%!important; height: 80vh!important"
      >
        <img :src="item" alt="" />
      </el-carousel-item>
    </el-carousel>
    <div class="pic-name">项目模拟图</div>
    <div class="logo-biaoyu"></div>
    <div class="biaoyu">
    一款集智能化、三维可视化、自动化于一体的输电线路设计辅助工具，代化的技术手段，将传统的输电线路辅助设计软件趋于企业智能化发展，实现自动化辅助设计，从而加快设计进度、提升设计质量、降低设计成本、减少设计人员劳动强度，为输电工程的设计提供智能、高效、准确的辅助设计工具。
    </div>
    <div class="tedians">
      <div class="t1"></div>
      <div class="t2"></div>
      <div class="t3"></div>
      <div class="t4"></div>
      <div class="t5"></div>
    </div>
    <div class="daorus">
      <div class="d1"></div>
      <div class="d2"></div>
      <div class="d3" @click="router.push('/main/sjgl')"></div>
      <div class="d4" @click="router.push('/main/tzsc')"></div>
      <div class="d5" @click="router.push('/main/sjgl')"></div>
      <div class="d6" @click="router.push('/main/zskgl')"></div>
    </div>
    <div class="wenzis">
      <h2>一、功能介绍</h2>
      <div class="fubiaoti">1.1多源数据融合</div>
      <div class="f-content">
        图新地球电力版支持大体量多源异构数据加载及融合显示，包括实景三维模型（倾斜摄影模型）、正射影像、点云、各类人工模型、矢量数据（KML、CAD、SHP）、照片及全景照片等，在数字孪生环境下真实还原电网三维场景，多维度展示通道线路所处地势地貌、走廊环境，形成电力业务真三维一张图。
      </div>
      <div class="pictwo">
        <img src="../assets/pic1.jpg" alt="" />
        <img src="../assets/pic2.png" alt="" />
      </div>
      <div class="fubiaoti" style="margin-top: 10vh">1.2巡检照片管理</div>
      <div class="f-content">
        针对无人机巡检成果照片，图新地球电力版支持一键照片地图展点、快速归档管理，轻松通过地图查看所有缺陷照片分布，进一步了解杆塔工况、绝缘子导线工况、金具状态、通道状况等问题。
      </div>
      <img src="../assets/pic3.png" alt="" />
      <img src="../assets/pic4.png" alt="" />
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
  </div>
</template>

<style scoped>
* {
  overflow: hidden;
}
.main-wrapper {
  width: 99vw;
  min-height: 100vh;
  overflow: scroll;
  /* padding-bottom: 8vh; */
}
.header {
  width: 100%;
  height: 8vh;
  background-color: rgb(4, 51, 87);
  display: flex;
  align-items: center;
}
.logo {
  height: 97%;
  width: 15vw;
  background: url(../assets/logo-white.png) no-repeat;
  background-size: contain;
  margin-left: 0.5vw;
}
.wenhao {
  height: 4vh;
  width: 4vh;
  background: url(../assets/wenhao.png) no-repeat;
  background-size: contain;
  margin-left: 50vw;
}
.shouye {
  height: 4vh;
  width: 5vw;
  border: 1px solid #e5e5e5;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  font-family:Impact, Charcoal, sans-serif;
  color: white;
  font-weight: 548;
  border-radius: 5px;
  margin-left: 1vw;
  cursor: pointer;
}
.user {
  height: 5vh;
  width: 5vh;
  background: url(../assets/user.png) no-repeat;
  background-size: contain;
  margin-right: 0.2vw;
  margin-left: 5vw;
  cursor: pointer;
}
.welcome {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Times New Roman', Times, serif;
  color: white;
  font-weight: 550;
  margin-left: 1vw;
}
.m-pic {
  width: 70vw;
  height:70vh;
  margin: 0vh auto;
  border: 1px solid #ccc;
  /* background: url(../assets/bgc.jpg) no-repeat;
  background-size: cover; */
}
.m-pic img {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: auto;
}
.pic-name {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 16px;
}
.logo-biaoyu {
  width: 68vw;
  height: 5vh;
  margin: 0 auto;
  background: url(../assets/logo-biaoyu.png) no-repeat;
  background-size: contain;
}
.biaoyu {
  width: 68%;
  margin: 0 auto;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Impact, Charcoal, sans-serif;
  font-size: 18px;
  font-weight: 450;
  line-height: 24px;
}
.tedians {
  width: 70%;
  height: 8vh;
  margin: 3vh auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.tedians div {
  height: 100%;
  width: 22%;
}
.t1 {
  background: url(../assets/t1.png) no-repeat;
  background-size: contain;
}
.t2 {
  background: url(../assets/t2.png) no-repeat;
  background-size: contain;
}
.t3 {
  background: url(../assets/t3.png) no-repeat;
  background-size: contain;
}
.t4 {
  background: url(../assets/t4.png) no-repeat;
  background-size: contain;
}
.t5 {
  background: url(../assets/t5.png) no-repeat;
  background-size: contain;
}
.daorus {
  width: 50%;
  margin: 3vh auto;
  /* margin-right: 5vw; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
.daorus div {
  width: 27%;
  height: 9vh;
  margin-bottom: 2vh;
  cursor: pointer;
}
.d1 {
  background: url(../assets/d1.png) no-repeat;
  background-size: contain;
}
.d2 {
  background: url(../assets/d2.png) no-repeat;
  background-size: contain;
}
.d3 {
  background: url(../assets/d3.png) no-repeat;
  background-size: contain;
}
.d4 {
  background: url(../assets/d4.png) no-repeat;
  background-size: contain;
}
.d5 {
  background: url(../assets/d5.png) no-repeat;
  background-size: contain;
}
.d6 {
  background: url(../assets/d6.png) no-repeat;
  background-size: contain;
}
.wenzis {
  width: 70%;
  position: relative;
  margin: 0 auto;
}
.fubiaoti {
  font-size: 18px;
  margin-top: 1vh;
  font-weight: 551;
  color: rgb(63, 63, 63);
}
.f-content {
  width: 100%;
  font-size: 16px;
  color: rgb(78, 78, 78);
}
.pictwo {
  width: 100%;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.pictwo img {
  height: 100%;
  width: 49.8%;
}
.wenzis > img {
  width: 100%;
  margin-top: 3vh;
}
.footer {
  width: 100%;
  height: 13vh;
  margin-top: 2vh;
  display: flex;
  padding: 0 9vw;
  background-color: rgb(4, 51, 87);
  align-items: center;
  justify-content: space-between;
  letter-spacing: 1.9px;
}
.f-left {
  height: 100%;
  width: 90vw;
  color: white;
  font-size: 13px;
  margin-left: 5vw;
  /* background-color: #ccc; */
  
}
.f-middle {
  height: 100%;
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-left: 2vw;
  margin-right: 2vw;
}
.f-right {
  width: 30%;
  height: 40%;
  background: url(../assets/footer-icons.png) no-repeat;
  background-size: contain;
  /* margin-left: 1vw; */
}
.left-down {
  display: flex;
  align-items: center;
  justify-content: left;
}
.m-left {
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
  width: 6.5vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
}
/* ::v-deep(.m-2 .el-select__wrapper) {
    background-color: none!important;
} */
/* .el-select__wrapper{
    background-color: none!important;
}
.m-2 .el-select__wrapper{
    background-color: none!important;
} */
</style>
