<template>
  <div class="wrapper">
    <el-collapse accordion class="container">
      <el-collapse-item class="info" v-for="item in 28" :key="item">
        <template slot="title">
          <span>序号: {{item}}</span>
         <span>店铺名称: {{'巴啦啦小魔仙服装店'}}</span>
         <span>联系电话: {{'0754-xxxx-4365'}}</span>
        </template>
        <div class="content">
          <div class="detail">
            <div class="demo-image__placeholder">
              <div class="block">
                <span class="demonstration">任务详情</span>
                <img src="../assets/test.png" alt="">
              </div>
            </div>
          </div>
          <div class="detail">
            <span>要求</span>
            <p>1. 女号搜索收藏加购假聊,宝贝浏览3分钟</p>
            <p>3. 同类目的宝贝随机浏览到底</p>
            <p>
              2. 时间控制放到
              <strong>晚上九点钟</strong>
            </p>
            <p>3. 时间控制间隔好</p>
            <el-divider></el-divider>
            <span>搜索关键字</span>
            <el-row :span="24">
              <el-tag>标签一</el-tag>
            </el-row>
            <el-row :span="24">
              <el-tag>标签一</el-tag>
            </el-row>
            <el-row :span="24">
              <el-tag>标签一</el-tag>
            </el-row>
            <el-row :span="24">
              <el-tag>标签一</el-tag>
            </el-row>
          </div>
          <div class="detail">
            <span>资金信息</span>
            <p>本金: 59元</p>
            <p>佣金: 5元</p>
          </div>
          <div class="detail">
            <el-row class="btns">
              <el-button type="success">审核通过</el-button>
              <el-button type="danger">拒绝发布</el-button>
            </el-row>
          </div>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      taskList: [{}],
      src: '../assets/test.png'
    };
  }
};
</script>

<style scoped>
@import "../assets/css/base.css";
.wrapper {
  width: 100%;
  height: 100%;
  padding: 15px;
}
.container{
  height: 100%;
  overflow-y: scroll;
}
.item {
  width: 100%;
  display: flex;
  flex-direction: row;
}
.info span{
  margin-right: 15px;
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
