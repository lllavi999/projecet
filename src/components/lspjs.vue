<script setup>
import { ref } from 'vue'
import { useRouter, useRoute, onBeforeRouteUpdate } from 'vue-router'
let router = useRouter()
</script>

<template>
  <div class="lsp-wrapper">
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
          <div style="position: relative;z-index: 5;">
            <div
            style="
                height: 50%;
                position: absolute;
                top: 50%;
                left: 0;
                width: 100%;
                bottom: 0;
                z-index: -1;
                background: rgba(178, 217, 247, 1);
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
        <div class="right-left">
          <div class="lr-head">
            <div style="position: relative;z-index: 5;">
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
              耐雷水平计算
            </div>
          </div>
          <div class="lr-four">
            <div>有避雷模式</div>
            <div>雷击导线</div>
          </div>
          <div class="lr-four">
            <div style="color: #0984E3;position: relative;z-index: 1;">
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
              无避雷模式
            </div>
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
              雷击杆塔
            </div>
          </div>
          <div class="lr-bottom">
            <div class="lrb-head">雷电流分析</div>
            <div class="lrb-items">
              <div class="lrb-name">雷暴天数：</div>
              <div class="lrb-ipt">
                <el-input
                  style="width: 40vw; height: 100%"
                  v-model="input"
                  placeholder=""
                />
              </div>
            </div>
            <div class="lrb-items">
              <div class="lrb-name">雷电上升率：</div>
              <div class="lrb-ipt">
                <el-input
                  style="width: 40vw; height: 100%"
                  v-model="input"
                  placeholder=""
                />
              </div>
            </div>
            <div class="lrb-items">
              <div class="lrb-name">电流幅值：</div>
              <div class="lrb-ipt">
                <el-input
                  style="width: 40vw; height: 100%"
                  v-model="input"
                  placeholder=""
                />
              </div>
            </div>
            <div class="lrb-items">
              <div class="lrb-name">杆塔电感：</div>
              <div class="lrb-ipt">
                <el-input
                  style="width: 40vw; height: 100%"
                  v-model="input"
                  placeholder=""
                />
              </div>
            </div>
            <div class="lrb-items">
              <div class="lrb-name">杆塔冲击接地电阻：</div>
              <div class="lrb-ipt">
                <el-input
                  style="width: 40vw; height: 100%"
                  v-model="input"
                  placeholder=""
                />
              </div>
            </div>
          </div>
        </div>
        <div class="right-right">
          <div class="lr-head">
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
            雷击跳闸率计算
            </div>
          </div>
          <div class="llb">
            <div class="lrb-head">建弧率计算</div>
            <div class="lrb-items">
              <div class="lrb-name">建弧率：</div>
              <div class="lrb-ipt">
                <el-input
                  style="width: 40vw; height: 100%"
                  v-model="input"
                  placeholder=""
                />
              </div>
            </div>
            <div class="lrb-items">
              <div class="lrb-name">平均电场强度：</div>
              <div class="lrb-ipt">
                <el-input
                  style="width: 40vw; height: 100%"
                  v-model="input"
                  placeholder=""
                />
              </div>
            </div>
            <div class="lrb-items">
              <div class="lrb-name">杆塔高度：</div>
              <div class="lrb-ipt">
                <el-input
                  style="width: 40vw; height: 100%"
                  v-model="input"
                  placeholder=""
                />
              </div>
            </div>
          </div>
          <div class="llb">
            <div class="lrb-head">跳闸率计算</div>
            <div class="lrb-items">
              <div class="lrb-name">避雷线距离：</div>
              <div class="lrb-ipt">
                <el-input
                  style="width: 40vw; height: 100%"
                  v-model="input"
                  placeholder=""
                />
              </div>
            </div>
            <div class="lrb-items">
              <div class="lrb-name">避雷线高度：</div>
              <div class="lrb-ipt">
                <el-input
                  style="width: 40vw; height: 100%"
                  v-model="input"
                  placeholder=""
                />
              </div>
            </div>
            <div class="lrb-items">
              <div class="lrb-name">杆塔接地电阻：</div>
              <div class="lrb-ipt">
                <el-input
                  style="width: 40vw; height: 100%"
                  v-model="input"
                  placeholder=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.lsp-wrapper {
  width: 100%;
  padding: 0 3%;
}
.lsp-flex {
  width: 100%;
  height: 74vh;
  padding-bottom: 2vh;
  display: flex;
  align-items: center;
}
.lsp-left {
  height: 100%;
  width: 20%;
}
.lsp-right {
  height: 100%;
  width: 50vw;
  margin-left: 5vw;
  /* border: 1px solid #ccc; */
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.left-header {
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.lh-name {
  width: 65%;
  font-family: Impact, Charcoal, sans-serif;
  font-size: 20px;
  font-weight:350;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.lh-icon {
  width: 3vh;
  height: 3vh;
  background: url(../assets/return.png) no-repeat;
  background-size: contain;
  cursor: pointer;
  margin-left: 3vw;
}
.shujudaoru {
  width: 60%;
  height: 7vh;
  margin: 2vh auto;
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
  margin: 0 auto;
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
  margin: 2vh auto;
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
.right-left {
  width: 45%;
  height: 100%;
}
.right-right {
  width: 45%;
  height: 100%;
  margin-left: 5vw;
}
.lr-head {
  font-family: Impact, Charcoal, sans-serif;
  font-size: 20px;
  font-weight: 551;
  position: relative;
  display: flex;
  margin: 1vh;
  align-items: center;
  justify-content: center;
}
.lr-four {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 98%;
  margin: 1vh auto;
  font-family: Impact, Charcoal, sans-serif;
  font-size: 18px;
  font-weight: 551;
}
.lr-bottom {
  width: 95%;
  height: 50vh;
  margin: 3.5vh auto;
  border: 2px solid #e5e5e5;
  border-radius: 8px;
  border-radius: 20px;
}
.lrb-head {
  font-family: Impact, Charcoal, sans-serif;
  font-size: 16px;
  font-weight: 551;
  color: #0984E3;
  display: flex;
  align-items: center;
  justify-content: center;
}
.lrb-items {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4vh;
  padding: 0 1vw;
  margin-top: 3.3vh;
  margin-bottom: 3.3vh;
}
.lrb-name {
  width: 44%;
  height: 100%;
}
.lrb-ipt {
  width: 56%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #0984E3;
  border-radius: 5px;
}
.llb {
  width: 95%;
  height: 29vh;
  margin: 2vh auto;
  border: 2px solid #e5e5e5;
  border-radius: 20px;
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
