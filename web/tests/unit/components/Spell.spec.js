import { shallowMount } from '@vue/test-utils';
import Spell from '@/components/Spells.vue';

describe('Spells.vue', () => {
  it('renders', () => {
    const component = shallowMount(Spell);
    expect(component.isVueInstance()).toBe(true);
  });

  it('returns data to the page', () => {
    const cmp = shallowMount(Spell, {
      propsData: {
        uri: 'invulnerability',
      },
    });
    expect(cmp.props().uri).toBe('invulnerability');
  });
});
