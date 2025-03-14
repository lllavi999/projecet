<script setup>
// 杆塔数据库 存储各种类型杆塔的参数、图纸和性能数据
import { ref } from "vue";
import { Search } from "@element-plus/icons-vue";
import { useRouter, useRoute, onBeforeRouteUpdate } from "vue-router";
let router = useRouter();

const value = ref("");

const options = [
  {
    value: "Option1",
    label: "Option1",
  },
  {
    value: "Option2",
    label: "Option2",
  },
  {
    value: "Option3",
    label: "Option3",
  },
  {
    value: "Option4",
    label: "Option4",
  },
  {
    value: "Option5",
    label: "Option5",
  },
];
</script>

<template>
  <div class="excel-wrapper">
    <div class="side">
      <div class="avatars"></div>
      <div class="names">郝碧佘</div>
    </div>
    <div
      class="std-top"
      style="
        display: flex;
        justify-content: flex-start;
        align-items: center;

        gap: 30px;
        padding-left: 10px;
      "
    >
      <el-input
        v-model="input"
        placeholder="智能检索"
        :suffix-icon="Search"
        style="width: 30%; height: 40px"
      />
      <el-select v-model="value" placeholder="全部类型" size="large" style="width: 15vw">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <el-select v-model="value" placeholder="已发布" size="large" style="width: 15vw">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <el-button type="primary" style="height: 40px;width: 6vw;
      font-size: 16px;background-color: #0984E3;
      border-radius: 10px;">
        搜索</el-button>
      <div class="return" @click="router.push('/main/zskgl')"></div>
    </div>

    <div
      class="std-center"
      style="
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 20px;
        padding: 10px;
        flex-wrap: wrap;
      "
    >
      <div class="card" v-for="item in 6">
        <div class="title">ZGU2-25</div>
        <div class="info">高度：32.5m</div>
        <div class="info">横担长度：8.2m</div>
        <div class="info">承载能力：1500kN</div>
        <div class="buttons">
          <a href="#" class="btn btn-details">查看详情</a>
          <a href="#" class="btn btn-download">下载</a>
        </div>
      </div>
    </div>

    <div
      class="std-bottom"
      style="
        display: flex;
        justify-content: center;
        align-items: flex-start;
        gap: 10vw;
        padding-left: 10px;
        margin-top: 100px;
      "
    >

      <el-button type="primary" style="height: 40px;width: 10vw;
        background-color: #B2D9F7;
        color:black;
        font-weight: 400;
        border: 1px solid #B2D9F7;
        border-radius: 10px;">添加杆塔数据</el-button>
      <el-button type="primary" style="height: 40px;width: 10vw;
        background-color: #B2D9F7;
        color:black;
        font-weight: 400;
        border: 1px solid #B2D9F7;
        border-radius: 10px;">数据管理</el-button>
    </div>
  </div>
</template>

<style scoped>
.excel-wrapper {
  width: 100%;
}

.left-items {
  background-color: rgb(206, 231, 250);
  font-size: 18px;
  font-weight: 551;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 7vh;
  margin: 2vh auto;
}
.excel-right {
  height: 100%;
  width: 60%;
  margin-left: 1vw;
}
.right-top {
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.right-items {
  background-color: rgb(206, 231, 250);
  font-size: 18px;
  font-weight: 551;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 7vh;
  width: 25%;
}
.return {
  width: 4vh;
  height: 4vh;
  background: url(../assets/return.png) no-repeat;
  background-size: contain;
  cursor: pointer;
  margin-left: 90px;
}
.right-bottom {
  width: 100%;
  height: 60vh;
  border: 2px solid rgba(9, 132, 227, 1);
  border-radius: 8px;
}
.rb-item {
  width: 100%;
  height: 46%;
}
.rb-top {
  width: 100%;
  height: 5vh;
  display: flex;
  align-items: center;
  padding-left: 1vw;
}
.rb-bottom {
  width: 95%;
  height: 25vh;
  margin: 0 auto;
}
.rb-bottom img {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
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

.card {
  border: 2px solid #007bff;
  border-radius: 10px;
  padding: 10px;
  background: white;
  text-align: center;
  width: 230px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
}
.title {
  font-size: 18px;
  font-weight: bold;
}

.info {
  font-size: 12px;
  color: gray;
}

.btn {
  display: inline-block;
  padding: 8px 15px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 12px;
  margin: 5px;
}
.btn-details {
  background: #B2D9F7;
  color: black;
  border-radius: 20px;
}
.btn-download {
  background: #bcd4fc;
  color: black;
  border-radius: 20px;
}
</style>
