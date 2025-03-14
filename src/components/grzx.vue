<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
let router = useRouter()
let value1 = ref(53)
let value2 = ref()
let fangwen = ref()
let xiugai = ref()
let bianji = ref()
</script>

<template>
  <div class="wrapper">
    <div class="w-left">
      <div class="left-top">
        <div class="left-left"></div>
        <div class="left-right">
          <div class="lr-up">郝碧佘</div>
          <div class="lr-down">用户编号：95262649</div>
        </div>
      </div>
      <div class="left-middle">
        <div class="zhanghao-xingbie">
          <div class="zhanghao">账号：Haobs1234</div>
          <div class="xingbie">性别：女</div>
        </div>
        <div class="youxiang">邮箱：599999999@qq.com</div>
        <div class="tuandui">团队名称：郝浩号</div>
        <div class="canyu">参与项目：1+1线路</div>
        <div class="jindu">
          项目进展：<el-slider style="width: 60%" v-model="value1" />
          <div style="margin-left: 1vh">{{ value1 }}%</div>
        </div>
        <div class="riqi">
          开始时间&预期结束时间：<el-date-picker
            v-model="value2"
            type="monthrange"
            range-separator="至"
            start-placeholder="开始"
            end-placeholder="结束"
          />
        </div>
        <div>担任角色：设计工程师</div>
      </div>
      <div class="left-bottom">
        <div class="quanxian">
          用户权限：<el-checkbox
            v-model="fangwen"
            label="访问"
            size="large"
          /><el-checkbox
            v-model="xiugai"
            label="修改"
            size="large"
          /><el-checkbox v-model="bianji" label="编辑" size="large" />
        </div>
        <div>联系方式：195****1111</div>
        <div class="lb-buttons">
          <el-button style="border: 2px solid #0984E3;
          font-family: Impact, Charcoal, sans-serif"
          >编辑个人信息</el-button>
          <el-button type="primary"
          style="background-color: #0567B3;
          font-family: Impact, Charcoal, sans-serif">保存</el-button>
        </div>
      </div>
    </div>
    <div class="w-right">
      <div class="gongnengs">
        <div @click="router.push('/main/lsjl')" class="g1"></div>
        <div class="g2"></div>
        <div class="g3"></div>
        <div @click="router.push('/main/tzsc')" class="g4"></div>
        <div @click="router.push('/main/sjgl')" class="g5"></div>
        <div @click="router.push('/main/sjgl')" class="g6"></div>
        <div @click="router.push('/main/sjgl')" class="g7"></div>
        <div @click="router.push('/main/sjgl')" class="g8"></div>
        <div @click="router.push('/main/zskgl')" class="g9"></div>
        <div class="g10"></div>
        <div @click="router.push('/main/lsjl')" class="g11"></div>
        <div class="g12"></div>
      </div>
      <div class="banben">版本号:v.2.3.6.0</div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  width: 100%;
  height: 88vh;
  display: flex;
  justify-content: space-between;
  padding: 0 2vw;
  background-color:white;
}
.w-left {
  width: 49%;
  height: 100%;
}
.w-right {
  width: 49%;
  height: 100%;
}
.left-top {
  width: 100%;
  height: 14vh;
  /* border: 1px solid #ccc; */
  display: flex;
  align-items: center;
}
.left-middle {
  width: 100%;
  height: 45vh;
  border: 2px solid #e5e5e5;
  border-left: 7px solid#0567B3;
  margin-top: 2vh;
  border-radius: 20px;
  font-family: Impact, Charcoal, sans-serif;
  font-size: 15px;
  font-weight: 400;
  padding: 0 1vw;
}
.left-bottom {
  width: 100%;
  height: 18vh;
  border: 2px solid #e5e5e5;
  border-left: 7px solid#0567B3;
  margin-top: 2vh;
  border-radius: 20px;
  font-family: Impact, Charcoal, sans-serif;
  font-size: 15px;
  font-weight: 400;
  padding: 0 1vw;
}
.left-left {
  width: 5vw;
  height: 5vw;
  background: url(../assets/user.png) no-repeat;
  background-size: contain;
  margin-left: 1.5vw;
}
.left-right {
  width: 20vw;
  height: 6vh;
  margin-left: 3vw;
}
.gongnengs {
  width: 100%vw;
  height: 70%;
  margin-left: 5vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
}
.gongnengs div{
  cursor: pointer;
}
.g1 {
  height: 6vw;
  width: 29%;
  background: url(../assets/功能1.png) no-repeat;
  background-size: contain;
  cursor: pointer;
}
.g2 {
  height: 6vw;
  width: 29%;
  background: url(../assets/功能2.png) no-repeat;
  background-size: contain;
}
.g3 {
  height: 6vw;
  width: 29%;
  background: url(../assets/功能3.png) no-repeat;
  background-size: contain;
}
.g4 {
  height: 6vw;
  width: 29%;
  background: url(../assets/功能4.png) no-repeat;
  background-size: contain;
}
.g5 {
  height: 6vw;
  width: 29%;
  background: url(../assets/功能5.png) no-repeat;
  background-size: contain;
}
.g6 {
  height: 6vw;
  width: 29%;
  background: url(../assets/功能6.png) no-repeat;
  background-size: contain;
}
.g7 {
  height: 6vw;
  width: 29%;
  background: url(../assets/功能7.png) no-repeat;
  background-size: contain;
}
.g8 {
  height: 6vw;
  width: 29%;
  background: url(../assets/功能8.png) no-repeat;
  background-size: contain;
}
.g9 {
  height: 6vw;
  width: 29%;
  background: url(../assets/功能9.png) no-repeat;
  background-size: contain;
}
.g10 {
  height: 6vw;
  width: 29%;
  background: url(../assets/功能10.png) no-repeat;
  background-size: contain;
}
.g11 {
  height: 6vw;
  width: 29%;
  background: url(../assets/功能11.png) no-repeat;
  background-size: contain;
}
.g12 {
  height: 6vw;
  width: 29%;
  background: url(../assets/功能12.png) no-repeat;
  background-size: contain;
}
.banben {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2vh;
  font-family: Impact, Charcoal, sans-serif;
  letter-spacing: 5px;
  color: rgba(5, 103, 179, 0.98);
}
.lr-up {
  width: 100%;
  height: 60%;
  font-size: 19px;
  font-weight: 551;
  color: black;
  font-family: Impact, Charcoal, sans-serif;
}
.lr-down {
  width: 100%;
  height: 40%;
  color: rgba(5, 103, 179, 0.98);
}
.zhanghao-xingbie {
  display: flex;
  align-items: center;
}
.zhanghao {
  font-family:Impact, Charcoal, sans-serif;
  font-size: 15px;
  font-weight: 400;
}
.xingbie {
  font-family: Impact, Charcoal, sans-serif;
  font-size: 15px;
  font-weight: 400;
  margin-left: 10vw;
}
.left-middle > div {
  margin-top: 3vh;
}
.jindu {
  display: flex;
  align-items: center;
}
.riqi {
  display: flex;
  align-items: center;
}
.quanxian {
  display: flex;
  align-items: center;
}
.lb-buttons {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.left-bottom > div {
  margin-top: 1.3vh;
}
</style>
