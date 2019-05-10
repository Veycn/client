<template>
  <header class="head_nav">
    <el-row>
      <el-col :span="6" class="container">
        <span class="title">在线后台管理系统</span>
      </el-col>
      <el-col :span="18" class="user">
        <div class="userinfo">
          <img
            :src="user.avatar"
            class="avatar"
          >
          <div class="welcome">
            <span class="name comename">欢迎您！</span>
            <span class="name username">{{ user.name }}</span>
            <span>
              <el-dropdown trigger="click" @command="setInfo">
                <span class="el-dropdown-link">
                  <i class="el-icon-caret-bottom el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="info">个人信息</el-dropdown-item>
                  <el-dropdown-item command="exit">退出</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </span>
          </div>
        </div>
      </el-col>
    </el-row>
  </header>
</template>

<script>
export default {
  name: "head-nav",
  methods: {
    setInfo(cmd) {
      console.log(cmd)
      switch (cmd){
        case "info":
          this.showInfoList()
          break;
        case "exit":
          this.exit()
          break;
      }
    },
    showInfoList(){
      this.$router.push("/info")
    },
    exit(){
      localStorage.removeItem("userToken")
      this.$store.dispatch("clearCurrentUser")
      this.$router.push("/login")
    }
  },
  computed: {
    user() {
      return this.$store.getters.user;
    }
  }
};
</script>

<style>
.head_nav {
  width: 100%;
  height: 60px;
  min-width: 1080px;
  padding: 5px;
  background: #324057;
  color: #fff;
  border-bottom: 1px solid #1f2d3d;
}
.title {
  line-height: 60px;
  font-size: 30px;
  padding-left: 15px;
}
.userinfo {
  display: flex;
  float: right;
  flex-direction: row;
}
.userinfo .avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-top: 10px;
}
.welcome {
  width: 100px;
  height: 60px;
  margin-left: 20px;
  margin-right: 40px;
}
.welcome span {
  line-height: 60px;
  font-size: 14px;
}
.welcome span.username {
  cursor: pointer;
  color: #409eef;
}

.el-icon-caret-bottom:before {
  color: #fff;
}
</style>
