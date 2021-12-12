const json = {
    tableAttributes: {
        border: true,
    },
    columns: [
        {
            prop: 'date',
            label: '日期',
            slotName: 'date',
        },
        {
            label: '配送信息',
            children: [
                {
                    prop: 'name',
                    label: '姓名',
                    width: 120,
                    slotName:'name'
                },
                {
                    label: '地址',
                    children:[
                        {
                            
                            label:'省份',
                            children:[
                                {
                                    label:'ceshi',
                                    children:[
                                        {
                                            label:'youb',
                                            prop:'zip',
                                            slotName:'zip'
                                        },

                                        
                                    ]
                                }
                            ]
                        },
                        {
                            prop:'city',
                            label:'城市',
                            slotName:"city"
                        }
                    ]
                },
              
            ]
        },
        
    ],
}
export default json