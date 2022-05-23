<template>
  <div>
    <ez-table
      border
      ref="myTable"
      :table-json="tableJson"
      :data="tableData"
      @selection-change="handleSelectionChange"
    >
      <template #chineseHeader>
        <span>语文（头部插槽）</span>
      </template>
      <template #chinese="scope">
        {{ scope.$index }}、{{ scope.row.chinese >= 60 ? "合格" : "不合格" }}
      </template>
    </ez-table>
    <div style="margin-top: 20px">
      <ez-button @click="handleSelect" type="primary">选中第一行</ez-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        { name: "小红", english: 90, math: 78, chinese: 69, geography: 91 },
        { name: "小王", english: 60, math: 98, chinese: 67, geography: 92 },
        { name: "小张", english: 54, math: 58, chinese: 45, geography: 93 },
        { name: "小李", english: 87, math: 56, chinese: 89, geography: 94 },
      ],
      tableJson: {
        columns: [
          { type: "selection" },
          {
            prop: "name",
            label: "姓名",
          },
          {
            label: "分数",
            children: [
              {
                label: "语言类",
                children: [
                  {
                    label: "英语",
                    prop: "english",
                    align: "center",
                  },
                  {
                    label: "语文",
                    prop: "chinese",
                    slotName: "chinese",
                    headerSlot: "chineseHeader",
                  },
                ],
              },
              {
                label: "数学",
                prop: "math",
                show: true,
              },
              {
                label: "地理",
                prop: "geography",
                show: false,
              },
            ],
          },
        ],
      },
    };
  },
  methods: {
    handleSelectionChange(val) {
      console.log(val);
    },
    handleSelect() {
      this.$refs.myTable.ezTable.toggleRowSelection(this.tableData[0]);
    },
  },
};
</script>
<style scoped>
.ez-table >>> table {
  margin: 0px !important;
}
</style>


