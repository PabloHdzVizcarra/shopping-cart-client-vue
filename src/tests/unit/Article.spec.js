import { mount } from '@vue/test-utils'
import Article from '@/components/Articles/Article'

describe('test in Article component', () => {
  test('should render correctly with props', () => {
    const wrapper = mount(Article, {
      props: {
        name: 'milk',
        price: 30,
        brand: 'bestQuality'
      }
    })

    expect(wrapper.text()).toContain('milk')
    expect(wrapper.text()).toContain('30')
    expect(wrapper.text()).toContain('bestQuality')
  })
})
