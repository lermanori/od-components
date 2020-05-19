// test/CustomCard.spec.js

// Libraries
import Vue from 'vue'
import Vuetify from 'vuetify'

// Components
import listItem from '@/components/listItem.vue'

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
    const wrapper = mount(listItem, {
      localVue,
      vuetify,
      slots: {
        default: '<h4>Foobar</h4>',
      },
    })
    const col = wrapper.find('h4')
    expect(col.text()).toBe('Foobar')
  })
 
})