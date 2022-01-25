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
  name: "ezCollapseListExample1",
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



