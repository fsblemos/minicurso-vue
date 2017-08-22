<template>
  <table class="table is-fullwidth">
    <thead>
      <tr>
        <th v-for="column in columns">{{ column.label }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in rows" @click="$emit('click-row', row)">
        <td v-for="column in columns">{{ row[column.name] }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'grid',
  props: {
    rows: Array,
    columns: Array,
  },
};
</script>

<style lang="scss" scoped>
tbody {
  tr {
    cursor: pointer;
  }
}
</style>
