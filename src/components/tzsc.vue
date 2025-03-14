<script setup>
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
</script>

<template>
  <div class="tz-wrapper">
    <!-- <div class="side">
      <div class="avatars"></div>
      <div class="names">郝碧佘</div>
    </div> -->
    <div class="wbwj-head">
      <!-- <div class="head-name">图标生成</div> -->
      <el-input
        style="width: 20vw; margin-left: 45%"
        v-model="input"
        placeholder="请输入"
        :suffix-icon="Search"
      />
      <div class="return"></div>
    </div>
    <div class="tz-flex">
        <div class="tz-items">线路路径图</div>
        <div class="tz-items">杆塔定位图</div>
        <div class="tz-items">导线及地线布置图</div>
        <div class="tz-items">基础设计图</div>
        <div class="tz-items">电气主接线图</div>
        <div class="tz-items">线路平断面图</div>
        <div class="tz-items">杆塔明细表及组装图</div>
        <div class="tz-items">防雷接地装置图纸</div>
        <div class="tz-items">导入</div>
    </div>
  </div>
</template>

<style scoped>
.tz-wrapper{
    width: 100%;
}
.wbwj-head {
  width: 80%;
  height: 8vh;
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
}
.head-name {
  height: 100%;
  font-family: 'Times New Roman', Times, serif;
  font-size: 18px;
  font-weight: 551;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 551;
  margin-left: 3vw;
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
.tz-flex{
    width: 65%;
    height: 65vh;
    margin-left: 18%;
    /* border: 1px solid #ccc; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    
}
.tz-items{
    width: 29%;
    height: 20%;
    background: rgb(206, 231, 250);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: 450;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
}
</style>
