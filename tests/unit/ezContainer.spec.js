
import { shallowMount } from '@vue/test-utils'
import ezContainer from '../../packages/ezContainer/index'
import { Scrollbar } from 'element-ui';

describe('ezContainer.vue', () => {
    const title = "学生列表"
    it('测试title', () => {
        const wrapper = shallowMount(ezContainer, {
            propsData: {
                title,
            },
            components: {
                elScrollbar: Scrollbar,
            }
        })
        expect(wrapper.find('.title').text()).toBe(title)
    })
    it('测试插槽', () => {
        const wrapper = shallowMount(ezContainer, {
            slots: {
                default: '内容',
                rightButton: "右按钮",
                backButton: "返回按钮"
            },
            components: {
                elScrollbar: Scrollbar,
            }
        })
        expect(wrapper.find('.main-content').text()).toBe('内容')
        expect(wrapper.find('.right_btn').text()).toBe('右按钮')
        expect(wrapper.find('.back').text()).toBe('返回按钮')
    })
    it('测试back事件', async () => {
        const onBack = jest.fn()
        const wrapper = shallowMount(ezContainer, {
            listeners: {
                back: onBack
            },
            components: {
                elScrollbar: Scrollbar,
            }
        })
        wrapper.find('.back').trigger('click')
        expect(wrapper.emitted().back).toBeTruthy()
    })

})
