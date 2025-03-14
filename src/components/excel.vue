<script setup>
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
import { useRouter, useRoute, onBeforeRouteUpdate } from 'vue-router'
let router = useRouter()
</script>

<template>
  <div class="excel-wrapper">
    <!-- <div class="side">
      <div class="avatars"></div>
      <div class="names">郝碧佘</div>
    </div> -->
    <div class="excel-flex">
      <div class="excel-left">
        <el-input
          v-model="input"
          placeholder="请输入"
          :suffix-icon="Search"
          style="width: 80%; margin-top: 2.5vh; margin-left: 10%"
        />
        <div class="left-items" style="margin-top: 5vh">地理信息数据</div>
        <div class="left-items">气象数据文件</div>
        <div class="left-items">典型设计案例</div>
        <div class="left-items">设备参数文件</div>
      </div>
      <div class="excel-right">
        <div class="right-top">
          
          <div class="right-items">文件管理</div>
          <div class="right-items">权限管理</div>
          <div class="right-items">帮助</div>
          <div class="return" @click="router.push('/main/zskgl')"></div>
        </div>
        <div class="right-bottom">
            <div class="rb-item">
                <div class="rb-top">
                  PD6-2-14常用导线弧垂表</div>
                <div class="rb-bottom">
                    <img src="../assets/last2.png" alt="">
                </div>
            </div>
            <div class="rb-item" style="margin-top: 2vh;">
                <div class="rb-top">杆塔明细表</div>
                <div class="rb-bottom">
                    <img src="../assets/last1.png" alt="">
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.excel-wrapper {
  width: 100%;
}
.excel-flex {
  width: 100%;
  height: 70vh;
  /* border: 1px solid #554b4b; */
  display: flex;
  align-items: center;
  padding: 0 1vw;
}
.excel-left {
  height: 100%;
  width: 20%;
  /* border: 2px solid rgba(9, 132, 227, 1); */
  border-radius: 8px;
}
.left-items {
  background-color: rgb(206, 231, 250);
  border-radius: 10px;
  font-size: 16px;
  font-weight: 551;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70%;
  height: 7vh;
  margin: 4vh auto;
}
.excel-right {
  height: 100%;
  width: 60%;
  margin-left: 2.5vw;
}
.right-top {
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left:1px;
}
.right-items {
  background-color: rgb(206, 231, 250);
  font-size: 16px;
  border-radius: 10px;
  font-weight: 551;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 7vh;
  width: 20%;
  margin-left: 2vw;
}
.return {
  width: 3vh;
  height: 3vh;
  background: url(../assets/return.png) no-repeat;
  background-size: contain;
  cursor: pointer;
  margin-top: 1vh;
}
.right-bottom {
  width: 100%;
  height: 70vh;
  border: 2px solid rgba(9, 132, 227, 1);
  border-radius: 8px;
}
.rb-item{
    width: 100%;
    height: 46%;
}
.rb-top{
    width: 100%;
    height: 5vh;
    display: flex;
    align-items: center;
    padding-left: 1vw;
}
.rb-bottom{
    width: 95%;
    height: 25vh;
    margin: 0 auto;
}
.rb-bottom img{
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
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
</style>
