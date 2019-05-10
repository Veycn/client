<template>
  <div class="register">
    <section class="form-container">
      <div class="manage-tip">
        <span class="title">后台管理系统</span>
        <el-form
          :model="registerUser"
          :rules="rules"
          ref="registerForm"
          label-width="80px"
          class="registerForm"
        >
          <el-form-item label="用户名" prop="name">
            <el-input v-model="registerUser.name" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item label="邮箱" prop="email">
            <el-input v-model="registerUser.email" placeholder="请输入邮箱"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="registerUser.password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="password2">
            <el-input type="password" v-model="registerUser.password2" placeholder="确认密码"></el-input>
          </el-form-item>

          <el-form-item label="选择身份">
            <el-select v-model="registerUser.identity" aria-placeholder="请选择身份">
              <el-option label="管理员" value="manager"></el-option>
              <el-option label="员工" value="employee"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" class="submit-btn" @click="submitForm('registerForm')">注册</el-button>
          </el-form-item>
        </el-form>
      </div>
      <button @click="test">测试</button>
    </section>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    let validatePass2 = (rule, value, callback) => {
      // 第二次输入的密码与第一次不一致
      if (value !== this.registerUser.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      registerUser: {
        name: "",
        email: "",
        password: "",
        password2: "",
        identity: ""
      },
      rules: {
        name: [
          { required: true, message: "用户名不能为空", trigger: "blur" },
          { min: 2, max: 20, message: "长度应在2-20个字符之间" }
        ],
        email: [
          {type: "email", required: true, message: "邮箱格式不正确!", trigger: "blur"}
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { min: 6, max: 16, message: "长度应在6-16个字符之间", trigger: "blur"}
        ],
        password2: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { min: 6, max: 16,message: "长度应在6-16个字符之间",trigger: "blur"},
          { validator: validatePass2, trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName){
      this.$refs[formName].validate(valid => {
        if(valid){
          console.log(valid)
          this.$axios.post("/api/user/register", this.registerUser)
            .then(res => {
              this.$message({
                message: "注册成功!",
                type: "success"
              })
            })
          this.$router.push("/login")
        }
      })
    },
    test(){
      this.$axios.get("/api/profiles/test").then(res => {
        console.log(res);
      }).catch(e => console.log(e))
    }
  }
};
</script>

<style scoped>
.register {
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
