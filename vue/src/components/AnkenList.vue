<template>
    <div class="ankenList">
        <b-table-simple hover small>
            <b-thead>
            <b-tr>
                <b-th>工事番号</b-th>
                <b-th>工事名</b-th>
            </b-tr>
            </b-thead>
            <b-tbody>
            <b-tr
                v-for="anken in ankens"
                :key="anken.no"
            >
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
        props: {
            ankens:Array
        },
        methods: {
            makeUrl: function(ankenNo) {
                return "https://pointcloud.pref.shizuoka.jp/lasmap/ankendetail?ankenno=" + ankenNo
            }
        }
    }
</script>

<style scoped>
</style>