import { createLocalVue, mount } from '@vue/test-utils';
import BootstrapVue from 'bootstrap-vue';
import axios from 'axios';
import SearchBar from '@/components/SearchBar.vue';
import store from '@/store/index';


const localVue = createLocalVue();
localVue.use(BootstrapVue);

const mountComponent = () => mount(SearchBar, { localVue, store });

describe('The Search Bar', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    axios.get = jest.fn().mockReturnValue({
      data: {
        hits: {
          total: {
            value: 1,
          },
          hits: 'a spell',
        },
      },
    });
  });

  it('makes a request for all spells when created', () => {
    mountComponent();
    expect(axios.get).toHaveBeenCalledWith('http://localhost/api/all', { params: { offset: 0 } });
  });

  it('makes a request to the search api when a query is entered', () => {
    const wrapper = mountComponent();

    wrapper.find('.searchBar__input').setValue('fire');
    wrapper.find('.searchBar__input').trigger('keyup');
    jest.runAllTimers();

    expect(axios.get.mock.calls[1]).toStrictEqual(['http://localhost/api/search', { params: { term: 'fire', offset: 0 } }]);
  });

  it('debounces entered text as not to fire too many requests', () => {
    const wrapper = mountComponent();

    wrapper.find('.searchBar__input').setValue('fi');
    wrapper.find('.searchBar__input').trigger('keyup');
    jest.advanceTimersByTime(200);

    wrapper.find('.searchBar__input').setValue('fire');
    wrapper.find('.searchBar__input').trigger('keyup');
    jest.advanceTimersByTime(300);

    expect(axios.get.mock.calls[1]).toStrictEqual(['http://localhost/api/search', { params: { term: 'fire', offset: 0 } }]);
  });
});
