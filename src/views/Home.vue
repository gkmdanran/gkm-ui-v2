<template>
  <div class="home">
    <ez-menu :menu-json="menuJson" router></ez-menu>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      fileList: [],
      menuJson: {
        treeProps: {
          name: "txt",
          icon: "pic",
          path: "url",
          children: "menus",
          id: "ids",
        },
        menus: [
          {
            ids: "id1",
            txt: "1",
            url: "/1",
            pic: "el-icon-platform-eleme",
            menus: [
              {
                ids: "id1-1",
                txt: "1-1",
                url: "/1-1",
                pic: "el-icon-platform-eleme",
              },
              {
                ids: "id1-3",
                txt: "1-3",
                url: "/1-3",
                pic: "el-icon-platform-eleme",
                menus: [
                  {
                    ids: "id1-3-1",
                    txt: "1-3-1",
                    url: "/1-3-1",
                    pic: "el-icon-platform-eleme",
                  },
                ],
              },
            ],
          },
          {
            ids: "id2",
            txt: "2",
            url: "/2",
            pic: "el-icon-platform-eleme",
            menus: [],
          },
        ],
      },
    };
  },
  created() {},
  methods: {
    error(err) {
      console.log(err);
    },
  },
};
</script>
