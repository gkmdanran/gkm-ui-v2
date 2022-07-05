
import { shallowMount, mount } from '@vue/test-utils'
import ezEditInput from '../../packages/ezEditInput/index'
import { Button, Input } from 'element-ui';

describe('ezEditInput.vue', () => {
    const value = "测试数据value"
    it('测试双向绑定', () => {
        const wrapper = mount(ezEditInput, {
            propsData: {
                value,
                mode: "edit"
            },
            components: {
                elButton: Button,
                elInput: Input
            }
        })
        const textInput = wrapper.find('input[type="text"]')
        expect(textInput.element.value).toBe(value)
        textInput.setValue('some value')
        expect(wrapper.emitted('input')[0]).toEqual(['some value'])
    })
    it('测试点击确定后变成read模式并触发change', () => {
        const wrapper = mount(ezEditInput, {
            propsData: {
                value,
                mode: "edit"
            },
            components: {
                elButton: Button,
                elInput: Input
            }
        })
        wrapper.find('.inputbtn').vm.$emit('click')
        expect(wrapper.vm.selfMode).toBe('read')
        expect(wrapper.emitted('change')[0]).toEqual([value])
    })
})
