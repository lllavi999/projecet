<script setup>
import { ref } from 'vue'
import { useRouter, useRoute, onBeforeRouteUpdate } from 'vue-router'
let router = useRouter()
</script>

<template>
  <div class="xt-wrapper">
    <div class="side">
      <div class="avatars"></div>
      <div class="names">郝碧佘</div>
    </div>
    <div class="xt-flex">
      <div class="xt-left">
        <div class="xtl-top">
          <div class="top-title" @click="router.push('/main/sjgl')">数据库配置</div>
          <div class="top-flex">
            <div class="tf-item">
              <div class="item-icon dd1"></div>
              <div class="item-title">数据导入</div>
            </div>
            <div class="tf-item">
              <div class="item-icon dd2"></div>
              <div class="item-title">数据导入</div>
            </div>
            <div class="tf-item">
              <div class="item-icon dd3"></div>
              <div class="item-title">数据导入</div>
            </div>
            <div class="tf-item">
              <div class="item-icon dd4"></div>
              <div class="item-title">数据导入</div>
            </div>
          </div>
        </div>
        <div class="xtl-bottom">
            <div class="top-title">网络配置</div>
            <div class="bottom-medium">网络连接：MTLC-1234    180K/s</div>
            <div class="bottom-flex">
                <div class="bl-item">网络与共享中心</div>
                <div class="bl-item">显示可使用网络</div>
                <div class="bl-item">提供反馈</div>
                <div class="bl-item">获取网络帮助</div>
            </div>
        </div>
      </div>
      <div class="xt-right">
        <div class="xtl-top">
            <div class="top-title">数据备份</div>
            <div class="data-items">从数据库备份</div>
            <div class="data-items">从项目备份</div>
            <div class="data-items">从外部文件备份</div>
        </div>
        <div class="xtl-bottom">
            <div class="top-title">一键恢复</div>
            <div class="bl-item ant">一键恢复</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.xt-wrapper {
  width: 100%;
  height: 100%;
}
.xt-flex {
  width: 100%;
  height: 100%;
  display: flex;
  padding: 1vh 2vw;
}
.xt-left {
  height: 100%;
  width: 30%;
  /* border: 1px solid #ccc; */
  margin-left: 1vw;
}
.xt-right {
  height: 100%;
  width: 30%;
  /* border: 1px solid #ccc; */
  margin-left: 4vw;
}
.xtl-top {
  width: 90%;
  height: 42%;
  border: 2px solid #e5e5e5;
  border-radius: 20px;
  margin: 2vh 15vw;
}
.xtl-bottom {
  width: 90%;
  height: 42%;
  border: 2px solid #e5e5e5;
  border-radius: 20px;
  margin: 3vh 15vw;
}
.top-title {
  width: 100%;
  height: 7vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 550;
  color: rgba(5, 103, 179, 0.98);
  cursor: pointer;
}
.top-flex {
  width: 100%;
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
}
.tf-item {
  height: 48%;
  width: 35%;
  border: 2px solid rgba(5, 103, 179, 0.5);
  border-radius: 8px;
  margin-top: 1vh;
}
.item-title {
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(5, 103, 179, 0.98);
  font-size: 14px;
}
.item-icon {
  width: 30%;
  height: 50%;
  margin: 2px auto;
}
.dd1 {
  background: url(../assets/dd1.png) no-repeat;
  background-size: contain;
}
.dd2 {
  background: url(../assets/dd2.png) no-repeat;
  background-size: contain;
}
.dd3 {
  background: url(../assets/dd3.png) no-repeat;
  background-size: contain;
}
.dd4 {
  background: url(../assets/dd4.png) no-repeat;
  background-size: contain;
}
.bottom-medium{
    width: 66%;
    height: 7vh;
    margin: 0.5vh auto;
    border: 2px solid rgba(5, 103, 179, 0.5);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 551;
}
.bottom-flex{
    position: relative;
    width: 90%;
    margin: 0 auto;
    height: 14vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
}
.bl-item{
    width: 40%;
    height: 30%;
    /* margin-top: 1vh; */
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 7px;
    background: rgb(206, 231, 250);
    color: rgba(5, 103, 179, 0.98);
    font-size: 14px;
}
.data-items{
    width: 75%;
    height: 5vh;
    margin: 2vh auto;
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    background: rgb(206, 231, 250);
    font-size: 12px;
}
.ant{
    margin: 1vh auto;
    color: black;
    font-size: 12px;
    width: 60%;
    height: 6vh;
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
