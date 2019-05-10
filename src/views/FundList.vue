<template>
  <div class="fillContainer">
    <div>
      <el-form :inline="true" ref="add_data">
        <el-form-item label="按照时间筛选:">
          <el-date-picker
            v-model="search_data.startTime"
            type="datetime"
            placeholder="选择开始时间"
            default-time="12:00:00"
          ></el-date-picker>
          --
          <el-date-picker
            v-model="search_data.endTime"
            type="datetime"
            placeholder="选择结束时间"
            default-time="12:00:00"
          ></el-date-picker>
          <el-form-item class="btnRight">
            <el-button type="primary" size="small" icon="search" @click="handleSearch()">筛选</el-button>
          </el-form-item>
        </el-form-item>
        <el-form-item class="btnRight" v-if="user.identity == 'manager'">
          <el-button type="primary" size="small" icon="view" @click="handleAdd()">添加</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-table
      v-if="tableData.length > 0"
      :data="tableData"
      style="max-height: 600px;width: 100%; overflow-y: scroll;"
      border
    >
      <el-table-column prop="date" label="创建时间" width="250" align="center">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="type" label="收支类型" width="120" align="center"></el-table-column>
      <el-table-column prop="describe" label="收支描述" width="180" align="center"></el-table-column>
      <el-table-column prop="income" label="收入" width="100" align="center">
        <template slot-scope="scope">
          <span style="color: #00d053">{{ scope.row.income }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="expend" label="支出" width="100" align="center">
        <template slot-scope="scope">
          <span style="color: #f56767">{{ scope.row.expend }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="cash" label="账户现金" width="100" align="center"></el-table-column>
      <el-table-column prop="remark" label="备注" width="180" align="center"></el-table-column>

      <el-table-column label="操作" align="center" v-if="user.identity == 'manager'">
        <template slot-scope="scope">
          <el-button
            size="mini"
            icon="edit"
            type="warning"
            @click="handleEdit(scope.$index, scope.row)"
          >编辑</el-button>
          <el-button
            size="mini"
            icon="delete"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination">
      <el-col :span="24">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="paginations.page_index"
          :page-sizes="paginations.page_sizes"
          :page-size="paginations.page_size"
          :layout="paginations.layout"
          :total="paginations.total"
        ></el-pagination>
      </el-col>
    </div>
    <Dialog :dialog="dialog" :formData="formData" @update="getProfile"/>
  </div>
</template>

<script>
import Dialog from "../components/Dialog.vue";
export default {
  name: "fundList",
  components: { Dialog },
  created() {
   // this.getProfile();
  },
  data() {
    return {
      search_data: {
        startTime: '',
        endTime: ''
      },
      tableData: [],
      allTableData: [],
      filterTableData: [],
      dialog: {
        show: false,
        title: "",
        option: ""
      },
      formData: {
        type: "",
        describe: "",
        income: "",
        expend: "",
        cash: "",
        remark: "",
        id: ""
      },
      paginations: {
        page_index: 1, // 当前页
        total: 0,
        page_size: 5,
        page_sizes: [5, 10, 15, 20],
        layout: "total, sizes, prev, pager, next, jumper"
      }
    };
  },

  computed: {
    user(){
      return this.$store.getters.user
    }
  },
  methods: {
    getProfile() {
      this.$axios
        .get("/api/profiles")
        .then(res => {
          this.allTableData = res.data;
          this.filterTableData = res.data;
          // 设置分页数据
          this.setPagination();
        })
        .catch(e => console.log(e));
    },
    handleSearch(){
      if(!this.search_data.startTime || !this.search_data.endTime){
        this.$message({
          type: "warning",
          message: "请选择时间区间!"
        })
        this.getProfile()
        return
      }

      const startTime = this.search_data.startTime
      const endTime = this.search_data.endTime

      this.allTableData = this.filterTableData.filter(item => {
        let date = new Date(item.date)
        let time = date.getTime()
        return time >= startTime && time <= endTime
      })
      this.setPagination()
    },
    setPagination() {
      this.paginations.total = this.allTableData.length;
      this.paginations.page_index = 1;
      this.paginations.page_size = 5;

      this.tableData = this.allTableData.filter((item, index) => {
        return index < this.paginations.page_size;
      });
    },
    handleEdit(index, row) {
      // row 是这一行的所有信息.
      this.dialog = {
        show: true,
        title: "修改资金信息",
        option: "edit"
      };
      this.formData = {
        type: row.type,
        describe: row.describe,
        income: row.income,
        expend: row.expend,
        cash: row.cash,
        remark: row.remark,
        id: row._id
      };
    },
    handleDelete(index, row) {
      this.$axios
        .delete(`/api/profiles/delete/${row._id}`)
        .then(res => {
          this.$message("数据删除成功!");
          this.getProfile();
        })
        .catch(e => {
          console.log(e);
        });
    },
    handleAdd() {
      this.dialog = {
        show: true,
        title: "添加资金信息",
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
    },
    handleSizeChange(page_size) {
      this.paginations.page_index = 1;
      this.paginations.page_size = page_size;
      this.tableData = this.allTableData.filter((item, index) => {
        return index < page_size;
      });
    },
    handleCurrentChange(page) {
      let index = this.paginations.page_size * (page - 1);
      let nums = this.paginations.page_size * page;
      let tables = [];
      for (var i = index; i < nums; i++) {
        if (this.allTableData[i]) {
          tables.push(this.allTableData[i]);
        }
      }
      this.tableData = tables;
    }
  }
};
</script>

<style scoped>
@import '../assets/css/base.css';
.fillContainer {
  width: 100%;
  height: 100%;
  padding: 15px;
}
.btnRight {
  float: right;
  margin-left: 10px;
}
.pagination {
  text-align: right;
  margin-top: 10px;
}
</style>
