import { mount } from '@vue/test-utils'
import FormArticle from '../../components/Articles/FormArticle'

describe('tests in FormArticle component', () => {
  test('should emit event to fields form is error', () => {
    const wrapper = mount(FormArticle)
    const button = wrapper.find('button')
    button.trigger('submit')

    expect(wrapper.emitted()).toHaveProperty('validate-error')
  })

  test('should validate-error event emit a string', () => {
    const wrapper = mount(FormArticle)
    const button = wrapper.find('button')
    button.trigger('submit')

    const EventValidateError = wrapper.emitted('validate-error')
    expect(EventValidateError).toHaveLength(1)
  })
})
