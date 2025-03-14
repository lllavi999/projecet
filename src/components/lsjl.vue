<script setup>
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
let router = useRouter()
let input = ref()
</script>

<template>
  <div class="lsjl-wrapper">
    <div class="return" @click="router.push('/main/grzx')"></div>
    <div class="side">
      <div class="avatars"></div>
      <div class="names">郝碧佘</div>
    </div>
    <h2 style="display: block">操作日志</h2>
    <div class="biaoge-c">
      <div class="search-name">
        <div class="sn-text">历史操作记录</div>
        <el-input
          style="width: 20vw; margin-left: 5vw"
          v-model="input"
          placeholder="请输入"
          :suffix-icon="Search"
        />
      </div>
      <table>
        <tr class="trs">
          <th class="blue">日期</th>
          <th class="green">项目</th>
          <th class="blue">修改部分</th>
          <th class="green">修改人</th>
        </tr>
        <tr class="trs">
          <td>2024-5-17</td>
          <td>CAD深刻造</td>
          <td>导线数据导入，图纸生成</td>
          <td>毕舍陆</td>
        </tr>
        <tr class="trs">
          <td>2024-5-19</td>
          <td>越城电信设计</td>
          <td>数据库管理</td>
          <td>郝碧佘</td>
        </tr>
        <!-- <tr class="trs">
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr class="trs">
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr> -->
        <!-- 其他行可以根据需要添加 -->
      </table>
      <div class="anniu"><el-button type="primary">详细记录</el-button></div>
    </div>
    <div class="genjin">
      <div class="search-name" style="margin-top: 2vh">
        <div class="sn-text">跟进项目</div>
        <el-input
          style="width: 20vw; margin-left: 5vw"
          v-model="input"
          placeholder="请输入"
          :suffix-icon="Search"
        />
      </div>
      <div class="words">
        <div class="row1">
          <div style="display: flex; align-items: center">
            <div style="height: 100%">
              <div
                style="
                  height: 50%;
                  position: absolute;
                  left: 0;
                  width: 80%;
                  bottom: 0;
                  background: rgba(178, 217, 247, 0.64);
                "
              ></div>
              我负责的项目：
            </div>
            1+1电路设计
          </div>
          <div style="display: flex; align-items: center">
            <div style="height: 100%">
              <div
                style="
                  height: 50%;
                  position: absolute;
                  left: 0;
                  width: 80%;
                  bottom: 0;
                  background: rgba(178, 217, 247, 0.64);
                "
              ></div>
              项目进展：
            </div>
            1+1电路设计
          </div>
        </div>
        <div class="row1">
          <div style="display: flex; align-items: center">
            <div style="height: 100%">
              <div
                style="
                  height: 50%;
                  position: absolute;
                  left: 0;
                  width: 80%;
                  bottom: 0;
                  background: rgba(178, 217, 247, 0.64);
                "
              ></div>
              我参与的项目：
            </div>
            1+1电路设计
          </div>
          <div style="display: flex; align-items: center">
            <div style="height: 100%">
              <div
                style="
                  height: 50%;
                  position: absolute;
                  left: 0;
                  width: 80%;
                  bottom: 0;
                  background: rgba(178, 217, 247, 0.64);
                "
              ></div>
              项目进展：
            </div>
            1+1电路设计
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.lsjl-wrapper {
  width: 100%;
  min-height: 100%;
  padding: 0 5vw;
}
.biaoge-c {
  width: 60vw;
  height: 60vh;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-top: 1vh;
  padding: 1% 2%;
}
.search-name {
  width: 100%;
  height: 5vh;
  display: flex;
  align-items: center;
}
.genjin {
  width: 60vw;
  height: 35vh;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-top: 1vh;
  padding: 1% 2%;
}
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1vh;
}
table .trs {
  height: 3vh !important;
}
.trs {
  line-height: 2vh;
}
th,
td {
  border: 1px solid black;
  padding: 8px;
  text-align: center;
  line-height: 2vh;
}
th {
  color: white; /* 默认颜色，后续通过CSS类覆盖 */
}
.blue {
  background-color: rgba(178, 217, 247, 0.64);
}
.green {
  background-color: rgba(56, 161, 242, 0.64);
}
.anniu {
  position: absolute;
  bottom: 1vh;
  left: 0;
  width: 100%;
  height: 4vh;
  display: flex;
  align-items: center;
  justify-content: right;
  padding: 0 2vw;
}
.words {
  width: 100%;
  font-family: 'Times New Roman', Times, serif;
  font-size: 18px;
  font-weight: 551;
  padding: 0 1vw;
  margin-top: 2vh;
}
.row1 {
  width: 60%;
  height: 4vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 3vh;
}
.return {
  width: 2vw;
  height: 2vw;
  position: absolute;
  background: url(../assets/return.png) no-repeat;
  background-size: contain;
  top: 3vh;
  right: 8vw;
  cursor: pointer;
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
/* .flex-cont{

} */
</style>
