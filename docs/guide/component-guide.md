# 公共组件

## ezButton
### 基本用法
用法与el-button一致
<ezButtonExample1/>

```html
<ez-button>测试按钮</ez-button>
<ez-button type="text">测试按钮</ez-button>
<ez-button type="danger">测试按钮</ez-button>
<ez-button type="danger" icon="el-icon-delete" circle></ez-button>
```

### 确认弹窗
点击按钮弹出二次确认弹窗
<ezButtonExample2/>

```html
 <ez-button
    :confirm="{ message: '确认删除此数据吗?' }"
    type="primary"
    @confirmClick="handleConfirClick"
    @cancelClick="handleCancelClick"
    >删除数据</ez-button
>
<ez-button
    :confirm="{
    title:'跳转',
    message: '即将跳转',
    type: 'info',
    confirmText: '同意',
    cancelText: '拒绝',
    }"
    @confirmClick="handleConfirClick"
    @cancelClick="handleCancelClick"
    type="text"
    >跳转网页</ez-button
>
<script>
export default {
  methods: {
    handleConfirClick() {
      console.log("确认弹窗");
    },
    handleCancelClick() {
      console.log("取消弹窗");
    },
  },
};
</script>
```

confirm属性值
|参数|说明|类型|可选值|默认值|
|-|-|-|-|-|
|title|标题|string|-|提示|
|message|提示信息|string|-|必填|
|type|图标类型|string|success / info / warning / error|warning|
|confirmText|确认按钮文案|string|-|确定|
|cancelText|取消按钮文案|string|-|取消|

事件
|事件名称|说明|回调参数|
|-|-|-|
|confirmClick|点击确认按钮后的回调|-|
|cancelClick|点击取消按钮后的回调|-|




## ezCollapseList

### 基本用法
列表展开与折叠
<ezCollapseListExample1/>
```html
<ez-collapse-list :data="list" :limit="2" :expand="true">
  <template #default="scope">
    <span style="color: blue">{{ scope.index }}</span>
    <span style="color: #ccc">{{ scope.item.name }}</span>
    <span style="color: red">{{ scope.item.age }}</span>
  </template>
</ez-collapse-list>
<script>
export default {
  data() {
    return {
      list: [
        { name: "小明", age: 10 },
        { name: "小红", age: 12 },
        { name: "小刚", age: 13 },
      ],
    };
  },
};
</script>
```

属性值
|参数|说明|类型|可选值|默认值|
|-|-|-|-|-|
|expand|展开状态|boolean|-|false|
|data|列表数据|array|-|[]|
|limit|最多显示的行数，超出隐藏|number|-|1|

插槽
|name|说明
|-|-|
|-|自定义行内容。参数为(item,index)|


## ezCollapseText

### 基本用法
文字的展开与折叠

<ezCollapseTextExample1/>

```html
<ez-collapse-text
  style="width: 100px"
  :text="'JS是一种具有函数优先的轻量级，解释型或即时编译型的编程语言'"
  :limit="10"
  :expand="true"
>
</ez-collapse-text>
```

属性值
|参数|说明|类型|可选值|默认值|
|-|-|-|-|-|
|expand|展开状态|boolean|-|false|
|text|文本内容|string|-|''|
|limit|最多显示的文本数|number|-|10|

## ezContainer

### 基本用法
带返回功能的layout
<ezContainerExample1/>

```html
<ez-container
  @back="handleBack"
  style="height: 100%"
  icon="el-icon-d-arrow-left"
  backText="返回主页"
  title="用户列表"
>
  <div style="height: 200px">vue</div>
  <div style="height: 200px">react</div>
  <div style="height: 200px">node</div>
  <div style="height: 200px">webpack</div>
</ez-container>
<script>
export default {
  methods: {
    handleBack() {
      alert("back");
    },
  },
};
</script>
```

属性值
|参数|说明|类型|可选值|默认值|
|-|-|-|-|-|
|icon|返回icon样式|string|elementui所有icon|el-icon-arrow-left|
|backText|返回文本内容|string|-|返回|
|title|标题|string|-|''|

事件
|事件名称|说明|回调参数|
|-|-|-|
|back|点击返回按钮的回调|-|

## ezTable
### 基本用法
采用json的方式渲染el-table表格

<ezTableExample1/>

```html
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
<script>
export default {
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
      this.$refs.demo.elTable.clearSelection();     //需要加上.elTable
    },
  },
};
</script>
```
属性值(支持el-table的所有Table Attributes)
|参数|说明|类型|可选值|默认值|
|-|-|-|-|-|
|tableJson|json配置|object|-|必填|
|loading|表格loading效果|boolean|-|false|

tableJson配置
|参数|说明|类型|可选值|默认值|
|-|-|-|-|-|
|title|表格标题|string|-|''|
|columns|列配置|array|-|[]|

columns配置(支持el-table的所有Table-column Attributes)
|参数|说明|类型|可选值|默认值|
|-|-|-|-|-|
|slotName|内容插槽|string|-|-|
|children|嵌套表格|array|-|-|
|headerSlot|头部插槽|string|-|-|

事件(支持el-table的所有Table Events)

方法(支持el-table的所有Table Methods,调用方式有变化,详情见样例)

插槽
|name|说明
|-|-|
|ez-header|表格标题区域插槽|
|ez-tophandler|表格操作按钮区域插槽|
|ez-footer|表格底部区域插槽|
|slotName或headerSlot定义的插槽|-|

## ezUpload

### 基本用法
与el-upload用法一致，但是function类型的属性都转为事件形式。
<ezUploadExample1/>

```html
<ez-upload
  class="upload-demo"
  action="https://jsonplaceholder.typicode.com/posts/"
  @change="handleChange"
  :auto-upload="false"
  :extensions="['jpg', 'png']"
  fileSize="500kb"
  multiple
  :limit="3"
  :file-list="fileList"
  >
  <el-button size="small" type="primary">点击上传</el-button>
  <div slot="tip" class="el-upload__tip">
    只能上传jpg/png文件，且不超过500kb
  </div>
</ez-upload>
<script>
export default {
  data() {
    return {
      fileList: [
        {
          name: "food.jpeg",
          url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
        },
        {
          name: "food2.jpeg",
          url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
        },
      ],
    };
  },
  methods: {
    handleChange(file, fileList) {
      console.log(file, fileList);
    },
  },
};
</script>
```

拓展属性值
|参数|说明|类型|可选值|默认值|
|-|-|-|-|-|
|fileSize|可上传的文件大小|string|kb / mb / gb|-|
|extensions|可以上传的后缀名|array|-|-|
|showPreviewDialog|是否开启预览dialog|boolean|-|true|

事件
|事件名称|说明|
|-|-|
|preview|用法和参数与on-preview一致|
|remove|用法和参数与on-remove一致|
|success|用法和参数与on-success一致|
|error|用法和参数与on-error一致|
|progress|用法和参数与on-progress一致|
|change|用法和参数与on-change一致|
|exceed|用法和参数与on-exceed一致|
|beforeUpload|用法和参数与before-upload一致|
|beforeRemove|用法和参数与before-remove一致|

## ezEditInput
### 基本用法
部分属性和el-input一致
<ezEditInputExample1/>
```html
<ez-edit-input
  v-model="value"
  mode="read"
  type="input"
  required
  @change="handleChange"
  @error="handleError"
  :reg="/^(([a-z]+[0-9]+)|([0-9]+[a-z]+))[a-z0-9]*$/i"
></ez-edit-input>
<ez-edit-input
  v-model="value2"
  mode="read"
  type="textarea"
  required
  @change="handleChange"
  @error="handleError"
></ez-edit-input>
<script>
export default {
  name: "ezEditInputExample1",
  data() {
    return {
      value: "gkmui123",
      value2: "gkmui123",
    };
  },
  methods: {
    handleChange(v) {
      console.log(v);
    },
    handleError(v) {
      alert("格式不规范");
      console.log(v);
    },
  },
};
</script>
```
属性值
|参数|说明|类型|可选值|默认值|
|-|-|-|-|-|
|v-model|双向绑定文本|string|-|必填|
|moded|读、编辑模式|string|edit/read|read|
|required|是否必填|boolean|-|false|
|reg|正则表达式|RegExp|-|-|