<script setup>
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
let inpur = ref('')
import { useRouter, useRoute, onBeforeRouteUpdate } from 'vue-router'
let router = useRouter()
</script>

<template>
  <div class="wbwj-wrapper">
    <!-- <div class="side">
      <div class="avatars"></div>
      <div class="names">郝碧佘</div>
    </div> -->
    <div class="wbwj-head">
      <!-- <div class="head-name">外部知识库</div> -->
      <el-input
        style="width: 20vw; margin-left: 25vw"
        v-model="input"
        placeholder="请输入"
        :suffix-icon="Search"
      />
      <div class="return" @click="router.push('/main/zskgl')"></div>
    </div>
    <div class="wbwj-four">
      <div class="four-item" @click="router.push('/main/wjgl')">文件管理</div>
      <div class="four-item">权限管理</div>
      <div class="four-item">系统设置</div>
      <div class="four-item">帮助</div>
    </div>
    <div class="wbwj-biaoge">
      <table>
        <tr class="trs">
          <th class="blue">文件名</th>
          <th class="green">类型</th>
        </tr>
        <tr class="trs">
          <td>2月3月雷电流分析</td>
          <td>气象</td>
        </tr>
        <tr class="trs">
          <td>DL/T 5513-2018导线基本信息</td>
          <td>设备</td>
        </tr>
        <tr class="trs">
          <td>2021年M市输电线路设计图</td>
          <td>案例</td>
        </tr>
        <tr class="trs">
          <td></td>
          <td></td>
        </tr>
        <tr class="trs">
          <td></td>
          <td></td>
        </tr>
        <tr class="trs">
          <td></td>
          <td></td>
        </tr>
      </table>
      <div class="wbwj-biaoger">
        <div class="biaoger-items"><div>气象信息文件</div></div>
        <div class="biaoger-items"><div>地理信息文件</div></div>
        <div class="biaoger-items"><div>设备信息文件</div></div>
        <div class="biaoger-items"><div>案例信息文件</div></div>
      </div>
    </div>
    <div class="bottoms">
      <div><el-button type="primary"
        style="position: absolute; bottom: 4vh; right: 3vw;
          background: rgb(206, 231, 250);
          color: black;
          border-color:rgb(206, 231, 250) ;
          border-radius: 40px;
          font-weight: 450;"
        >更多文件</el-button></div>
      <div><el-button type="primary"
        style="position: absolute; bottom: 4vh; right: 3vw;
          background: rgb(206, 231, 250);
          color: black;
          border-color:rgb(206, 231, 250) ;
          border-radius: 40px;
          font-weight: 450;"
        >更多类型</el-button></div>
    </div>
  </div>
</template>

<style scoped>
.wbwj-wrapper {
  width: 100%;
  padding: 0 3%;
}
.wbwj-head {
  width: 80%;
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.head-name {
  height: 100%;
  font-family: Impact, Charcoal, sans-serif;
  font-size: 18px;
  font-weight: 551;
}
.return {
  height: 3vh;
  width: 3vh;
  background: url(../assets/return.png) no-repeat;
  background-size: contain;
  cursor: pointer;
}
.wbwj-four {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 8vh;
  margin-top: 10px;
}
.four-item {
  height: 100%;
  width: 20%;
  background: rgb(206, 231, 250);
  font-size: 18px;
  font-family: Impact, Charcoal, sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  font-weight: 551;
  cursor: pointer;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
}
.wbwj-biaoge {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 70vh;
  border-radius: 20px;
}
table {
  width: 50%;
  height: 80%;
  border-collapse: collapse;
  margin-top: 1vh;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.15);
}
table .trs {
  height: 3vh !important;
}
.trs {
  line-height: 2vh;
}
th,
td {
  border: 2px solid black;
  padding: 8px;
  text-align: center;
  line-height: 2vh;
}
th {
  color: black; /* 默认颜色，后续通过CSS类覆盖 */
}
.blue {
  background-color: rgba(178, 217, 247, 0.64);
}
.green {
  background-color: rgba(56, 161, 242, 0.64);
}
.wbwj-biaoger {
  width: 35%;
  height: 55vh;
  /* border: 2px solid rgba(9, 132, 227, 1); */
  border-radius: 20px;
  /* padding: 2vh 1vw; */
}
.biaoger-items {
  font-size: 20px;
  height: 20%;
  width: 100%;
  font-weight: 530;
  font-family: Impact, Charcoal, sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1vh;
}
.biaoger-items div {
  height: 100%;
  width: 40%;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: rgba(178, 217, 247, 0.64);
}
.bottoms {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 88%;
  height: 6vh;
  padding-left: 25vw;
}
.bottoms div {
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: end;
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
