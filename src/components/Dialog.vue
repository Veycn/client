<template>
  <div>
    <el-dialog
      :title="dialog.title"
      :visible.sync="dialog.show"
      :close-on-click-modal="false"
      :close-on-press-esc="true"
      :modal-append-to-body="false"
    >
      <div class="form">
        <el-form
          :rules="rules"
          ref="form"
          :model="formData"
          label-width="120px"
          style="margin: 10px; width: auto;"
        >
          <el-form-item label="定位关键字:">
            <el-select v-model="formData.type" placeholder="定位关键字">
              <el-option
                v-for="(item, index) in form_type_list"
                :key="index"
                :label="item"
                :value="item"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="本金:">
            <el-input v-model="formData.describe" placeholder="本金"></el-input>
          </el-form-item>
          <el-form-item label="佣金:">
            <el-input v-model="formData.income" placeholder="佣金"></el-input>
          </el-form-item>
          <el-form-item label="要求:">
            <el-input v-model="formData.expend" placeholder="要求"></el-input>
          </el-form-item>
          <el-form-item label="商家微信号:">
            <el-input v-model="formData.cash" placeholder="商家微信号"></el-input>
          </el-form-item>
          <el-form-item label="备注:">
            <el-input type="textarea" v-model="formData.remark" placeholder="备注"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button @click="dialog.show = false">取消</el-button>
            <el-button @click="submit('form')" type="primary">提交</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "dialogs",
  props: {
    dialog: Object,
    formData: Object
  },
  data() {
    return {
      form_type_list: ["提现", "充值", "优惠券", "转账", "提现手续费"],
      rules: {
        describe: { required: true, message: "描述不能为空!", trigger: "blur" },
        income: { required: true, message: "收入不能为空!", trigger: "blur" },
        expend: { required: true, message: "支出不能为空!", trigger: "blur" },
        cash: { required: true, message: "账户现金不能为空!", trigger: "blur" }
      }
    };
  },
  methods: {
    submit(form) {
      this.$refs[form].validate(valid => {
        if (valid) {
          const url =
            this.dialog.option == "add" ? "add" : `edit/${this.formData.id}`;
          this.$axios.post(`/api/profiles/${url}`, this.formData).then(res => {
            this.$message({
              message: "数据添加成功!",
              type: "success"
            }); 
            // 添加成功之后 清空 formData 隐藏 dialog
            //this.clearObj(this.formData)
            this.dialog.show = false;
            // 刷新列表中的数据
            this.$emit("update");
          });
        }
      });
    }
  },
  clearObj(obj) {
    for (var prop in obj) {
      obj[prop] = "";
    }
  }
};
</script>

<style>
</style>
