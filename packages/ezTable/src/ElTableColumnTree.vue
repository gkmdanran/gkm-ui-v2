<template>
  <el-table-column
    v-if="
      !columnNode.slotName &&
      !columnNode.prop &&
      !columnNode.children &&
      (!('show' in columnNode) ? true : columnNode.show)
    "
    v-bind="columnNode"
  >
    <template #header="scope">
      <slot :name="`${columnNode.headerSlot}`" v-bind="scope">
        {{ columnNode.label || "" }}
      </slot>
    </template>
  </el-table-column>

  <el-table-column
    v-else-if="
      columnNode.children &&
      columnNode.children.length > 0 &&
      (!('show' in columnNode) ? true : columnNode.show)
    "
    v-bind="columnNode"
  >
    <template #header="scope">
      <slot :name="`${columnNode.headerSlot}`" v-bind="scope">
        {{ columnNode.label || "" }}
      </slot>
    </template>
    <template>
      <el-table-column-tree
        :columnNode="subitem"
        :key="subindex"
        v-for="(subitem, subindex) in columnNode.children"
      >
        <template v-for="slot in Object.keys($scopedSlots)" #[slot]="scope">
          <slot :name="slot" v-bind="scope" />
        </template>
      </el-table-column-tree>
    </template>
  </el-table-column>

  <el-table-column
    v-else-if="!('show' in columnNode) ? true : columnNode.show"
    v-bind="columnNode"
  >
    <template slot-scope="scope">
      <slot :name="`${columnNode.slotName}`" v-bind="scope">
        {{ scope.row[`${columnNode.prop}`] }}
      </slot>
    </template>
    <template #header="scope">
      <slot :name="`${columnNode.headerSlot}`" v-bind="scope">
        {{ columnNode.label || "" }}
      </slot>
    </template>
  </el-table-column>
</template>

<script>
export default {
  name: "ElTableColumnTree",
  props: {
    columnNode: {
      type: Object,
      default: () => {},
    },
  },

  data() {
    return {};
  },
};
</script>
