<template>
  <div class="table-content">
    <ez-table
      ref="demo"
      :data="data"
      :table-json="json"
      @selection-change="handleSelectionChange"
    >
      <template #ez-tophandler>
        <ez-button @click="clearSelection">清除勾选</ez-button>
      </template>
      <template #detail> 详细信息 <i class="el-icon-user-solid"></i> </template>
      <template #sex="scope">
        {{ scope.row.sex === 1 ? "男" : "女" }}
      </template>
      <template #handler>
        <ez-button type="text">删除</ez-button>
      </template>
    </ez-table>
  </div>
</template>

<script>
export default {
  name: "ezTableExample1",
  data() {
    return {
      data: [
        { name: "小明", age: 10, sex: 1 },
        { name: "小红", age: 12, sex: 0 },
      ],
      json: {
        title: "学生列表",
        columns: [
          {
            type: "selection",
          },
          {
            label: "姓名",
            prop: "name",
          },
          {
            label: "详细信息",
            headerSlot: "detail",
            children: [
              {
                label: "年龄",
                prop: "age",
              },
              {
                label: "性别",
                prop: "sex",
                slotName: "sex",
              },
            ],
          },
          {
            label: "操作",
            slotName: "handler",
          },
        ],
      },
    };
  },
  methods: {
    handleSelectionChange(val) {
      console.log(val);
    },
    clearSelection() {
      this.$refs.demo.elTable.clearSelection();
    },
  },
};
</script>
<style  scoped>
.table-content {
  height: 400px;
  padding: 20px;
  margin: 10px 0;
  border: 1px solid #ebebeb;
  border-radius: 10px;
}
</style>
<style>
.table-content .el-table__header-wrapper table {
  margin: 0 !important;
}
.table-content .el-table__body-wrapper table {
  margin: 0 !important;
}
</style>
