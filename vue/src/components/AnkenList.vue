<template>
    <div class="ankenList">
        <b-table-simple
            hover
            small
        >
            <b-thead>
            <b-tr>
                <b-th>データ年度</b-th>
                <b-th>工事番号</b-th>
                <b-th>工事名</b-th>
            </b-tr>
            </b-thead>
            <b-tbody>
            <b-tr
                v-for="anken in ankens"
                :key="anken.no"
            >
                <b-th>{{ anken.year }}</b-th>
                <b-th>{{ anken.no }}</b-th>
                <b-th><a :href="makeUrl(anken.no)">{{ anken.name }}</a></b-th>
            </b-tr>
            </b-tbody>
        </b-table-simple>
    </div>
</template>

<script>
    export default {
        name: 'AnkensList',
        data() {
            return {
                filterd:[]
            }
        },
        props: {
            ankens:Array
        },
        methods: {
            makeUrl: function(ankenNo) {
                return "https://pointcloud.pref.shizuoka.jp/lasmap/ankendetail?ankenno=" + ankenNo
            },
            convertYYtoYYYY: function(yy) {
                let yyyy = 1988
                switch (yy) {
                    case "01":
                        yyyy = 2019
                        break;
                
                    default:
                        yyyy = yyyy + int(yy)
                        break;
                }
                return yyyy
            }
        }
    }
</script>

<style scoped>
</style>