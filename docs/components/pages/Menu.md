# Menu 菜单


<MenuCommon />

ezMenu属性、事件、方法均可参考[ElementUI](https://element.eleme.cn/#/zh-CN/component/menu)

ezMenu扩展属性
|参数|说明|类型|可选值|默认值|
|-|-|-|-|-|
|menuJson|menu渲染配置|object|-|必填|

menuJson配置
|参数|说明|类型|可选值|默认值|
|-|-|-|-|-|
|menus|subMenu与menuItem配置对象|array|-|-|
|treeProps|配置对象别名|object|-|{icon:"icon",id:"id",children:"children", name:"name",path:"path"}|

配置对象
|参数|说明|类型|可选值|默认值|
|-|-|-|-|-|
|id|菜单唯一标识|string|-|-|
|icon|菜单图标|string|ElmentUI图标库|-|
|name|菜单名称|string|-|-|
|path|菜单路径|string|-|-|
|children|子菜单|array|-|-|
|attributes|ElementUI的[menu-item属性](https://element.eleme.cn/#/zh-CN/component/menu)|object|-|-|


ezMenu扩展事件
|事件名称|说明|回调参数|
|-|-|-|
|clickMenuItem|点击菜单每一项后的回调|menuJson.menus中的menuItem配置对象|