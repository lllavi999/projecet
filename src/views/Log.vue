<script setup>
import { ref } from 'vue'
import { useRouter, useRoute, onBeforeRouteUpdate } from 'vue-router'
let yiyue = ref('')
let router = useRouter()
</script>
<template>
  <div class="log-wrapper">
    <div class="logos"></div>
    <div class="biaoyu"></div>
    <div class="Login">
      <div class="head">
        <div class="h-left"></div>
        <!-- <div class="h-right">
          <div
            style="color: rgba(128, 128, 128, 1); text-decoration: underline"
          >
            微信登录
          </div>
          <div @click="router.push('/logQQ')">QQ登录</div>
        </div> -->
      </div>
      <div class="user-icon"></div>
      <div class="phone-num">195****2810</div>
      <div class="l-put">
        <div class="v-code">
          <div class="lijizhuce">
            <el-button
              type="primary"
              style="
                height: 100%;
                width: 100%;
                background-color: rgba(9, 132, 227, 0.98);
                font-size: 16px;
                border-radius: 20px;
              "
              @click="router.push('/mainPage')"
              >登录</el-button
            >
          </div>
        </div>
        <div class="v-code">
          <div class="lijizhuce">
            <el-button style="height: 100%; width: 100%;;
                font-size: 16px;
                border-radius: 20px;"
            @click="router.push('/logPhone')">其他方式登录</el-button
            >
          </div>
        </div>
        <div class="yiyue">
          <el-checkbox
            v-model="yiyue"
            label="我已阅读并同意《服务协议》和《隐私协议》"
            size="small"
          />
        </div>
        <div class="another">
          <div class="yyzhanghao" @click="router.push('/logVX')">
            其他账号登录
          </div>
          <div class="qwdenglu" @click="router.push('/')">免费注册</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
*{
  overflow: hidden;
}
.log-wrapper {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    180deg,
    rgba(46, 144, 242, 1) 0%,
    rgba(101, 174, 252, 1) 20.19%,
    rgba(255, 255, 255, 1) 100%
  );
}
.Login {
  width: 28%;
  height: 65%;
  margin-top: 6%;
  margin-left: 58%;
  border: 3px solid #0984E3;
  background-color: white;
  border-radius: 10%;
}
.head {
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: end;
}
.h-left {
  /* border: 2px solid #434343; */
  height: 80%;
  width: 11vw;
  margin-left: 1vw;
  border-radius: 10px;
  background: url(../assets/logo.png) no-repeat;
  background-size: 100% 100%;
}
.h-right {
  width: 16vw;
  height: 50%;
  display: flex;
  align-items: center;
  padding-bottom: 2vh;
  justify-content: space-around;
  margin-left: 4vw;
  font-family: Impact, Charcoal, sans-serif;
}
.h-right div {
  cursor: pointer;
}
.code {
  width: 10vw;
  height: 10vw;
  margin: 6vh auto;
  /* 以下可以用来插入二维码 */
  /* background: url(../assets/twocode.png) no-repeat;
  background-size: contain; */
  border: 2px solid rgb(53, 52, 52);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #848383;
}
.vxverify {
  height: 10vh;
  width: 60%;
  margin: 0 auto;
  border: 1px solid #848383;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Impact, Charcoal, sans-serif;
  font-weight: 551;
}
.vx-icon {
  height: 5vh;
  width: 5vh;
  background: url(../assets/vx.png) no-repeat;
  background-size: contain;
  margin-right: 0.5vw;
}
.l-text {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 0.5vw;
}
.yiyue {
  height: 3vh;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 2vh;
}
.l-ways {
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 2vh;
}
.vx {
  height: 80%;
  width: 35%;
  border: 2px solid #676767;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Impact, Charcoal, sans-serif;
  font-weight: 551;
  cursor: pointer;
}
.vx-icon {
  height: 5vh;
  width: 5vh;
  background: url(../assets/vx.png) no-repeat;
  background-size: contain;
}
.l-text {
  display: flex;
  align-items: center;
  justify-content: center;
}
.qq {
  height: 80%;
  width: 35%;
  border: 2px solid #676767;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Impact, Charcoal, sans-serif;
  font-weight: 551;
  cursor: pointer;
}
.qq-icon {
  height: 5vh;
  width: 5vh;
  background: url(../assets/QQ.png) no-repeat;
  background-size: contain;
}
.logos {
  width: 50vw;
    height: 11.3vw;
    background: url(../assets/logo.png) no-repeat;
    background-size: contain;
    position: absolute;
    left: 10vw;
    top: 15vh;
    margin-left: 2%;
}
.biaoyu {
  position: absolute;
    height: 14vw;
    width: 50vw;
    background: url(../assets/biaoyu.png) no-repeat;
    background-size: contain;
    left: 10vw;
    top: 35vh;
    margin-right: 20px;
    margin-left: 1%;
}
.l-put {
  width: 100%;
}
.v-code {
  width: 100%;
  padding: 0 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.el-input__wrapper {
  border-radius: 3vh !important;
}
.lijizhuce {
  width: 100%;
  height: 5vh;
  margin: 2vh auto;
}
.another {
  height: 5vh;
  width: 70%;
  margin: 6vh auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.yyzhanghao {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Impact, Charcoal, sans-serif;
  font-size: 15px;
  font-weight: 551;
  cursor: pointer;
}
.qwdenglu {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Impact, Charcoal, sans-serif;
  font-size: 15px;
  font-weight: 551;
  cursor: pointer;
}
.phone-num {
  width: 70%;
  height: 8vh;
  margin: 1vh auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Impact, Charcoal, sans-serif;
  font-size: 28px;
  font-weight: 551;
  letter-spacing: 10px;
}
</style>
