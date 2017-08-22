<script>
export default {
  props: {
    focus: Boolean,
  },
  data() {
    return {
      isControl: true,
    };
  },
  mounted() {
    if (this.focus) {
      this.setFocus();
    }
  },
  methods: {
    clear() {
      this.$emit('input', null);

      if (this.focus) {
        this.setFocus();
      }
    },
  },
};
</script>
