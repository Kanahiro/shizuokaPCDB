<template>
    <div class="mapPane">
        <MglMap
            class="MglMap"
            :mapStyle="mapStyle"
            :center="center"
            :zoom="zoom"
            :minZoom="zoom"
            :maxZoom="maxZoom"
        >
            <MglNavigationControl
                position="top-left"
            ></MglNavigationControl>
            <MglMarker
                v-for="anken in ankens"
                :key="anken.no"
                :coordinates="latlonAry(anken)"
            >
                <MglPopup>
                    <div>
                        <a :href="makeUrl(anken.no)"><h6>{{ anken.name }}</h6></a>
                    </div>
                </MglPopup>
            </MglMarker>
        </MglMap>
    </div>
</template>

<script>
    import Mapbox from "mapbox-gl";
    import {
        MglMap,
        MglNavigationControl,
        MglMarker,
        MglPopup
    } from "vue-mapbox";

    export default {
        name: 'MapPane',
        components: {
            MglMap,
            MglNavigationControl,
            MglMarker,
            MglPopup
        },
        props: {
            ankens:Array
        },
        data() {
            return {
                //以下のパラメータはすべてSizuokaPCDB準拠
              center:[138.383789, 34.976564],
              zoom:10,
              minZoom:10,
              maxZoom:18,
              mapStyle: this.makeMapStyle("https://tile.openstreetmap.jp/{z}/{x}/{y}.png", "map data © OpenStreetMap contributors"),
            }
        },
        methods: {
            onloaded: function() {
                this.map = Mapbox
            },
            makeMapStyle: function(tileUrl, attribution) {
                return {
                    "version": 8,
                    "sources": {
                        "Raster": {
                            "type": "raster",
                            "tiles": [ tileUrl ],
                            "tileSize": 256,
                            "attribution": attribution
                        }
                    },
                    "layers": [{
                        "id": "RasterLayer",
                        "type": "raster",
                        "source": "Raster",
                        "minzoom": 0,
                        "maxzoom": 18
                    }]
                }
            },
            latlonAry: function(event) {
                return [event.lon, event.lat]
            },
            makeUrl: function(ankenNo) {
                return "https://pointcloud.pref.shizuoka.jp/lasmap/ankendetail?ankenno=" + ankenNo
            }
        },
    }
</script>

<style scoped>
    .mapPane {
        height: 500px;
        margin: 5px;
        border: 1px solid #000000;
    }
</style>