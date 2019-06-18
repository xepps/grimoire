/* eslint-disable import/no-unresolved */
import { createLocalVue, shallowMount } from '@vue/test-utils';
import HeroSearch from '@/components/HeroSearch.vue';
import BootstrapVue from 'bootstrap-vue';
import SearchBar from '@/components/SearchBar.vue';

const localVue = createLocalVue();

localVue.use(BootstrapVue);

const mountComponent = () => shallowMount(HeroSearch, { localVue });

describe('HelloWorld.vue', () => {
  describe('Random header', () => {
    it('first example', () => {
      Math.random = jest.fn().mockReturnValueOnce(0);
      const wrapper = mountComponent();

      expect(wrapper.find('.hero').text()).toBe('Discover\npowerful and forgotten spells');
    });
    it('second example', () => {
      Math.random = jest.fn().mockReturnValueOnce(0.5);

      const wrapper = mountComponent();
      expect(wrapper.find('.hero').text()).toBe('Explore\nlong lost arcane lore');
    });
    it('third example', () => {
      Math.random = jest.fn().mockReturnValueOnce(0.99);

      const wrapper = mountComponent();
      expect(wrapper.find('.hero').text()).toBe('Delve\ninto the misty tomes');
    });
  });

  it('should include the search bar', () => {
    Math.random = jest.fn().mockReturnValueOnce(0.99);

    const wrapper = mountComponent();
    expect(wrapper.find(SearchBar)).toBeDefined();
  });
});
