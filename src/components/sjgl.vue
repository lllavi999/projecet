<script setup>
import { ref } from 'vue'
import { useRouter, useRoute, onBeforeRouteUpdate } from 'vue-router'
let router = useRouter()
let sjgl = ref([
  {
    pic: '../../../src/assets/jx1.png',
    name: '地理数据'
  },
  {
    pic: '../../../src/assets/jx2.png',
    name: '气象数据'
  },
  {
    pic: '../../../src/assets/jx3.png',
    name: '导线数据'
  },
  {
    pic: '../../../src/assets/jx4.png',
    name: '杆塔数据'
  },
  {
    pic: '../../../src/assets/jx5.png',
    name: '导线悬挂点应力校验'
  },
  {
    pic: '../../../src/assets/jx6.png',
    name: '跳线间隙校验'
  },
  {
    pic: '../../../src/assets/jx7.png',
    name: '线间距离计算校验'
  },
  {
    pic: '../../../src/assets/jx8.png',
    name: '耐雷水平及雷击跳闸率计算'
  },
  {
    pic: '../../../src/assets/jx9.png',
    name: '摇摆角曲线计算'
  }
])
// const next = (item) => {
//   if(item.name == "耐雷水平及雷击跳闸率计算"){
//     router.push('/main/lspjs')
//   }else if (item.name == '摇摆角曲线计算'){
//     router.push('/main/ybjqx')
//   }
// }



const routeMap = new Map([
  ['耐雷水平及雷击跳闸率计算', '/main/lspjs'],
  ['摇摆角曲线计算', '/main/ybjqx'],
  ['导线悬挂点应力校验', '/main/stressVerCal'],
  ['跳线间隙校验', '/main/jumperVerCal'],
  ['线间距离计算校验', '/main/lineDisCal']
])

const next = (item) => {
  const path = routeMap.get(item.name)
  path && router.push(path)
}





</script>

<template>
  <div class="sjgl-wrapper">
    <!-- <div class="side">
      <div class="avatars"></div>
      <div class="names">郝碧佘</div>
    </div> -->
    <div class="sjgl-flex">
      <div class="sjgl-items" v-for="item in sjgl" @click="next(item)">
        <div class="item-pic">
          <img :src="item.pic" alt="" />
        </div>
        <div class="item-name">{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sjgl-wrapper {
  width: 100%;
}
.sjgl-flex {
  width: 70%;
  height: 140vh;
  margin: 2vw 24vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
.sjgl-items {
  width: 18vw;
  height: 30%;
  border: 1px solid #e5e5e5;
  border-bottom: 5px solid #0567B3;
  border-radius: 20px;
  cursor: pointer;
  overflow: hidden;   /* 隐藏溢出部分 */
  transition: transform 0.3s ease; /* 动画属性：transform变化时触发 */
  margin-bottom: 8vh;
}

.sjgl-items:hover  {
  transform: scale(1.1); /* 1.1=放大10%，数值可自定义 */
  transition: box-shadow 0.3s ease;/*光标移入，出现阴影*/ 
  box-shadow: 0 8px 20px rgba(0,0,0,0.2);
}
.item-pic {
  width: 99%;
  height: 75%;
  margin: 0 auto;
}
.item-name {
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(5, 103, 179, 0.98);
  font-size: 15px;
  font-weight: 551;
}
.item-pic img {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  border-radius: 8px;
}
.side {
  width: 11vw;
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
  margin-top: 4vh;
  line-height: 4vh;
}
</style>
