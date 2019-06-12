/* eslint-disable import/no-unresolved */
import { shallowMount } from '@vue/test-utils';
import Home from '@/views/Home.vue';
import SearchResults from '@/components/SearchResults.vue';
import HeroSearch from '@/components/HeroSearch.vue';

describe('HelloWorld.vue', () => {
  it('renders a header', () => {
    const wrapper = shallowMount(Home);
    expect(wrapper.find(HeroSearch)).toBeDefined();
  });

  it('renders a space for the results', () => {
    const wrapper = shallowMount(Home);
    expect(wrapper.find(SearchResults)).toBeDefined();
  });
});
