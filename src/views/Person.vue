<template>
  <div>
    <bulma-panel title="Pessoa">
      <bulma-form ref="form" @submit="save()">
        <bulma-input v-model="form.name" title="Nome" placeholder="Nome da pessoa" focus></bulma-input>
        <bulma-input v-model="form.age" title="Idade" placeholder="Idade da pessoa" type="number"></bulma-input>
        <bulma-select v-model="form.sex" title="Sexo" placeholder="Sexo da pessoa" :options="domainSex"></bulma-select>
        <div class="field is-grouped">
          <p class="control"><bulma-button class="is-primary" type="submit">Salvar</bulma-button></p>
          <p class="control"><bulma-button class="is-primary is-outlined" @click="$refs.form.clear()">Limpar</bulma-button></p>
        </div>
      </bulma-form>
      <hr>
      <bulma-grid :columns="columns" :rows="rows" @click-row="viewPerson"></bulma-grid>
    </bulma-panel>

    <bulma-modal ref="modal" title="Visualizar pessoa">
      <div class="content" v-for="col in columns">
        <h5 class="title">{{ col.label }}</h5>
        <h6 class="subtitle">
          <small><i>{{ selected[col.name] || 'Nenhum' }}</i></small>
        </h6>
      </div>
      <template slot="footer">
        <bulma-button class="is-danger is-outlined is-pulled-right" @click="remove(selected)">Excluir</bulma-button>
      </template>
    </bulma-modal>
  </div>
</template>

<script>
import BulmaButton from '@/components/Button';
import BulmaForm from '@/components/Form';
import BulmaGrid from '@/components/Grid';
import BulmaInput from '@/components/Input';
import BulmaModal from '@/components/Modal';
import BulmaPanel from '@/components/Panel';
import BulmaSelect from '@/components/Select';

export default {
  name: 'app',
  components: {
    BulmaButton,
    BulmaForm,
    BulmaGrid,
    BulmaInput,
    BulmaModal,
    BulmaPanel,
    BulmaSelect,
  },
  data() {
    return {
      domainSex: ['Feminino', 'Masculino'],
      form: { name: null, age: null, sex: null },
      columns: [
        { name: 'name', label: 'Nome' },
        { name: 'age', label: 'Idade' },
        { name: 'sex', label: 'Sexo' },
      ],
      rows: [],
    };
  },
  computed: {
    selected() {
      return this.rows.find(row => row.selected) || {};
    },
  },
  methods: {
    save() {
      if (this.form.name || this.form.age || this.form.sex) {
        this.rows.push({ ...this.form });
        this.$refs.form.clear();
      }
    },
    viewPerson(person) {
      this.rows = this.rows.map(row => ({ ...row, selected: row === person }));
      this.$refs.modal.open();
    },
    remove(row) {
      this.rows.splice(this.rows.indexOf(row), 1);
      this.$refs.modal.close();
    },
  },
};
</script>

<style lang="scss">
@import '../assets/theme';

body,
html {
  height: 100%;
}

body {
  background-color: $light;
}
</style>
