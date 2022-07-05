
import { shallowMount } from '@vue/test-utils'
import ezButton from '../../packages/ezButton/index'
import { Button } from 'element-ui';

describe('ezButton.vue', () => {
    it('测试节流', (done) => {
        const wrapper = shallowMount(ezButton, {
            propsData: {
                throttle: 1000
            },
            components: {
                elButton: Button,
            }
        })
        wrapper.findComponent({ ref: 'ezButton' }).vm.$emit('click')
        wrapper.findComponent({ ref: 'ezButton' }).vm.$emit('click')
        expect(wrapper.emitted().click.length).toBe(1)
        setTimeout(() => {
            wrapper.findComponent({ ref: 'ezButton' }).vm.$emit('click')
            expect(wrapper.emitted().click.length).toBe(2)
            done()
        }, 1000)
    })
    it('测试throttle为-1时禁用按钮', () => {
        const wrapper = shallowMount(ezButton, {
            propsData: {
                throttle: -1
            },
            components: {
                elButton: Button,
            }
        })
        wrapper.findComponent({ ref: 'ezButton' }).vm.$emit('click')
        expect(wrapper.vm.$data.status.disabled).toBe(true)
    })
})
