import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import MIButton from '@/components/mi-button/index.vue';

describe('index.vue', () => {
  it('renders props.msg when passed', () => {
    const type = 'round';
    const color = 'primary';
    const wrapper = shallowMount(MIButton, {
      props: { type, color },
    });
    expect(wrapper.text()).to.include(type, color);
  });
});
