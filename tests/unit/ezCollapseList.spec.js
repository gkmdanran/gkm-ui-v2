import { shallowMount } from '@vue/test-utils'
import ezCollapseList from '../../packages/ezCollapseList/index'
import { Button } from 'element-ui';


describe('ezCollapseList.vue', () => {
    const data = ['小明', '小红', '小刚']
    it('测试默认折叠数组是否为1', () => {
        const wrapper = shallowMount(ezCollapseList, {
            propsData: { data },
            components: {
                elButton: Button,
            }
        })
        const visibleArr = wrapper.findAll('.collapse-item').filter(w => w.isVisible())
        expect(visibleArr.length).toBe(1)
    })
    it('测试limit控制数组折叠长度是否有效', () => {
        const wrapper = shallowMount(ezCollapseList, {
            propsData: { data, limit: 2 },
            components: {
                elButton: Button,
            }
        })
        const visibleArr = wrapper.findAll('.collapse-item').filter(w => w.isVisible())
        expect(visibleArr.length).toBe(2)
    })
    it('测试展开折叠点击是否有效', () => {
        const wrapper = shallowMount(ezCollapseList, {
            propsData: {
                data
            },
            components: {
                elButton: Button
            }
        })
        wrapper.find('.unfold-btn').vm.$emit('click')
        expect(wrapper.emitted().change[0]).toEqual([true])
        wrapper.find('.fold-btn').vm.$emit('click')
        expect(wrapper.emitted().change[1]).toEqual([false])
    })
    it('测试文本长度小于limit时不显示按钮', () => {
        const wrapper = shallowMount(ezCollapseList, {
            propsData: {
                data,
                limit: 10
            },
            components: {
                elButton: Button
            }
        })
        expect(wrapper.findAll('.unfold-btn').length).toBe(0)
        expect(wrapper.findAll('.fold-btn').length).toBe(0)
    })
    it('测试按钮插槽', () => {
        const wrapper = shallowMount(ezCollapseList, {
            propsData: {
                data
            },
            slots: {
                unfold: "点击展开",
                fold: "点击收起"
            },
            components: {
                elButton: Button
            }
        })
        expect(wrapper.find('.unfold-btn').text()).toBe('点击展开')
        expect(wrapper.find('.fold-btn').text()).toBe('点击收起')
    })
    it('测试作用域插槽', () => {
        const wrapper = shallowMount(ezCollapseList, {
            propsData: {
                data
            },
            scopedSlots: {
                default: "<p class='test-slot'>{{props.index}},{{props.row}}</p>"
            },
            components: {
                elButton: Button
            }
        })
        expect(wrapper.find('.test-slot').text()).toBe('0,小明')
    })
})
