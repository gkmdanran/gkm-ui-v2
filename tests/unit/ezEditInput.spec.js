
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
        const wrapper = shallowMount(ezEditInput, {
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
    it('测试必填校验，及错误展示', async () => {
        const wrapper = shallowMount(ezEditInput, {
            propsData: {
                value: '',
                mode: "edit",
                required: true,
                showError: true
            },
            components: {
                elButton: Button,
                elInput: Input
            }
        })
        await wrapper.find('.inputbtn').vm.$emit('click')
        expect(wrapper.find('.err-msg').text()).toBe('内容不能为空')
        expect(wrapper.emitted('error')[0]).toEqual(['内容不能为空'])
    })
    it('测试校验函数', async () => {
        function verifyValue(value) {
            return new Promise((resolve, reject) => {
                let reg = /^[\A-\F0-9]+$/;
                if (!reg.test(value)) return reject("格式有误");
                resolve(value);
            });
        }
        const wrapper = mount(ezEditInput, {
            propsData: {
                value: '99*',
                mode: "edit",
                validator: verifyValue
            },
            components: {
                elButton: Button,
                elInput: Input
            }
        })
        const validFn = wrapper.vm.validator
        const cmpValue = wrapper.vm.value
        await expect(validFn(cmpValue)).rejects.toBe('格式有误');
    })
})
