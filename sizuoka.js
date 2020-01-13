var pntOnly = false;
var maxLengthPerRow = 20;
var maxRow = 1;
var lblAlways = false;
var lblRiseHover = true;
var std = L.tileLayer('http://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png',{
        attribution: ' <a href="http://portal.cyberjapan.jp/help/termsofuse.html" target="_blank">国土地理院 地理院地図</a>',
    }
);
var pale = L.tileLayer('http://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png',{
        attribution: ' <a href="http://portal.cyberjapan.jp/help/termsofuse.html" target="_blank">国土地理院 地理院地図</a>',
        minZoom:10,
        maxZoom:18,
        errorTileUrl: "image/map/no-data-pale.png"
    }
);
var osm = L.tileLayer(
    'http://tile.openstreetmap.jp/{z}/{x}/{y}.png',{
        attribution: 'c <a href="http://osm.org/copyright" target="_blank">OpenStreetMap</a> contributors'
    }
);
var map = L.map('map', { layers: [osm]});
var baseMaps = { 
    "標準地図"	  	: std,
    "淡色地図"	  	: pale,
    "OpenStreetMap"	: osm
};

L.control.layers(baseMaps).addTo(map);	

if("28XXX00040001" == ""){
    map.setView([34.976564, 138.383789], 10);
    var featureGroup;
    SetMarker ();
    map.on('moveend', function(e) {
        SetMarker();
    });
}else{
    map.setView([34.976564, 138.383789], 16);
    var data = { request : "GetGeoJson", KojiNo :"28XXX00040001" };
    $.ajax("ankenmapsrc",{
        type: "GET",
        data: data,
        success: function(data, dataType){
            data = JSON.parse(data);
            var geoJson = L.geoJson(data);
            rectangle = L.rectangle(geoJson.getBounds(), {color: "#ff0000", weight: 3, fillOpacity: 0, opacity: 1}).addTo(map);
            rectangle.on('click', function(e) {
                viewChildWindow("./ankendetail?ankenno=" + "28XXX00040001", "anken_detail");
            })
            map.setView(rectangle.getBounds().getCenter(), 13);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown){
            alert('Error : ' + errorThrown);
        }
    });
}

function SetMarker (){
    if( featureGroup != null ){ map.removeLayer( featureGroup ); }
    var Layers = new Array();			
    var data = { request : "MarkerSet", Xmax : map.getBounds().getNorthEast().lng , Xmin : map.getBounds().getSouthWest().lng ,
                Ymax : map.getBounds().getNorthEast().lat, Ymin : map.getBounds().getSouthWest().lat };
    $.ajax("ankenmapsrc",{
        type: "GET",
        data: data,
        success: function(data, dataType){
            var myIcon = L.icon({
                iconUrl: 'http://cdn.leafletjs.com/leaflet-0.5/images/marker-icon@2x.png',
                iconSize: [15,25],
                iconAnchor: [5, 5],
            });
            var pointinfo = data.split("?");
            for (var i = 0; i < pointinfo.length - 1; i++) {
                var info = pointinfo[i].split(":");
                var labelStr = "";
                if (maxLengthPerRow == 0){
                    labelStr = info[1];
                }else{
                    var slabel = splitByLength(info[1], maxLengthPerRow);
                    var rmax = slabel.length;
                    if (slabel.length > maxRow){
                        rmax = maxRow;
                    }
                    for (var r = 0; r < rmax; r++) {
                        if (labelStr !== ""){
                            labelStr = labelStr + "<br />";
                        }
                        labelStr = labelStr + slabel[r];
                    }
                    if (slabel.length > maxRow){
                        labelStr = labelStr + "...";
                    }
                }
                if (pntOnly == true){
                    var marker = L.marker( L.latLng(info[3], info[2]), { icon: myIcon }, { riseOnHover: lblRiseHover });
                }else{
                    var marker = L.marker( L.latLng(info[3], info[2]), { icon: myIcon }, { riseOnHover: lblRiseHover }).bindLabel(labelStr, { noHide: lblAlways });
                }
                marker.bindPopup(info[0])
                function onClick(e) {
                    window.location.href = window.location.href + "?ankenno=" + e.target.getPopup().getContent();
                    e.target.unbindPopup();
                }
                marker.on('click',onClick);
                Layers.push(marker);
            }
            featureGroup = L.featureGroup(Layers).addTo(map);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown){
            alert('Error : ' + errorThrown);
        }
    });
}

function splitByLength(str, length) {
    if (!str || !length || length < 1) {
        return [];
    }
    var regexPattern = new RegExp(
        '(?:[\uD800-\uDBFF][\uDC00-\uDFFF]|[^\uD800-\uDFFF]){1,' + length + '}',
        'g'
    );

    return str.match(regexPattern) || [];
}