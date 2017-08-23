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
  methods: {
    clear() {
      this.$emit('input', null);

      if (this.focus) {
        this.setFocus();
      }
    },
    setFocus() {
      this.$refs.control.focus();
    },
  },
};
</script>
