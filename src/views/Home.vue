<template>
  <div class="home">
    <ez-search
      :search-json="json"
      label-width="50px"
      @search="handleSearch"
    ></ez-search>
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
      json: {
        searchItems: [
          {
            type: "input",
            label: "姓名",
            prop: "name",
            layout: "250px",
          },
          {
            type: "select",
            label: "性别",
            prop: "sex",
            layout: "250px",
            selectOptions: [
              { label: "男", value: "1" },
              { label: "女", value: "0" },
            ],
          },
          {
            type: "datetime",
            label: "时间",
            prop: "date",
            layout: "500px",
            options: {
              type: "date",
              valueFormat: "yyyy-MM-dd",
            },
          },
        ],
      },
    };
  },
  created() {},
  methods: {
    handleSearch(v) {
      console.log(v);
    },
  },
};
</script>
