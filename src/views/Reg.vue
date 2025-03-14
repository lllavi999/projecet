<script setup>
import { ref } from 'vue'
import { useRouter, useRoute, onBeforeRouteUpdate } from 'vue-router'
let yiyue = ref('')
let router = useRouter()
</script>

<template>
  <div class="reg-wrapper">
    <div class="logos">

    </div>
    <div class="biaoyu">
    </div>
    <div class="Login">
      <div class="head">
        <div class="h-left"></div>
        <div class="h-right">注册新账号</div>
      </div>
      <div class="l-ways">
        <div class="vx" @click="router.push('/logvx')">
          <div class="vx-icon"></div>
          <div class="l-text">微信登录</div>
        </div>
        <div class="qq" @click="router.push('/logQQ')">
          <div class="qq-icon"></div>
          <div class="l-text">QQ登录</div>
        </div>
      </div>
      <div class="huo">
        <div class="H-left"></div>
        <div class="h-text"> 或 </div>
        <div class="H-left"></div>
      </div>
      <div class="l-put">
        <el-input
          style="width: 22vw;height: 5vh; margin: 2vh 10%;font-size: 1.8vh;border-radius: 20px;background-color: black;"
          v-model="input"
          placeholder="请输入号码"
        />
        <div class="v-code">
          <el-input
            style="width: 15vw;font-size: 1.8vh;height: 5vh;
            border-radius: 20px;
            background-color: black;"
            v-model="input"
            placeholder="请输入验证码"
          />
          <el-button
          style="width: 8vw;height: 5vh;border-radius: 10px;
          margin-left: 1vw;font-size: 1.9vh;"
          >
          获取验证码</el-button>
        </div>
      </div>
      <div class="yiyue">
        <el-checkbox
          style="font-size: 0.5vw"
          v-model="yiyue"
          label="我已阅读并同意《服务协议》和《隐私协议》"
          size="small"
        />
      </div>
      <div class="lijizhuce">
        <el-button
          type="primary"
          style="
            height: 100%;
            width: 100%;
            background-color: rgba(9, 132, 227, 0.98);
            font-size: 1vw;
          "
          round
          >立即注册</el-button
        >
      </div>
      <div class="another">
        <div class="yyzhanghao">已有账号？</div>
        <div class="qwdenglu" @click="router.push('/log')">前往登录</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
*{
  overflow: hidden;
}
.reg-wrapper {
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
  border-radius: 10%;
  /* background: linear-gradient(
    180deg,
    rgba(226, 234, 242, 1) 0%,
    rgba(159, 198, 240, 1) 100%
  ); */
  background-color: white;
}
.logos{
    width: 50vw;
    height: 11.3vw;
    background: url(../assets/logo.png) no-repeat;
    background-size: contain;
    position: absolute;
    left: 10vw;
    top: 15vh;
    margin-left: 2%;
}
.biaoyu{
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
  width: 8vw;
  height: 70%;
  opacity: 1;
  /** 文本1 */
  font-size: 2vh;
  font-weight: 600;
  color: rgba(0, 0, 0, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10%;
  font-family: Impact, Charcoal, sans-serif;
}
.l-ways {
  width: 28vw;
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 2vh;
}
.vx {
  height: 80%;
  width: 35%;
  border: 0.2vw solid #0984E3;
  border-radius:8vw;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Impact, Charcoal, sans-serif;
  font-weight: 550;
  cursor: pointer;
  font-size: 2vh;
}
.vx-icon {
  height: 5vh;
  width: 5vh;
  background: url(../assets/vx.png) no-repeat;
  margin-right: 10%;
  background-size: contain;
}
.l-text {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Impact, Charcoal, sans-serif;
}
.qq {
  height: 80%;
  width: 35%;
  border: 0.2vw solid #0984E3;
  border-radius:8vw;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Impact, Charcoal, sans-serif;
  font-weight: 550;
  cursor: pointer;
  font-size: 2vh;
}
.qq-icon {
  height: 5vh;
  width: 5vh;
  background: url(../assets/QQ.png) no-repeat;
  background-size: contain;
  margin-right: 10%;
}
.huo {
  height: 4vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.H-left {
  width: 40%;
  height: 1px;
  border-bottom: 1.5px solid black;
}
.h-text {
  font-family:Impact, Charcoal, sans-serif;
  font-size: 2vh;
  font-weight: 551;
  display: flex;
  align-items: center;
  justify-content: center;
}
.l-put {
  width: 100%;
}
.v-code {
  width: 28vw;
  height: 5vh;
  padding: 0 11%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.yiyue {
  height: 3vh;
  display: flex;
  width: 28vw;
  align-items: center;
  justify-content: center;
  margin-top: 2vh;
}
.lijizhuce {
  width: 80%;
  height: 6vh;
  margin: 2vh auto;
}
.another {
  height: 5vh;
  width: 70%;
  margin: 10px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.yyzhanghao {
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(128, 128, 128, 0.7);
  font-family: Impact, Charcoal, sans-serif;
  font-size: 14px;
  font-weight: 551;
  cursor: pointer;
}
.qwdenglu {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Impact, Charcoal, sans-serif;
  font-size: 14px;
  font-weight: 551;
  cursor: pointer;
}
</style>
