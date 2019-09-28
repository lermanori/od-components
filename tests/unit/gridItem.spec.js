// test/CustomCard.spec.js

// Libraries
import Vue from 'vue'
import Vuetify from 'vuetify'

// Components
import gridItem from '@/components/gridItem.vue'

// Utilities
import {
  mount,
  createLocalVue
} from '@vue/test-utils'

const localVue = createLocalVue()

describe('gridItem.vue', () => {
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  it('should have custom slot', () => {
    const wrapper = mount(gridItem, {
      localVue,
      vuetify,
      slots: {
        default: '<h4>Foobar</h4>',
      },
    })
    const col = wrapper.find('h4')
    expect(col.text()).toBe('Foobar')
  })
  // it('should have a custom title and match snapshot', () => {
  //   const wrapper = mount(gridItem, {
  //     localVue,
  //     vuetify,
  //     propsData: {
  //       title: 'Foobar',
  //     },
  //   })

  //   // With jest we can create snapshot files of the HTML output
  //   expect(wrapper.html()).toMatchSnapshot()

  //   // We could also verify this differently
  //   // by checking the text content
  //   const title = wrapper.find('.v-card-title > span')

  //   expect(title.text()).toBe('Foobar')
  // })

  // it('should emit an event when the action v-btn is clicked', () => {
  //   const wrapper = mount(CustomCard, {
  //     localVue,
  //     vuetify,
  //   })

  //   const event = jest.fn()
  //   const button = wrapper.find('.v-btn')

  //   // Here we bind a listener to the wrapper
  //   // instance to catch our custom event
  //   // https://vuejs.org/v2/api/#Instance-Methods-Events
  //   wrapper.vm.$on('action-btn:clicked', event)

  //   expect(event).toHaveBeenCalledTimes(0)

  //   // Simulate a click on the button
  //   button.trigger('click')

  //   // Ensure that our mock event was called
  //   expect(event).toHaveBeenCalledTimes(1)
  // })
})