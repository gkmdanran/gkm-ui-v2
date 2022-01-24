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
    message: '即将跳转至百度',
    type: 'info',
    confirmText: '去百度',
    cancelText: '不想去',
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






## ezCollapseList

## ezCollapseText



