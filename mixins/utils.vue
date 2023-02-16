<script>
export default {
  methods: {
    mouseleave(value) {
      if (document != undefined) {
        let select = document.getElementsByClassName(value);
        for (let index = 0; index < select.length; index++) {
          select[index].blur();
        }
      }
    },
  },
};
</script>
