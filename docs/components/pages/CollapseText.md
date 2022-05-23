# CollapseText 折叠文本

<CollapseText/>

```html
<template>
  <ez-collapse-text
    text="小草偷偷地从土里钻出来，嫩嫩的，绿绿的。"
    :limit="10"
    :expand="false"
    @change="handleChange"
  ></ez-collapse-text>
</template>
<script>
export default {
  methods: {
    handleChange(val) {
      console.log(val);
    },
  },
};
</script>
```

ezCollapseText属性
|参数|说明|类型|可选值|默认值|
|-|-|-|-|-|
|text|文本内容|string|-|-|
|limit|文本长度限制，超出折叠|number|-|10|
|expand|false:折叠状态，true展开状态|string|-|false|

ezCollapseText事件
|事件名称|说明|回调参数|
|-|-|-|
|change|展开折叠时的回调|type:展开折叠状态|

ezCollapseText插槽
|name|说明|
|-|-|
|fold|收起按钮，默认:'收起'|
|unfold|展开按钮，默认:'展开'|