  
<template>
    <div class="footer">
        © {{ thisYear }} Kanahiro Iguchi.
        <a href="#" v-b-modal.modal-license>license</a>
        <b-modal id="modal-license" title="license" hide-footer>
            <div class="my-4">
                <div>
                    <p>
                        【出典：静岡県ポイントクラウドデータベース
                        <a href='https://creativecommons.org/licenses/by/4.0/legalcode.ja'>CCライセンス 表示 4.0 国際</a>
                    </p>
                </div>
            </div>
        </b-modal>
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