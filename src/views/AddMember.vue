<template>
  <div class="wrapper">
    <el-collapse accordion class="container">
      <el-collapse-item class="info" v-for="item in 28" :key="item">
        <template slot="title">
          <span>序号: {{item}}</span>
          <span>姓名: {{'张三'}}</span>
          <span>电话: {{'138xxxxxxxx'}}</span>
          <span>微信号: {{'415694641'}}</span>
        </template>
        <div class="content">
          <div class="detail">
            <div class="demo-image__placeholder">
              <div class="block">
                <span class="demonstration">自拍照</span>
                <img src="../assets/test.png" alt="">
              </div>
            </div>
          </div>
          <div class="detail">
             <div class="demo-image__placeholder">
              <div class="block">
                <span class="demonstration">身份证正面</span>
                <img src="../assets/test.png" alt="">
              </div>
            </div>
          </div>
          <div class="detail">
            <div class="demo-image__placeholder">
              <div class="block">
                <span class="demonstration">身份证反面</span>
                <img src="../assets/test.png" alt="">
              </div>
            </div>
          </div>
          <div class="detail">
            <el-row class="btns">
              <el-button type="success">审核通过</el-button>
              <el-button type="danger">拒绝申请</el-button>
            </el-row>
          </div>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@import '../assets/css/base.css';
.wrapper {
  width: 100%;
  height: 100%;
  padding: 25px;
}
.container{
  height: 100%;
  overflow-x: scroll;
}
.info span {
  margin-right: 15px;
}
.item {
  width: 100%;
  display: flex;
  flex-direction: row;
}
.content {
  width: 100%;
  display: flex;
  flex-direction: row;
  min-height: 400px;
  padding-bottom: 15px;
}
.content div {
  flex: 1;
}
.detail {
  width: 100%;
  border: 1px solid #ccc;
  margin: 5px;
  box-sizing: border-box;
  padding: 10px;
  border-radius: 8px;
  transition: box-shadow 0.5s;
}
.detail .block img{
  width: 100%;
}
.detail .btns {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.detail:hover {
  box-shadow: 0 0 10px #999;
}
</style>
