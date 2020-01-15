  
<template>
    <div class="footer">
        © {{ thisYear }} Kanahiro Iguchi.
    </div>
</template>

<script>
    export default {
        name: 'Header',
        data() {
            return {
            }
        },
        created() {
        },
        methods: {
        },
        computed: {
            thisYear: function() {
                let now = new Date(Date.now())
                return String(now.getFullYear())
            }
        }
    }
</script>

<style scoped>
    .footer {
        margin: 50px 0 0 0;
    }
</style>