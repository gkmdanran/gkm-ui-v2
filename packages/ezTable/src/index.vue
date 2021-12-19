<template>
  <div class="ez-table">
    <slot name="ez-header">
      <div class="ez-header">
        <div class="ez-title">{{ tableJson.title || "" }}</div>
        <div class="ez-tophandler">
          <slot name="ez-tophandler"> </slot>
        </div>
      </div>
    </slot>
    <el-table
      style="width: 100%"
      ref="eltable"
      v-on="$listeners"
      v-bind="$attrs"
      v-loading="loading"
    >
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
    <div class="ez-footer">
      <slot name="ez-footer"> </slot>
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
      elTable: null,
    };
  },
  mounted() {
    this.elTable = this.$refs.eltable;
  },
};
</script>
<style lang="less" scoped>
.ez-table {
  .ez-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px;
    .ez-title {
      font-size: 18px;
      color: #333333;
      font-weight: 700;
    }
  }
  .ez-footer {
    margin-top: 10px;
    display: flex;
    justify-content: flex-end;
  }
}
</style>
