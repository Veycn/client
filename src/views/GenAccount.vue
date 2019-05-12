<template>
  <div class="wrapper">
    <div class="content">
      <div class="desc">
        <p>请确认已经完成沟通!</p>
        <p>本次生成的账号授予目标是一个可靠的商家!</p>
        <el-divider></el-divider>
        <el-form ref="form" :model="form" label-width="90px" :rules="rules">
          <el-form-item label="商家名称: " prop="name">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="genAccount('form')">立即创建</el-button>
            <el-button @click="resetForm('form')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="gen">
        <div class="account" v-if="isShow">
          <el-divider></el-divider>
          <el-row>
            <span class="noselect">账号:</span>
            <span class="bold">{{accout}}</span>
          </el-row>
          <el-row>
            <span class="noselect">密码:</span>
            <span class="bold">{{password}}</span>
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
      isShow: false,
      form: {
        name: ""
      },
      rules: {
        name: [
          { required: true, message: "用户名不能为空", trigger: "blur" },
          { min: 2, max: 20, message: "长度应在2-20个字符之间" }
        ]
      }
    };
  },
  methods: {
    genAccount(formName) {
      // 校验表单
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log("允许生成");
          //生成账号

          // 让生成的账号显示
          this.isShow = true;
        }
      });
    },
    resetForm(formName) {
      console.log(this.$refs[formName])
      this.$refs[formName].resetFields();
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
  user-select: none;
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
.noselect {
  user-select: none;
  margin-right: 20px;
}
</style>
