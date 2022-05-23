<template>
  <ez-panel
    :panel-json="json"
    :search.sync="search"
    :pagination.sync="page"
    :tableTotal="1000"
    :tableData="data"
    containerColor="#f3f3f3"
    ref="rolePanel"
    @refreshTable="change"
  >
    <template #tableBottom>
      <el-button type="primary" @click="clear" style="margin-top: 10px"
        >清 除</el-button
      >
    </template>
  </ez-panel>
</template>

<script>
export default {
  name: "Panel",
  data() {
    return {
      json: {
        breadcrumb: {
          separatorClass: "el-icon-arrow-right",
          navigations: [{ name: "系统管理" }, { name: "角色管理" }],
        },
        search: {
          setting: {
            layout: "300px",
            searchItems: {
              name: {
                label: "姓名",
                type: "input",
                isTrim: true,
                clearable: false,
                placeholder: "输入",
              },
              age: {
                label: "年龄",
                type: "input",
              },
            },
          },
        },
        table: {
          setting: {
            columns: [
              { type: "selection" },
              {
                label: "姓名",
                prop: "name",
              },
              {
                label: "成绩",
                children: [
                  {
                    label: "数学",
                    prop: "math",
                  },
                  {
                    label: "语言",
                    children: [
                      {
                        label: "中文",
                        prop: "chinese",
                        slotName: "chinese",
                      },
                      {
                        label: "英文",
                        prop: "english",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        },
        pagination: {},
      },
      search: {
        name: "小明",
        age: 12,
      },
      page: {
        page: 1,
        pageSize: 10,
      },
      data: [],
    };
  },
  methods: {
    change({ combine, search, pagination }) {
      console.log(combine, search, pagination);
      this.data = [];
      window.setTimeout(() => {
        this.data = [
          { name: "小明", english: 90, chinese: 60, math: 71 },
          { name: "小王", english: 93, chinese: 20, math: 78 },
          { name: "小刚", english: 92, chinese: 40, math: 98 },
          { name: "小白", english: 91, chinese: 60, math: 88 },
        ];
      }, 300);
    },
    clear() {
      this.$refs.rolePanel.table.clearSelection();
    },
  },
};
</script>
<style scoped>
.ez-panel >>> table {
  margin: 0px !important;
}
</style>
