import Vue from 'vue';
import BulmaInput from '@/components/Input';

describe('Input.vue', () => {
  const getComponent = () => new Vue({
    components: { BulmaInput },
    template: '<bulma-input ref="input" v-model="value"></bulma-input>',
    data: { value: 'Fernanda' },
  });

  it('should bind value', () => {
    const vm = getComponent().$mount();

    expect(vm.$refs.input.value).to.equal('Fernanda');
  });

  it('should update value', (done) => {
    const vm = getComponent().$mount();

    vm.value = 'Teste';

    Vue.nextTick(() => {
      expect(vm.$refs.input.value).to.equal('Teste');
      expect(vm.$refs.input.$el.querySelector('input').value).to.equal('Teste');
      done();
    });
  });

  it('should emit value', () => {
    const vm = getComponent().$mount();

    vm.$refs.input.$emit('input', '');

    expect(vm.value).to.equal('');
  });
});
