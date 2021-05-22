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

  // test('fields must be cleared after the correct data has been added to the form', () => {
  //   const wrapper = mount(FormArticle)
  //   const button = wrapper.find('button')
  //   button.trigger('submit')
  //
  //   const inputName = wrapper.findAll('input')[0]
  //   const inputPrice = wrapper.findAll('input')[1]
  //   const inputBrand = wrapper.findAll('input')[2]
  //
  //   inputName.setValue('milk')
  //   inputPrice.setValue(15)
  //   inputBrand.setValue('Lala')
  //
  //   button.trigger('submit')
  //
  //   expect(wrapper.emitted()).toHaveProperty('save-article')
  //   expect(inputName.element.value).toBe('')
  //   expect(inputPrice.element.value).toEqual(0)
  //   expect(inputBrand.element.value).toEqual('')
  // })
})
