/* eslint-disable import/no-unresolved */
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Home from '@/views/Home.vue';
import SearchResults from '@/components/SearchResults.vue';
import BootstrapVue from 'bootstrap-vue';

const localVue = createLocalVue();
localVue.use(BootstrapVue);

describe('HelloWorld.vue', () => {
  let wrapper = null;
  beforeEach(() => {
    wrapper = shallowMount(Home, { localVue });
  });

  it('renders a space for the results', () => {
    expect(wrapper.find(SearchResults)).toBeDefined();
  });
});
