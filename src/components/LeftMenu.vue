<template>
  <div>
    <el-row class="menu">
      <el-col class="content">
        <el-menu
          class="el-menu-vertical-demo"
          background-color="#324057"
          text-color="#fff"
          active-text-color="#409eff"
        >
          <router-link to="/home">
            <el-menu-item index="0">
              <i class="fa fa-margin fa-server"></i>
              <span slot="title">首页</span>
            </el-menu-item>
          </router-link>

          <template v-for="item in items">
            <router-link :to="item.path" :key="item.path">
              <el-menu-item index="0">
                <i class="fa fa-margin fa-server"> </i>
                <span slot="title"> {{ item.name }}</span>
              </el-menu-item>
            </router-link>
          </template>

        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "LeftMenu",
  data() {
    return {
      items: [
        {
          icon: "",
          path: "task",
          name: "审核任务"
        },
         {
          icon: "",
          path: "addtask",
          name: "添加任务"
        },
        {
          icon: "",
          path: "addmember",
          name: "审核新成员"
        },
        {
          icon: "",
          path: "menbermanage",
          name: "成员管理"
        },
        {
          icon: "",
          path: "genaccount",
          name: "生成账号"
        },
        {
          icon: "",
          path: "geninvitecode",
          name: "生成邀请码"
        },
        {
          icon: "",
          path: "getcash",
          name: "提现管理"
        }
      ]
    };
  }
};
</script>

<style>
.menu {
  width: 200px;
  height: 100%;
  overflow: hidden;
}
.content,
.content ul {
  height: 100%;
}
.el-submenu {
  box-sizing: border-box;
  overflow: hidden;
}
ul.el-menu {
  border-right: none;
}
a{
  text-decoration: none;
}
</style>
