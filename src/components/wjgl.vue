<script setup>
import { ref } from 'vue'
import { Search } from "@element-plus/icons-vue";
import { useRouter, useRoute, onBeforeRouteUpdate } from 'vue-router'
let router = useRouter()
</script>

<template>
  <div class="wjgl-wrapper">
    <!-- <div class="side">
      <div class="avatars"></div>
      <div class="names">郝碧佘</div>
    </div> -->
    <div class="wbwj-head">
      <!-- <div class="head-name">外部知识库</div> -->
      <el-input
        style="width: 20vw; height: 5vh;margin-left: 23vw;align-items: center;"
        v-model="input"
        placeholder="请输入"
        :suffix-icon="Search"
      />
      <div class="return" @click="router.push('/main/wbwjk')"></div>
    </div>
    <div class="wbwj-flex">
      <div class="wbwj-left">
        <div class="left-items">地理信息数据</div>
        <div class="left-items">气象数据文件</div>
        <div class="left-items">典型设计案例</div>
        <div class="left-items">设备参数文件</div>
      </div>
      <div class="wbwj-middle">
        <div class="middle-items">
          <div class="m-left">2月3月雷电流分析</div>
          <div class="m-middle"><el-button type="primary" 
            style="background: rgb(206, 231, 250);
            color: black;
            border-color:rgb(206, 231, 250) ;
            border-radius: 40px;"
            >下载</el-button></div>
          <div class="m-right">. . .</div>
        </div>
        <div class="middle-items">
          <div class="m-left">DL/T 5513-2018导线基本信息</div>
          <div class="m-middle"><el-button type="primary" 
            style="background: rgb(206, 231, 250);
            color: black;
            border-color:rgb(206, 231, 250) ;
            border-radius: 40px;"
            >下载</el-button></div>
          <div class="m-right">. . .</div>
        </div>
        <div class="middle-items">
          <div class="m-left">2021年M市输电线路设计图</div>
          <div class="m-middle"><el-button type="primary" 
            style="background: rgb(206, 231, 250);
            color: black;
            border-color:rgb(206, 231, 250) ;
            border-radius: 40px;">
            下载</el-button></div>
          <div class="m-right">. . .</div>
        </div>
        <el-button
          type="primary"
          style="position: absolute; bottom: 4vh; right: 3vw;
          background: rgb(206, 231, 250);
          color: black;
          border-color:rgb(206, 231, 250) ;
          border-radius: 40px;
          font-weight: 450;"
          >更多文件</el-button
        >
      </div>
      <div class="wbwj-right">
        <div class="r-top">DL/T 5513-2018导线基...</div>
        <div class="yilan" 
        style="
        font-size: 15px;
        padding-left: 0.4vw;
        color:#0984E3 ;"
        >文件预览:</div>
        <div class="r-bottom"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wjgl-warpper {
  width: 100%;
}
.side {
  width: 5vw;
  height: 70vh;
  position: fixed;
  right: 0;
  top: 11vh;
}
.avatars {
  width: 3vw;
  height: 3vw;
  background: url(../assets/user.png) no-repeat;
  background-size: contain;
  margin: 0 auto;
}
.names {
  width: 1vw;
  margin: 0 auto;
  font-size: 18px;
  font-family: Impact, Charcoal, sans-serif;
  font-weight: 551;
  display: flex;
  align-items: center;
  justify-self: center;
  margin-top: 3vh;
  line-height: 4vh;
}
.wbwj-head {
  width: 100%;
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2vw;
}
.head-name {
  height: 100%;
  font-family: Impact, Charcoal, sans-serif;
  font-size: 18px;
  font-weight: 551;
  display: flex;
  align-items: center;
  justify-content: center;
}
.return {
  height: 3vh;
  width: 3vh;
  background: url(../assets/return.png) no-repeat;
  background-size: contain;
  cursor: pointer;
  /* align-items: end; */
  margin-right: 15vw;
}
.wbwj-flex {
  width: 80%;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* border: 1px solid #ccc; */
  /* padding: 0 2vw; */
  margin:2vh 6vw
}
.wbwj-left {
  width: 15%;
  height: 100%;
}
.wbwj-middle {
  width: 50%;
  height: 100%;
  border: 2px solid #0984E3;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.15);
}
.left-items {
  background: rgb(206, 231, 250);
  width: 88%;
  height: 7vh;
  margin: 4vh auto;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  font-weight: 551;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
}
.middle-items {
  width: 100%;
  height: 8vh;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgb(26, 26, 26);
  width: 96%;
  margin: 0 auto;
}
.m-left {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  font-weight: 551;
  flex: 7;
}
.m-middle {
  height: 100%;
  flex: 1.5;
  display: flex;
  align-items: center;
  justify-content: center;
}
.m-right {
  height: 100%;
  flex: 1.5;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(9, 132, 227, 1);
  font-size: 20px;
}
.wbwj-right {
  width: 25%;
  height: 100%;
  border: 2px solid rgb(9, 123, 227);
  border-radius: 8px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.15);
}
.r-top{
  width: 100%;
  font-size: 17px;
  font-weight: 551;
  padding-right: 1vw;
  padding-left: 0.5vw;
  margin-top: 2vh;
}
.r-bottom{
  width: 70%;
  height: 80%;
  margin: 4vh auto;
  background: url(../assets/jxx.png) no-repeat;
  background-size: contain;
}
</style>
