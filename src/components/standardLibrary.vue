<script setup>
// 标准模板图型库 存储和检索标准化的设计模板和图型，方便设计人员快速引用和修改
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
    <!-- <div class="side">
      <div class="avatars"></div>
      <div class="names">郝碧佘</div>
    </div> -->
    <!-- <div class="excel-flex"> -->
    <!-- <div class="excel-left">
        <el-input
          v-model="input"
          placeholder="请输入"
          :suffix-icon="Search"
          style="width: 80%; margin-top: 2vh; margin-left: 10%"
        />
        <div class="left-items" style="margin-top: 5vh">地理信息数据</div>
        <div class="left-items">气象数据文件</div>
        <div class="left-items">典型设计案例</div>
        <div class="left-items">设备参数文件</div>
      </div> -->
    <div
      class="std-top"
      style="
        display: flex;
        justify-content: flex-start;
        align-items: center;

        gap: 30px;
        padding-left: 50px;
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
        <div class="title">220kV 耐张塔</div>
        <div class="tags">
          <span class="tag">杆塔模板</span>
          <span class="tag">已发布</span>
        </div>
        <div class="info">版本：v2.1.3 | 更新：2023-08-15</div>
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
        gap: 20vw;
        padding-left: 10px;
        margin-top: 100px;
      "
    >
      <el-upload
        v-model:file-list="fileList"
        class="upload-demo"
        action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
        multiple
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :before-remove="beforeRemove"
        :limit="3"
        :on-exceed="handleExceed"
      >
        <el-button type="primary" style="height: 40px;width: 10vw;
        background-color: #B2D9F7;
        color:black;
        font-weight: 400;
        border: 1px solid #B2D9F7;
        border-radius: 10px;">
        选择文件</el-button>
        <!-- <template #tip>
      <div class="el-upload__tip">
        jpg/png files with a size less than 500KB.
      </div>
    </template> -->
      </el-upload>

      <!-- <el-input
        v-model="input"
        placeholder="智能检索"
        :suffix-icon="Search"
        style="width: 20%; height: 40px"
      /> -->
      <el-button type="primary" style="height: 40px;width: 10vw;
      background-color: #B2D9F7;
        color:black;
        font-weight: 400;
        border: 1px solid #B2D9F7;
        border-radius: 10px;
      ">提交审核</el-button>
      <!-- <div class="return" @click="router.push('/main/zskgl')"></div> -->
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
  margin-left: 80px;
  background: url(../assets/return.png) no-repeat;
  background-size: contain;
  cursor: pointer;
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
  border: 2px solid #0984E3;
  border-radius: 10px;
  padding: 10px;
  background: white;
  text-align: center;
  width: 230px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
}
.title {
  font-size: 18px;
  font-weight: bold;
}
.tags {
  margin: 10px 0;
}
.tag {
  display: inline-block;
  background: #0984E3;
  color: white;
  padding: 5px 10px;
  font-size: 12px;
  border-radius: 15px;
  margin: 5px;
}
.info {
  font-size: 12px;
  color: gray;
}

.btn {
  display: inline-block;
  padding: 8px 15px;
  border-radius: 40px;
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
