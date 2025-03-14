<script setup>
import { ref } from 'vue'
import { useRouter, useRoute, onBeforeRouteUpdate } from 'vue-router'
let yiyue = ref('')
let router = useRouter()
</script>
<template>
  <div class="vx-wrapper">
    <div class="logos"></div>
    <div class="biaoyu"></div>
    <div class="Login">
      <div class="head">
        <div class="h-left"></div>
        <div class="h-right">
          <div
            style="color: #3091DB; text-decoration: underline"
          >
            微信登录
          </div>
          <div @click="router.push('/logQQ')">QQ登录</div>
        </div>
      </div>
      <div class="code">二维码</div>
      <div class="vxverify">
        <div class="vx-icon"></div>
        <div class="l-text">微信扫码即可登录</div>
      </div>
      <div class="yiyue">
        <el-checkbox
          v-model="yiyue"
          label="我已阅读并同意《服务协议》和《隐私协议》"
          size="small"
        />
      </div>
      <div class="l-ways">
        <div class="qq" @click="router.push('/logQQ')">
          <div class="qq-icon"></div>
          <div class="l-text">QQ登录</div>
        </div>
        <div class="vx" @click="router.push('/log')">
          <!-- <div class="vx-icon"></div> -->
          <div class="l-text">返回登录</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
*{
  overflow: hidden;
}
.vx-wrapper {
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
  height: 11vh;
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
  margin-left: 1vw;
  font-family: Impact, Charcoal, sans-serif;
}
.h-right div {
  cursor: pointer;
}
.code {
  width: 10vw;
  height: 10vw;
  margin: 3vh auto;
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
  height: 7vh;
  width: 60%;
  margin: 0 auto;
  /* border: 1px solid #848383; */
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Impact, Charcoal, sans-serif;
  font-weight: 551;
}
.vx-icon {
  height: 2vh;
  width: 2vh;
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
  border: 2px solid #0984E3;
  border-radius: 20px;
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
  border: 2px solid #0984E3;
  border-radius: 20px;
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
.logos{
    width: 27vw;
    height: 11.3vw;
    background: url(../assets/logo.png) no-repeat;
    background-size: contain;
    position: absolute;
    left: 10vw;
    top: 20vh;
}
.biaoyu{
    position: absolute;
    height: 14vw;
    width: 28vw;
    background: url(../assets/biaoyu.png) no-repeat;
    background-size: contain;
    left: 10vw;
    top: 40vh;
}
</style>
