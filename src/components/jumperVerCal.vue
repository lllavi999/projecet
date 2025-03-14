<script setup>
// 进行跳线间隙校验计算 根据导线数据和档位数据、算例数据等计算参情况数，对跳线间隙进行校验
import { ref } from "vue";
import { Search } from "@element-plus/icons-vue";
import { useRouter, useRoute, onBeforeRouteUpdate } from "vue-router";
let router = useRouter();

const radio1 = ref("1");
</script>

<template>
  <div class="excel-wrapper">
    <!-- <div class="side">
      <div class="avatars"></div>
      <div class="names">郝碧佘</div>
    </div> -->
    <div class="container">
      <div class="section">
        <h3>杆塔参数</h3>
        <div class="input-group">
          <label>杆塔高度(m):</label>
          <input type="text" />
        </div>
        <div class="input-group">
          <label>横担长度(m):</label>
          <input type="text" />
        </div>
      </div>
      <div class="section">
        <h3>其他参数</h3>
        <div class="input-group">
          <label>档距(m):</label>
          <input type="text" />
        </div>
        <div class="input-group">
          <label>允许应力(MPa):</label>
          <input type="text" />
        </div>
      </div>
      <div class="right-top">
        <div class="lh-icon" @click="router.push('/main/sjgl')"></div>
      <el-radio-group v-model="radio1" style="
      width: 20%;height: 50%;
      margin-top: 3vh;
      ">
        <el-radio value="1" size="large">简单模式</el-radio>
        <el-radio value="2" size="large">详细模式</el-radio>
      </el-radio-group>
      </div>

      <div class="section">
        <h3>导线参数</h3>
        <div class="input-group">
          <label>截面积(mm²):</label>
          <input type="text" />
        </div>
        <div class="input-group">
          <label>弹性模量(GPa):</label>
          <input type="text" />
        </div>
        <div class="input-group">
          <label>单位重量(kg/m):</label>
          <input type="text" />
        </div>
        <div class="input-group">
          <label>导线直径(mm):</label>
          <input type="text" />
        </div>
        <div class="input-group">
          <label>热膨胀系数(1/°C):</label>
          <input type="text" />
        </div>
      </div>
      <div class="section">
        <h3>气象参数</h3>
        <div class="input-group">
          <label>温度变化(°C):</label>
          <input type="text" />
        </div>
        <div class="input-group">
          <label>风速(m/s):</label>
          <input type="text" />
        </div>
        <div class="input-group">
          <label>风阻系数:</label>
          <input type="text" />
        </div>
      </div>
      <div class="section">
        <h3>计算结果</h3>
        <div class="results">
          自重应力: 0.05MPa<br />
          风荷载应力: 0.00MPa<br />
          温度应力: 0.00MPa<br />
          总应力: 0.05MPa<br />
          允许应力: 0.20MPa<br />
          <b style="color: #007bff">应力校验通过 (总应力 ≤ 允许应力)</b>
        </div>
      </div>

      <div class="buttons">
        <button class="button" style="color: #0567B3;background: none;
        border: 2px solid #0567B3;
        font-size: 16px;
        ">导入数据</button>
        <button class="button"style="color: #0567B3;background: rgb(206, 231, 250);
        font-size: 16px;
        ">开始计算</button>
        <button class="button" disabled>结果输出</button>
        <button class="button" disabled>结果校验</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.excel-wrapper {
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
  font-family: "Times New Roman", Times, serif;
  font-weight: 551;
  display: flex;
  align-items: center;
  justify-self: center;
  margin-top: 3vh;
  line-height: 4vh;
}

.container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  background: none;
  padding: 20px;
  border-radius: 10px;
  /* box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1); */
}
.section {
  border: 1px solid #e5e5e5;
  /* border-left:5px solid #0567B3; */
  padding: 15px;
  border-radius: 20px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
}
.section h3 {
  color: #0567B3;
  border-bottom: 2px solid #0567B3;
  padding-bottom: 5px;
}

.lh-icon{
  display: flex;
  float: right;
  width: 3vw;
  height: 3vh;
  background: url(../assets/return.png) no-repeat;
  background-size: contain;
  cursor: pointer;
  margin-top: 4vh;
}
.input-group {
  margin: 10px 0;
  display: flex;
}
.input-group label {
  display: block;
  font-size: 14px;
  margin-right: 5px;
}
.input-group input {
  /* width: 100%; */
  padding: 5px;
  border: 2px solid #0984E3;
  border-radius: 10px;
}
.results {
  font-size: 14px;
  line-height: 1.8;
}
.buttons {
  grid-column: span 3;
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}
.button {
  padding: 10px 15px;
  border: none;
  border-radius: 10px;
  background: rgb(206, 231, 250);
  color: white;
  cursor: pointer;
}
.button:disabled {
  background: white;
  color: #999;
  border: 1px solid #0567B3;
  font-size: 16px;
}
</style>
