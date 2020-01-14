<template>
    <div class="mapPane">
        <l-map
            :zoom="zoom"
            :center="center"
            :preferCanvas="true"
        >
            <l-control-scale
                position="bottomleft"
                :imperial="false"
                :metric="true"
            ></l-control-scale>

            <l-tile-layer
                :name="tileProvider.name"
                :visible="tileProvider.visible"
                :url="tileProvider.url"
                :attribution="tileProvider.attribution"
            ></l-tile-layer>

            <Vue2LeafletMarkerCluster :options="clusterOptions" >
                <LMarker v-for="anken in ankens" :key="anken.no" :lat-lng="makeLatLng(anken)" >
                    <LPopup :content="makeAnchor(anken)" @click="markerClicked(anken)"></LPopup>
                </LMarker>
            </Vue2LeafletMarkerCluster>
        </l-map>
    </div>
</template>

<script>
    import { latLng, icon, Icon } from 'leaflet'
    import {
        LMap,
        LTileLayer,
        LControlScale,
        LMarker,
        LPopup
    } from 'vue2-leaflet';
    import Vue2LeafletMarkerCluster from 'vue2-leaflet-markercluster'

    export default {
        name: 'MapPane',
        components: {
            LMap,
            LTileLayer,
            LControlScale,
            LMarker,
            LPopup,
            Vue2LeafletMarkerCluster
        },
        data() {
            return {
                center:[34.976564, 138.383789],
                zoom:10,
                tileProvider:{
                    name: 'OpenStreetMap',
                    visible: true,
                    url: 'https://tile.openstreetmap.jp/{z}/{x}/{y}.png',
                    attribution: "map data © OpenStreetMap contributors"
                },
                clusterOptions:{
                    disableClusteringAtZoom: 15
                },
                markerContent:""
            }
        },
        props: {
            ankens:Array
        },
        methods: {
            makeLatLng: function(anken) {
                return latLng(anken.lat, anken.lon)
            },
            makeAnchor: function(anken) {
                return "<a href='https://pointcloud.pref.shizuoka.jp/lasmap/ankendetail?ankenno=" + anken.no + "'>" + anken.name + "</a>"
            },
            markerClicked: function(anken) {
                console.log("clicked")
            }
        },
    }
</script>

<style scoped>
    @import "~leaflet.markercluster/dist/MarkerCluster.css";
    @import "~leaflet.markercluster/dist/MarkerCluster.Default.css";
    .mapPane {
        border: 1px solid #000000;
        height: 500px;
        margin: 0;
        text-align: left;
    }
</style>