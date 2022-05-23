# Button 按钮

基础的按钮

<ButtonCommon />

```html
<ez-button>默认按钮</ez-button>
<ez-button type="primary">主要按钮</ez-button>
<ez-button type="success">成功按钮</ez-button>
<ez-button type="info">信息按钮</ez-button>
<ez-button type="warning">警告按钮</ez-button>
<ez-button type="danger">危险按钮</ez-button>

<ez-button plain>朴素按钮</ez-button>
<ez-button type="primary" plain>主要按钮</ez-button>
<ez-button type="success" plain>成功按钮</ez-button>
<ez-button type="info" plain>信息按钮</ez-button>
<ez-button type="warning" plain>警告按钮</ez-button>
<ez-button type="danger" plain>危险按钮</ez-button>

<ez-button round>圆角按钮</ez-button>
<ez-button type="primary" round>主要按钮</ez-button>
<ez-button type="success" round>成功按钮</ez-button>
<ez-button type="info" round>信息按钮</ez-button>
<ez-button type="warning" round>警告按钮</ez-button>
<ez-button type="danger" round>危险按钮</ez-button>

<ez-button icon="el-icon-search" circle></ez-button>
<ez-button type="primary" icon="el-icon-edit" circle></ez-button>
<ez-button type="success" icon="el-icon-check" circle></ez-button>
<ez-button type="info" icon="el-icon-message" circle></ez-button>
<ez-button type="warning" icon="el-icon-star-off" circle></ez-button>
<ez-button type="danger" icon="el-icon-delete" circle></ez-button>
```

确认弹窗按钮
<ButtonConfirm />

```html
<template>
  <div>
    <ez-button
      confirm="确认删除吗？"
      type="danger"
      @confirmClick="confirmDel"
      @cancelClick="cancelDel"
      >删除</ez-button
    >
    <ez-button
      :confirm="{
        message: '确认删除吗',
        title: '提示',
        type: 'info',
        confirmText: '确认删除',
        cancelText: '我再想想',
      }"
      icon="el-icon-delete"
      circle
      type="danger"
      @confirmClick="confirmDel"
      @cancelClick="cancelDel"
    />
  </div>
</template>
<script>
export default {
  methods: {
    confirmDel() {
      console.log("删除成功");
    },
    cancelDel() {
      console.log("已取消");
    },
  },
};
</script>
```


节流按钮
<ButtonClick />

```html
<template>
  <div>
    <ez-button :throttle="2000" @click="handleClick">2秒只能点一次</ez-button>
    <ez-button :throttle="-1" @click="handleClick2">手动解除</ez-button>
    <ez-button :throttle="-1" confirm="确认吗" @confirmClick="handleClick3"
      >删除</ez-button
    >
  </div>
</template>
<script>
export default {
  methods: {
    handleClick(event) {
      console.log("click", event);
    },
    handleClick2({ event, status }) {
      console.log("click2", event);
      setTimeout(() => {
        status.disabled = false;
      }, 3000);
    },
    handleClick3(status) {
      console.log("click3");
      setTimeout(() => {
        status.disabled = false;
      }, 3000);
    },
  },
};
</script>
```


ezButton属性和插槽均可参考[ElementUI](https://element.eleme.cn/#/zh-CN/component/button)

ezButton扩展属性
|参数|说明|类型|可选值|默认值|
|-|-|-|-|-|
|confirm|二次弹窗配置|string / confirmObj|-|-|
|throttle|节流间隔时间，-1需要手动解除按钮限制|number|-|0|

confirmObj
|参数|说明|类型|可选值|默认值|
|-|-|-|-|-|
|title|标题|string|-|'提示'|
|message|提示信息|string|-|必填|
|type|图标类型|string|success / info / warning / error|'warning'|
|confirmText|确认按钮文案|string|-|'确定'|
|cancelText|取消按钮文案|string|-|'取消'|

ezButton事件
|事件名称|说明|回调参数|
|-|-|-|
|confirmClick|点击确认按钮后的回调|throttle为-1时：status|
|cancelClick|点击取消按钮后的回调|-|
|click|点击按钮时的回调|throttle为-1时：{event,status}|
