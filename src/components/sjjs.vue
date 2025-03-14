<script setup>
import { ref } from 'vue'
let input1 = ref()
let input2 = ref()
let input3 = ref()
</script>

<template>
  <div class="sjjs-wrapper">
    <div class="side">
      <div class="avatars"></div>
      <div class="names">郝碧佘</div>
    </div>
    <div class="top">数据计算</div>
    <div class="sjjs-three">
        <div>
            <el-input v-model="input1" style="width: 100%;height: 100%;" placeholder="选择杆塔类型" />
            <div class="icons1" ></div>
        </div>
        <div>
            <el-input v-model="input2" style="width: 100%;height: 100%;" placeholder="选择导线类型" />
            <div class="icons2" ></div>
        </div>
        <div>
            <el-input v-model="input3" style="width: 100%;height: 100%;" placeholder="选择地理天气类型" />
            <div class="icons3" ></div>
        </div>
    </div>
    <div class="sjjs-flex">
        <div class="flex-item">导线悬挂点应力校验</div>
        <div class="flex-item">跳线间隙校验</div>
        <div class="flex-item">线间距离计算校验</div>
        <div class="flex-item">耐雷水平及雷击跳闸率计算</div>
        <div class="flex-item">摇摆角曲线计算</div>
    </div>
  </div>
</template>

<style scoped>
.sjjs-wrapper {
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
  font-family: 'Times New Roman', Times, serif;
  font-weight: 551;
  display: flex;
  align-items: center;
  justify-self: center;
  margin-top: 3vh;
  line-height: 4vh;
}
.top {
  width: 100%;
  height: 8vh;
  display: flex;
  align-items: center;
  padding-left: 2vw;
  font-size: 18px;
  font-weight: 551;
}
.sjjs-three {
  width: 80%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.sjjs-three>div{
    width: 28%;
    height: 70%;
}
.icons1{
    height: 4vh;
    width: 4vh;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 1vw;
    background: url(../assets/ly.png) no-repeat;
    background-size: contain;
}
.icons2{
    height: 4vh;
    width: 4vh;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 1vw;
    background: url(../assets/jrdz.png) no-repeat;
    background-size: contain;
}
.icons3{
    height: 4vh;
    width: 4vh;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 1vw;
    background: url(../assets/xht.png) no-repeat;
    background-size: contain;
}
.sjjs-flex{
    width: 80%;
    height: 33vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
}
.flex-item{
    background: rgb(206, 231, 250);
    width: 29%;
    height:13vh;
    margin-top: 3vh;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
