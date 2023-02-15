
<script>
export default {
    methods: {
        mouseleave( value ) {
            if (document != undefined) {
                console.log("runnn mouseleave in utils");
                let select = document.getElementsByClassName(value);
                for (let index = 0; index < select.length; index++) {
                select[index].blur();
                }
            }
        }
    }
}
</script>
