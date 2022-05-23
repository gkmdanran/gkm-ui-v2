# Container 容器

<Container/>

```html
<template>
  <div class="test-container">
    <ez-container scroll title="容器" style="height: 600px">
      <div style="height: 500px">test1</div>
      <div style="height: 500px">test2</div>
    </ez-container>
    <ez-container
      :scroll="false"
      title="容器2"
      style="height: 600px"
      @back="handelBack"
    >
      <div style="height: 100%">test3</div>
    </ez-container>
  </div>
</template>
<script>
export default {
  methods: {
    handelBack() {
      console.log("back");
    },
  },
};
</script>
```

ezContainer属性
|参数|说明|类型|可选值|默认值|
|-|-|-|-|-|
|title|标题|string|-|-|
|scroll|是否允许滚动|boolean|-|true|

ezContainer事件
|事件名称|说明|回调参数|
|-|-|-|
|back|点击返回时回调|-|

ezContainer插槽
|name|说明|
|-|-|
|—|自定义容器内容|
|backButton|返回按钮|
|rightButton|右上方按钮区域|