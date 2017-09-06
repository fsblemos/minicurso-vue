import Vue from 'vue';
import BulmaForm from '@/components/Form';
import BulmaInput from '@/components/Input';
import BulmaSelect from '@/components/Select';

describe('Form.vue', () => {
  it('should get controls', () => {
    const vm = new Vue({
      components: { BulmaForm, BulmaInput, BulmaSelect },
      template: `
        <bulma-form ref="form">
          <bulma-input></bulma-input>
          <bulma-input></bulma-input>
          <bulma-input></bulma-input>
          <bulma-select></bulma-select>
          <input/>
          <input/>
        </bulma-form>
      `,
    }).$mount();

    const controls = vm.$refs.form.controls();

    expect(controls).to.be.an('array').that.have.lengthOf(4);
    expect(controls.map(control => control.isControl)).not.include(false);
  });
});
