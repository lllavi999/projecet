<script setup>
import { ref } from 'vue'
import { useRouter, useRoute, onBeforeRouteUpdate } from 'vue-router'
let router = useRouter()
</script>

<template>
  <div class="zsk-wrapper">
    <!-- <div class="side">
      <div class="avatars"></div>
      <div class="names">郝碧佘</div>
    </div> -->
    <div class="container1">
      <div class="left-img">
        <img src="../assets/zsk1.png" alt="">
      </div>
      <div class="right-word" @click="router.push('/main/standard')">
        <div class="right-top">标准模板图型库</div>
        <div class="right-bottom">
          为设计人员提供一个高效、便捷的标准模板图型库，用于存储、检索和管理标准化的设计模板和图型。通过该功能，设计人员可以快速引用和修改模板，减少重复工作，同时确保设计的一致性和规范性。
        </div>
      </div>
    </div>
    <div class="container2">
      <div class="left-word" @click="router.push('/main/rules')">
        <div class="left-top">规则库</div>
        <div class="left-bottom">
          在输电线路设计中，设计人员需要严格遵循各类设计规范、标准以及计算公式，并结合丰富的设计经验来确保设计的准确性和可靠性。为设计人员提供一个全面、高效的规则库，用于收集、存储和管理设计规范、标准、计算公式以及设计经验。
        </div>
      </div>
      <div class="right-img">
        <img src="../assets/zsk2.png" alt="">
      </div>
    </div>
    <div class="container1">
      <div class="left-img">
        <img src="../assets/zsk3.png" alt="">
      </div>
      <div class="right-word" @click="router.push('/main/excel')">
        <div class="right-top">Excel信息库</div>
        <div class="right-bottom">
          利用 Excel
          文件来存储、管理和提供与输电线路设计相关信息的数据集合。Excel
          信息库扮演着结构化数据存储与便捷数据处理的关键角色。
        </div>
      </div>
    </div>
    <div class="container2">
      <div class="left-word" @click="router.push('/main/tower')">
        <div class="left-top">杆塔数据库</div>
        <div class="left-bottom">
          杆塔是支撑导线和设备的关键结构，其选型和设计直接影响线路的安全性、可靠性和经济性。，为设计人员提供一个全面、高效的杆塔数据库，用于存储各种类型杆塔的参数、图纸和性能数据。
        </div>
      </div>
      <div class="right-img">
        <img src="../assets/zsk4.png" alt="">
      </div>
    </div>
    <div class="container1" @click="router.push('/main/wbwjk')">
      <div class="left-img">
        <img src="../assets/zsk5.png" alt="">
      </div>
      <div class="right-word">
        <div class="right-top">外部文件库</div>
        <div class="right-bottom">
            存储、管理和提供与输电线路设计相关的各种数据和文件，为设计工作提供便利和支持。它与标准模板图型库、规则库、杆塔数据库以及 Excel 信息库等协同工作，共同为系统的高效运行提供支持。
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.zsk-wrapper {
  width: 100%;
  padding-bottom: 5vh;
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
.container1 {
  width: 70%;
  height: 30vh;
  border: 2px solid #e5e5e5;
  /* border-right: 5px solid #0567B3; */
  /* border-bottom: 5px solid #0567B3; */
  margin-left: 12vw;
  border-radius: 20px;
  display: flex;
  align-items: center;
  margin-top: 1vh;
  margin-bottom: 4vh;
  cursor: pointer;
  overflow: hidden;   /* 隐藏溢出部分 */
  transition: transform 0.3s ease; /* 动画属性：transform变化时触发 */
}

.container1:hover  {
  transform: scale(1.1); /* 1.1=放大10%，数值可自定义 */
  transition: box-shadow 0.3s ease;/*光标移入，出现阴影*/ 
  box-shadow: 0 8px 20px rgba(0,0,0,0.2);
}
.left-img {
  height: 100%;
  width: 35%;
  /* border: 1px solid #ccc; */
  border-radius: 8px;
}
.right-word {
  width: 76%;
  height: 100%;
  margin-left: 1vw;
}
.right-top {
  color: #0567B3;
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 551;
  height: 15%;
  width: 100%;
}
.right-bottom {
  width: 100%;
  height: 85%;
  font-size: 20px;
}
.container2 {
  width: 70%;
  height: 30vh;
  border: 2px solid #e5e5e5;
  /* border-left: 5px solid #0567B3; */
  /* border-bottom: 5px solid #0567B3; */
  margin-left: 12vw;
  border-radius: 20px;
  display: flex;
  align-items: center;
  margin-top: 2vh;
  margin-bottom: 4vh;
  cursor: pointer;
  overflow: hidden;   /* 隐藏溢出部分 */
  transition: transform 0.3s ease; /* 动画属性：transform变化时触发 */
}

.container2:hover  {
  transform: scale(1.1); /* 1.1=放大10%，数值可自定义 */
  transition: box-shadow 0.3s ease;/*光标移入，出现阴影*/ 
  box-shadow: 0 8px 20px rgba(0,0,0,0.2);
}
.left-word {
  width: 76%;
  height: 100%;
  margin-right: 1.2vw;
}
.left-top {
  color: #0567B3;
  display: flex;
  align-items: center;
  justify-content: end;
  font-size: 20px;
  font-weight: 551;
  height: 15%;
  width: 100%;
}
.left-bottom {
  width: 100%;
  height: 85%;
  font-size: 20px;
}
.right-img {
  height: 100%;
  width: 23%;
  /* border: 1px solid #ccc; */
  border-radius: 8px;
}
img {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}
</style>
