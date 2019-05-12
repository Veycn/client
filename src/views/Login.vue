<template>
  <div class="login">
    <section class="form-container">
      <div class="manage-tip">
        <span class="title">后台管理系统登录</span>
        <el-form
          :model="loginUser"
          :rules="rules"
          ref="loginForm"
          label-width="80px"
          class="registerForm"
        >
          <el-form-item label="邮箱" prop="email">
            <el-input v-model="loginUser.email" placeholder="请输入邮箱"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="loginUser.password" placeholder="请输入密码"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" class="submit-btn" @click="submitForm('loginForm')">登录</el-button>
          </el-form-item>
          <!-- <div>
            <p>还没有账号? 现在<router-link to="/register">注册</router-link></p>
          </div> -->
        </el-form>
        <!-- <button @click="test">测试</button> -->
      </div>
    </section>
  </div>
</template>

<script>
import jwt_decode from 'jwt-decode'
export default {
  name: "",
  components: {},
  data() {
    return {
      loginUser: {
        email: "",
        password: ""
      },
      rules: {
        email: [
          {type: "email", required: true, message: "邮箱格式不正确!", trigger: "blur"}
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { min: 6, max: 16, message: "长度应在6-16个字符之间", trigger: "blur"}
        ]
      }
    };
  },
  methods: {
    submitForm(formName){
      this.$refs[formName].validate(valid => {
        if(valid){
          this.$axios.post("/api/user/login", this.loginUser)
            .then(res => {
              // 登录 拿到 token
              const { token } = res.data
              const decoded = jwt_decode(token)
              this.$store.dispatch("setAuthenticated", !this.isEmpty(decoded))
              this.$store.dispatch("setUser", decoded)
              localStorage.setItem("userToken", token)
              this.$router.push("/index")
            }).catch(e => console.log(e))
        }
      })
    },
    test(){
      this.$axios.get("/api/user/test").then(res => {
        console.log(res);
      }).catch(e => console.log(e))
    },
    isEmpty(value){
      return (
        value === undefined ||
        value === null ||
        typeof value === "object" && Object.keys(value).length === 0 ||
        typeof value === "string" && value.trim().length === 0
      )
    }
  }
};
</script>

<style scoped>
.login {
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(#abcdef, #535991);
}
.form-container {
  width: 370px;
  height: 210px;
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 5px;
  text-align: center;
  padding: 25px;
}
.form-container .manage-tip .title {
  font-family: "Microsoft YaHei";
  font-weight: bold;
  font-size: 26px;
  color: #fff;
}
.registerForm {
  margin-top: 20px;
  background: #fff;
  padding: 20px 40px 20px 20px;
  border-radius: 5px;
  box-shadow: 0 5px 10px #ccc;
}
.submit-btn {
  width: 240px;
}
</style>
