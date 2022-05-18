<template>
  <div class="ez-table">
    <el-table
      style="width: 100%"
      ref="ezTable"
      v-on="$listeners"
      v-bind="$attrs"
      v-loading="loading"
    >
      <template #append>
        <slot name="ezAppend"></slot>
      </template>
      <el-table-column-tree
        :columnNode="item"
        v-for="(item, index) in tableJson.columns"
        :key="index"
      >
        <template v-for="slot in Object.keys($scopedSlots)" #[slot]="scope">
          <slot :name="slot" v-bind="scope" />
        </template>
      </el-table-column-tree>
    </el-table>
    <div class="pagination" v-if="$scopedSlots.ezPagination">
      <slot name="ezPagination"></slot>
    </div>
  </div>
</template>

<script>
import ElTableColumnTree from "./ElTableColumnTree.vue";
export default {
  inheritAttrs: false,
  name: "ezTable",
  props: {
    tableJson: {
      type: Object,
      required: true,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    ElTableColumnTree,
  },
  data() {
    return {
      ezTable: null,
    };
  },
  mounted() {
    this.ezTable = this.$refs.ezTable;
  },
};
</script>
<style scoped>
.ez-table >>> .el-table td {
  padding: 8px 0;
}

.ez-table >>> .el-table__header th {
  color: #636365;
  font-weight: 700;
}

.ez-table .pagination {
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
}
</style>
