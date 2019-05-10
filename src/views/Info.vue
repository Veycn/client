<template>
  <div class="info">
    <el-row class="content">
      <el-col :span="8" class="avatar">
        <img :src="user.avatar" alt="">
      </el-col>
      <el-col :span="16" class="userinfo">
        <div>
          <i class="fa  fa-user-o fa-lg"> </i>
          <span> {{ user.name }}</span>
        </div>
        <div>
          <i class="fa  fa-cog fa-lg"> </i>
          <span> {{ user.identity == "manager" ? "管理员" : "普通员工" }}</span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "userInfo",
  computed: {
    user(){
      return this.$store.getters.user
    }
  }
}
</script>

<style scoped>
  .info, .content{
    height: 100%;
    width: 100%;
  }
  .avatar {
    height: 100%;
    background: #fff;
  }
  .userinfo{
    height: 100%;
    background: #ccc;
  }
</style>
