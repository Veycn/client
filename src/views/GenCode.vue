<template>
  <div class="wrapper">
    <div class="content">
      <div class="gen">
        <el-button type="primary" @click="genAccount">确认一个邀请码</el-button>
        <div class="account" v-if="isShow">
          <el-divider></el-divider>
          <el-row>
            <span class="noselect">邀请码:</span>
            <span class="bold"> {{code}}</span>
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
      code: "Aj1uCx8q",
      isShow: false
    };
  },
  methods: {
    genAccount(){
      //生成邀请码


      // 让生成的邀请码显示
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
  max-height: 250px;
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
.noselect{
  user-select: none;
}
</style>
