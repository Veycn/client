<template>
  <div class="wrapper">
    <el-row class="ctrl">
      <el-col :span="12" :offset="6">
        <div class="grid-content bg-purple">
           <el-button type="success" icon="el-icon-edit" @click="handleAdd">添加任务</el-button>
        </div>
      </el-col>
    </el-row>
    <Dialog :dialog="dialog" :formData="formData"></Dialog>
  </div>
</template>

<script>
import Dialog from "../components/Dialog.vue";
export default {
  name: "AddTask",
  components: {Dialog},
  data(){
    return{
      dialog: {
        show: false,
        title: "",
        option: ""
      },
      formData: {

      }
    }
  },
  methods: {
    handleAdd() {
      this.dialog = {
        show: true,
        title: "添加任务信息",
        option: "add"
      };
      this.formData = {
        type: "",
        describe: "",
        income: "",
        expend: "",
        cash: "",
        remark: "",
        id: ""
      };
    }
  }
};
</script>

<style scoped>
.wrapper{
  box-sizing: border-box;
  padding: 15px;
}
.ctrl {
  width: 100%;
  height: 40px;
}
.grid-content{
  height: 40px;
  text-align: center;
}
</style>
