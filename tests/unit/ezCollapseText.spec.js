import { shallowMount } from '@vue/test-utils'
import ezCollapseText from '../../packages/ezCollapseText/index'
import { Button } from 'element-ui';


describe('ezCollapseText.vue', () => {
    it('测试默认折叠长度是否为10', () => {
        const text = '测试文本测试文本测试文本'
        const wrapper = shallowMount(ezCollapseText, {
            propsData: { text },
            components: {
                elButton: Button
            }
        })
        expect(wrapper.find('.text').text()).toBe('测试文本测试文本测试...')
    })
    it('测试limit控制折叠长度是否有效', () => {
        const text = '测试文本测试文本测试文本'
        const limit = 11
        const wrapper = shallowMount(ezCollapseText, {
            propsData: { text, limit },
            components: {
                elButton: Button
            }
        })
        expect(wrapper.find('.text').text()).toBe('测试文本测试文本测试文...')
    })
    it('测试展开折叠点击是否有效', () => {
        const wrapper = shallowMount(ezCollapseText, {
            propsData: {
                text: "测试文本测试文本测试文本",
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
        const wrapper = shallowMount(ezCollapseText, {
            propsData: {
                text: "测试",
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
        const wrapper = shallowMount(ezCollapseText, {
            propsData: {
                text: "测试文本测试文本测试文本",
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
})
