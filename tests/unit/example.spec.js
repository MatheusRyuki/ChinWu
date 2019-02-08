import { shallowMount } from '@vue/test-utils';
import Header from '@/components/Home/teste.vue';


describe('Header.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'Idioma';
    const wrapper = shallowMount(Header, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
