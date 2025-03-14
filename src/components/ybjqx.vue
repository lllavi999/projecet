<script setup>
import { ref } from 'vue'
import { useRouter, useRoute, onBeforeRouteUpdate } from 'vue-router'
let router = useRouter()
let input1 = ref()
let input2 = ref()
let input3 = ref()
let input4 = ref()
let input5 = ref()
let input6 = ref()
</script>

<template>
  <div class="ybj-wrapper">
    <!-- <div class="side">
      <div class="avatars"></div>
      <div class="names">郝碧佘</div>
    </div> -->
    <div class="lsp-flex">
      <div class="lsp-left">
        <div class="left-header">
          <div class="lh-name">耐雷水平及雷击跳闸率计算</div>
          <div class="lh-icon" @click="router.push('/main/sjgl')"></div>
        </div>
        <div class="shujudaoru">数据导入</div>
        <div class="left-three">
          <div style="color: rgba(5, 103, 179, 0.98)">计算模式</div>
          <div>快速估算模式</div>
          <div style="position: relative;z-index: 1;">
            <div
              style="
                height: 50%;
                position: absolute;
                left: 0;
                width: 100%;
                bottom: 0;
                background: rgba(178, 217, 247, 0.64);
                z-index: -1;
              "
            ></div>
            精确计算模式
          </div>
        </div>
        <div class="left-two">
          <div>结果输出</div>
          <div>结果校验</div>
        </div>
      </div>
      <div class="lsp-right">
        <div class="right-top">
          <div style="color: #0984E3;;position: relative;z-index: 1;">
            <div
              style="
                height: 50%;
                position: absolute;
                left: 0;
                width: 100%;
                bottom: 0;
                background: rgba(178, 217, 247, 0.64);
                z-index: -1;
              "
            ></div>
            摇摆角曲线
          </div>
        </div>
        <div class="right-flex">
          <div class="flex-items">
            <div class="item-name">绝缘子串长度：</div>
            <el-input
            v-model="input1"
              placeholder=""
              style="width: 50%; height: 75%;
                border: 1px solid #0984E3;
                border-radius: 5px;"
            />
          </div>
          <div class="flex-items">
            <div class="item-name">风荷载：</div>
            <el-input
              v-model="input2"
              placeholder=""
              style="width: 50%; height: 75%;
              border: 1px solid #0984E3;
              border-radius: 5px;"
            />
          </div>
          <div class="flex-items">
            <div class="item-name">导线张力：</div>
            <el-input
              v-model="input3"
              placeholder=""
              style="width: 50%; height: 75%;
                border: 1px solid #0984E3;
                border-radius: 5px;"
            />
          </div>
          <div class="flex-items">
            <div class="item-name">风阻力：</div>
            <el-input
              v-model="input4"
              placeholder=""
              style="width: 50%; height: 75%;
              border: 1px solid #0984E3;
              border-radius: 5px;"
            />
          </div>
          <div class="flex-items">
            <div class="item-name">与垂直方向夹角：</div>
            <el-input
              v-model="input5"
              placeholder=""
              style="width: 50%; height: 75%;
              border: 1px solid #0984E3;
                border-radius: 5px;"
            />
          </div>
          <div class="flex-items">
            <div class="item-name">迎风面积：</div>
            <el-input
              v-model="input6"
              placeholder=""
              style="width: 50%; height: 75%;
              border: 1px solid #0984E3;
                border-radius: 5px;"
            />
          </div>
        </div>
        <div class="right-top">
          <div style="color: #0984E3;;position: relative;z-index: 1;">
            <div
              style="
                height: 50%;
                position: absolute;
                left: 0;
                width: 100%;
                bottom: 0;
                background: rgba(178, 217, 247, 0.64);
                z-index: -1;
              "
            ></div>
            数据报表
          </div>
        </div>
        <div class="right-bottom">
          <img src="../assets/data.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
.lsp-flex {
  width: 100%;
  height: 80vh;
  padding-bottom: 2vh;
  display: flex;
  align-items: center;
}
.lsp-left {
  height: 100%;
  width: 20%;
  margin-left: 0.5vw;
  margin-right: 2vw;
}
.lsp-right {
  height: 100%;
  width: 55%;
  margin-left: 5vw;
  border: 1px solid #e5e5e5;
  border-radius: 20px;
}
.left-header {
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.lh-name {
  width: 70%;
  font-family: Impact, Charcoal, sans-serif;
  font-size: 20px;
  font-weight: 350;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-left: 2vw;
}
.lh-icon {
  width: 3vh;
  height: 3vh;
  background: url(../assets/return.png) no-repeat;
  background-size: contain;
  cursor: pointer;
  margin-left: 0.5vw;
}
.shujudaoru {
  width: 60%;
  height: 7vh;
  margin: 2vh 5.5vw;
  /* border: 2px solid rgba(9, 132, 227, 1); */
  background-color: rgb(206, 231, 250);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-family: Impact, Charcoal, sans-serif;
  border-radius: 10px;
}
.left-three {
  width: 70%;
  height: 30vh;
  border: 2px solid #e5e5e5;
  margin: 1vw 4.5vw;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.left-three div {
  /* width: 100%; */
  /* height: 7vh; */
  font-size: 18px;
  font-family: Impact, Charcoal, sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 450;
}

.left-three :last-child{
  color: #0984E3;
}
.left-two {
  width: 80%;
  height: 20vh;
  /* border: 2px solid #e5e5e5; */
  font-family: Impact, Charcoal, sans-serif;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin: 2vh 3.5vw;
  align-items: center;
  justify-content: space-around;
}
.left-two div {
  width: 70%;
  height: 6vh;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 2px solid rgba(9, 132, 227, 1); */
  border-radius: 8px;
  color: black;
  background-color: rgb(206, 231, 250);
  margin-bottom: 1vh;
}
.right-top {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 2vw;
  margin-top: 5vh;
}
.right-flex {
  width: 100%;
  height: 24vh;
  padding: 0 2vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 2vh;
}
.flex-items {
  width: 45%;
  height: 30%;
  display: flex;
  align-items: center;
}
.item-name {
  width: 50%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
}
.right-bottom{
  width: 90%;
  margin: 0 auto;
  height: 27vh;
  margin-top: 1vh;
  border:1px solid #e5e5e5;
}
.right-bottom img{
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
</style>
