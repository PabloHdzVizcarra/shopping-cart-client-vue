import { mount } from '@vue/test-utils'
import ListArticles from '@/components/Articles/ListArticles'

describe('test in ListArticles component', () => {
  test('should display a paragraph with a warning when the prop articles is an empty array', () => {
    const mv = mount(ListArticles, {
      props: {
        articles: []
      }
    })
    expect(mv.get('[data-test="warning"]').element.tagName).toBe('P')
  })

  test('should not display the warning if the prop articles has any value', () => {
    const mv = mount(ListArticles, {
      props: {
        articles: [
          { name: 'milk' }
        ]
      }
    })

    expect(mv.find('[data-test="warning"]').exists()).toBe(false)
  })
})
