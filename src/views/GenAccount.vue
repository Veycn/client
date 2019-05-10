<template>
  <div class="wrapper">
    <div class="content">
      <div class="desc">
        <p>请确认已经完成沟通!</p>
        <p>本次生成的账号授予目标是一个可靠的商家!</p>
      </div>
      <div class="gen">
        <el-button type="danger" @click="genAccount">确认生成账号</el-button>
        <div class="account" v-if="isShow">
          <el-divider></el-divider>
          <el-row>
            <span>账号:</span>
            <span class="bold"> {{accout}}</span>
          </el-row>
          <el-row>
            <span>密码:</span>
            <span class="bold"> {{password}}</span>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      accout: "test@test.com",
      password: "doasj54654",
      isShow: false
    };
  },
  methods: {
    genAccount(){
      //生成账号


      // 让生成的账号显示
      this.isShow = true
    }
  }
};
</script>

<style scoped>
@import "../assets/css/base.css";
.wrapper {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 15px;
  position: relative;
}
.content {
  position: absolute;
  left: 50%;
  top: 30%;
  width: 600px;
  height: 400px;
  border: 1px solid #ccc;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
}
.desc,
.gen {
  flex: 1;
  text-align: center;
  box-sizing: border-box;
  padding: 15px;
}
.desc p {
  line-height: 25px;
  color: #f20;
  font-weight: bord;
  font-size: 18px;
}
.gen {
  flex: 2;
}
.account {
  margin-top: 15px;
  text-align: left;
  font-size: 20px;
}
.bold {
  font-size: 20px;
  font-weight: bold;
  color: darkblue;
  line-height: 35px;
}
</style>
