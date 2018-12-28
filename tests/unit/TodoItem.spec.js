import TodoItem from '@/components/TodoItem.vue';
import {
    shallowMount
} from '@vue/test-utils';
import {
    renderToString
} from '@vue/server-test-utils';
import {
    createRenderer
} from 'vue-server-renderer';

describe('TodoItem test', () => {
    it('finished render', () => {
        const wrapper = shallowMount(TodoItem, {
            propsData: {
                item: {
                    finished: true,
                    content: 'test TodoItem'
                }
            }
        });
        const checkbox = wrapper.find('input'),
            span = wrapper.find('span'),
            button = wrapper.find('button');
        expect(checkbox.element.checked).toBe(true)
        expect(span.text()).toBe('test TodoItem')
        expect(button.isVisible()).toBe(false)
    })

    it('unfinished render', () => {
        const wrapper = shallowMount(TodoItem, {
            propsData: {
                item: {
                    finished: false,
                    content: 'play basketball'
                }
            }
        });
        const checkbox = wrapper.find('input'),
            span = wrapper.find('span'),
            button = wrapper.find('button');
        expect(checkbox.element.checked).toBe(false);
        expect(span.text()).toBe('play basketball');
        expect(button.isVisible()).toBe(false);

    })

    it('mouseover event', () => {
        const wrapper = shallowMount(TodoItem, {
            propsData: {
                item: {
                    finished: false,
                    content: 'test TodoItem'
                }
            }
        })
        const button = wrapper.find('button');
        wrapper.trigger("mouseover")
        expect(button.isVisible()).toBe(true)
    })

    it('mouseleave event', () => {
        const wrapper = shallowMount(TodoItem, {
            propsData: {
                item: {
                    finished: false,
                    content: 'test TodoItem'
                }
            }
        })
        const button = wrapper.find('button');
        wrapper.trigger("mouseover")
        wrapper.trigger('mouseleave')
        expect(button.isVisible()).toBe(false)

    })
})

describe('TodoItem snapshot test', () => {
    it('first render', () => {
        const wrapper = shallowMount(TodoItem, {
            propsData: {
                item: {
                    finished: true,
                    content: 'test TodoItem content change'
                }
            }
        })
        expect(wrapper.html()).toMatchSnapshot()
    })

    it('toggle checked', () => {
        const renderer = createRenderer();
        const wrapper = shallowMount(TodoItem, {
            propsData: {
                item: {
                    finished: true,
                    content: 'test TodoItem'
                }
            }
        })
        const checkbox = wrapper.find('input');
        checkbox.trigger('click');
        renderer.renderToString(wrapper.vm, (err, str) => {
            expect(str).toMatchSnapshot()
        })

    })
    
    it('mouseover', () => {
        const renderer = createRenderer();
        const wrapper = shallowMount(TodoItem, {
            propsData: {
                item: {
                    finished: false,
                    content: 'test TodoItem'
                }
            }
        })
        wrapper.trigger('mouseover');
        renderer.renderToString(wrapper.vm, (err, str) => {
            expect(str).toMatchSnapshot()
        })
    })
})