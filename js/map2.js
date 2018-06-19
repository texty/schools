/**
 * Created by yevheniia on 13.06.18.
 */
var mymap = L.map('mymap', {
    zoomControl:true, maxZoom:16, minZoom:11, renderer: L.canvas()
})

mymap.scrollWheelZoom.disable();
mymap.on('focus', () => { map.scrollWheelZoom.enable(); });
mymap.on('blur', () => { map.scrollWheelZoom.disable(); });

mymap.on('zoomend', function (e) {
    // Check zoom level
    if (map.getZoom() < 14) {
        console.log(map.getZoom())
        $('.leaflet-tooltip').css("display", "none")

    } else {
        $('.leaflet-tooltip').css("display", "block")
    }
});

var renderer = L.canvas();

//var hash = new L.Hash(mymap);
mymap.attributionControl.addAttribution('<a href="https://github.com/tomchadwin/qgis2web" target="_blank">qgis2web</a>');
var bounds_group = new L.featureGroup([]);
function setBounds() {
    if (bounds_group.getLayers().length) {
        mymap.fitBounds(bounds_group.getBounds());
    }
}
var overlay_NEW_0 = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
    opacity: 1.0
});
overlay_NEW_0.addTo(mymap);
mymap.addLayer(overlay_NEW_0);
function pop_Svyatoshynsky_area_houses3_1(feature, layer) {
    var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Geo'] !== null ? Autolinker.link(String(feature.properties['Geo'])) : '') + '</td>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_Svyatoshynsky_area_houses3_1_0() {
    return {
        pane: 'pane_Svyatoshynsky_area_houses3_1',
        radius: 2.4,
        stroke: false,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(50,156,123,1.0)',
        renderer: renderer
    }
}
mymap.createPane('pane_Svyatoshynsky_area_houses3_1');
mymap.getPane('pane_Svyatoshynsky_area_houses3_1').style.zIndex = 401;
mymap.getPane('pane_Svyatoshynsky_area_houses3_1').style['mix-blend-mode'] = 'normal';
var layer_Svyatoshynsky_area_houses3_1 = new L.geoJson(json_Svyatoshynsky_area_houses3_1, {
    attribution: '<a href=""></a>',
    pane: 'pane_Svyatoshynsky_area_houses3_1',
    onEachFeature: pop_Svyatoshynsky_area_houses3_1,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.circleMarker(latlng, style_Svyatoshynsky_area_houses3_1_0(feature));
    },
});
bounds_group.addLayer(layer_Svyatoshynsky_area_houses3_1);
mymap.addLayer(layer_Svyatoshynsky_area_houses3_1);
function pop_Svytoshynsky_area_connections3_2(feature, layer) {
    var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Area'] !== null ? Autolinker.link(String(feature.properties['Area'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['School'] !== null ? Autolinker.link(String(feature.properties['School'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Latitude_s'] !== null ? Autolinker.link(String(feature.properties['Latitude_s'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Longitude_'] !== null ? Autolinker.link(String(feature.properties['Longitude_'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Street'] !== null ? Autolinker.link(String(feature.properties['Street'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['House'] !== null ? Autolinker.link(String(feature.properties['House'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Geo'] !== null ? Autolinker.link(String(feature.properties['Geo'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Latitude'] !== null ? Autolinker.link(String(feature.properties['Latitude'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Longitude'] !== null ? Autolinker.link(String(feature.properties['Longitude'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Distance'] !== null ? Autolinker.link(String(feature.properties['Distance'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['field_11'] !== null ? Autolinker.link(String(feature.properties['field_11'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['field_12'] !== null ? Autolinker.link(String(feature.properties['field_12'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['field_13'] !== null ? Autolinker.link(String(feature.properties['field_13'])) : '') + '</td>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_Svytoshynsky_area_connections3_2_0() {
    return {
        pane: 'pane_Svytoshynsky_area_connections3_2',
        opacity: 1,
        color: 'rgba(50,156,123,1.0)',
        dashArray: '',
        lineCap: 'square',
        lineJoin: 'bevel',
        weight: 1.0,
        fillOpacity: 0,
        renderer: renderer
    }
}
mymap.createPane('pane_Svytoshynsky_area_connections3_2');
mymap.getPane('pane_Svytoshynsky_area_connections3_2').style.zIndex = 402;
mymap.getPane('pane_Svytoshynsky_area_connections3_2').style['mix-blend-mode'] = 'normal';
var layer_Svytoshynsky_area_connections3_2 = new L.geoJson(json_Svytoshynsky_area_connections3_2, {
    attribution: '<a href=""></a>',
    pane: 'pane_Svytoshynsky_area_connections3_2',
    onEachFeature: pop_Svytoshynsky_area_connections3_2,
    style: style_Svytoshynsky_area_connections3_2_0,
});
bounds_group.addLayer(layer_Svytoshynsky_area_connections3_2);
mymap.addLayer(layer_Svytoshynsky_area_connections3_2);
function pop_s_svyatosh_3(feature, layer) {
    var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['School'] !== null ? Autolinker.link(String(feature.properties['School'])) : '') + '</td>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_s_svyatosh_3_0() {
    return {
        pane: 'pane_s_svyatosh_3',
        radius: 2.0,
        stroke: false,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(0,0,0,0.5019607843137255)',
        renderer: renderer
    }
}
mymap.createPane('pane_s_svyatosh_3');
mymap.getPane('pane_s_svyatosh_3').style.zIndex = 403;
mymap.getPane('pane_s_svyatosh_3').style['mix-blend-mode'] = 'normal';
var layer_s_svyatosh_3 = new L.geoJson(json_s_svyatosh_3, {
    attribution: '<a href=""></a>',
    pane: 'pane_s_svyatosh_3',
    onEachFeature: pop_s_svyatosh_3,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.circleMarker(latlng, style_s_svyatosh_3_0(feature));
    },
});
bounds_group.addLayer(layer_s_svyatosh_3);
function pop_Dnipro_houses_4(feature, layer) {
    var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Geo'] !== null ? Autolinker.link(String(feature.properties['Geo'])) : '') + '</td>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_Dnipro_houses_4_0() {
    return {
        pane: 'pane_Dnipro_houses_4',
        radius: 2.4,
        stroke: false,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(198,63,102,1.0)',
        renderer: renderer
    }
}
mymap.createPane('pane_Dnipro_houses_4');
mymap.getPane('pane_Dnipro_houses_4').style.zIndex = 404;
mymap.getPane('pane_Dnipro_houses_4').style['mix-blend-mode'] = 'normal';
var layer_Dnipro_houses_4 = new L.geoJson(json_Dnipro_houses_4, {
    attribution: '<a href=""></a>',
    pane: 'pane_Dnipro_houses_4',
    onEachFeature: pop_Dnipro_houses_4,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.circleMarker(latlng, style_Dnipro_houses_4_0(feature));
    },
});
bounds_group.addLayer(layer_Dnipro_houses_4);
mymap.addLayer(layer_Dnipro_houses_4);
function pop_Dnipro_area_connections4_5(feature, layer) {
    var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Area'] !== null ? Autolinker.link(String(feature.properties['Area'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['School'] !== null ? Autolinker.link(String(feature.properties['School'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Latitude_s'] !== null ? Autolinker.link(String(feature.properties['Latitude_s'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Longitude_'] !== null ? Autolinker.link(String(feature.properties['Longitude_'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Street'] !== null ? Autolinker.link(String(feature.properties['Street'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['House'] !== null ? Autolinker.link(String(feature.properties['House'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['note'] !== null ? Autolinker.link(String(feature.properties['note'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Latitude'] !== null ? Autolinker.link(String(feature.properties['Latitude'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Longitude'] !== null ? Autolinker.link(String(feature.properties['Longitude'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Geo'] !== null ? Autolinker.link(String(feature.properties['Geo'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['school_geo'] !== null ? Autolinker.link(String(feature.properties['school_geo'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Distance'] !== null ? Autolinker.link(String(feature.properties['Distance'])) : '') + '</td>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_Dnipro_area_connections4_5_0() {
    return {
        pane: 'pane_Dnipro_area_connections4_5',
        opacity: 1,
        color: 'rgba(198,63,102,1.0)',
        dashArray: '',
        lineCap: 'square',
        lineJoin: 'bevel',
        weight: 1.0,
        fillOpacity: 0,
        renderer: renderer
    }
}
mymap.createPane('pane_Dnipro_area_connections4_5');
mymap.getPane('pane_Dnipro_area_connections4_5').style.zIndex = 405;
mymap.getPane('pane_Dnipro_area_connections4_5').style['mix-blend-mode'] = 'normal';
var layer_Dnipro_area_connections4_5 = new L.geoJson(json_Dnipro_area_connections4_5, {
    attribution: '<a href=""></a>',
    pane: 'pane_Dnipro_area_connections4_5',
    onEachFeature: pop_Dnipro_area_connections4_5,
    style: style_Dnipro_area_connections4_5_0,
});
bounds_group.addLayer(layer_Dnipro_area_connections4_5);
mymap.addLayer(layer_Dnipro_area_connections4_5);
function pop_s_dnipro_6(feature, layer) {
    var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['School'] !== null ? Autolinker.link(String(feature.properties['School'])) : '') + '</td>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_s_dnipro_6_0() {
    return {
        pane: 'pane_s_dnipro_6',
        radius: 2.0,
        stroke: false,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(0,0,0,0.5019607843137255)',
        renderer: renderer
    }
}
mymap.createPane('pane_s_dnipro_6');
mymap.getPane('pane_s_dnipro_6').style.zIndex = 406;
mymap.getPane('pane_s_dnipro_6').style['mix-blend-mode'] = 'normal';
var layer_s_dnipro_6 = new L.geoJson(json_s_dnipro_6, {
    attribution: '<a href=""></a>',
    pane: 'pane_s_dnipro_6',
    onEachFeature: pop_s_dnipro_6,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.circleMarker(latlng, style_s_dnipro_6_0(feature));
    },
});
bounds_group.addLayer(layer_s_dnipro_6);
function pop_solomyansky_houses2_7(feature, layer) {
    var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Geo'] !== null ? Autolinker.link(String(feature.properties['Geo'])) : '') + '</td>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_solomyansky_houses2_7_0() {
    return {
        pane: 'pane_solomyansky_houses2_7',
        radius: 2.4,
        stroke: false,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(177,176,82,1.0)',
        renderer: renderer
    }
}
mymap.createPane('pane_solomyansky_houses2_7');
mymap.getPane('pane_solomyansky_houses2_7').style.zIndex = 407;
mymap.getPane('pane_solomyansky_houses2_7').style['mix-blend-mode'] = 'normal';
var layer_solomyansky_houses2_7 = new L.geoJson(json_solomyansky_houses2_7, {
    attribution: '<a href=""></a>',
    pane: 'pane_solomyansky_houses2_7',
    onEachFeature: pop_solomyansky_houses2_7,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.circleMarker(latlng, style_solomyansky_houses2_7_0(feature));
    },
});
bounds_group.addLayer(layer_solomyansky_houses2_7);
mymap.addLayer(layer_solomyansky_houses2_7);
function pop_Solomyansky_area_connections3_8(feature, layer) {
    var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Country'] !== null ? Autolinker.link(String(feature.properties['Country'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['City'] !== null ? Autolinker.link(String(feature.properties['City'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Latitude_s'] !== null ? Autolinker.link(String(feature.properties['Latitude_s'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Longitude_'] !== null ? Autolinker.link(String(feature.properties['Longitude_'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Area'] !== null ? Autolinker.link(String(feature.properties['Area'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['School'] !== null ? Autolinker.link(String(feature.properties['School'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Street'] !== null ? Autolinker.link(String(feature.properties['Street'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Latitude'] !== null ? Autolinker.link(String(feature.properties['Latitude'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Longitude'] !== null ? Autolinker.link(String(feature.properties['Longitude'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['House'] !== null ? Autolinker.link(String(feature.properties['House'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Geo'] !== null ? Autolinker.link(String(feature.properties['Geo'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Note'] !== null ? Autolinker.link(String(feature.properties['Note'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Distance'] !== null ? Autolinker.link(String(feature.properties['Distance'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['field_14'] !== null ? Autolinker.link(String(feature.properties['field_14'])) : '') + '</td>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_Solomyansky_area_connections3_8_0() {
    return {
        pane: 'pane_Solomyansky_area_connections3_8',
        opacity: 1,
        color: 'rgba(177,176,82,1.0)',
        dashArray: '',
        lineCap: 'square',
        lineJoin: 'bevel',
        weight: 1,
        fillOpacity: 0,
        renderer: renderer
    }
}
mymap.createPane('pane_Solomyansky_area_connections3_8');
mymap.getPane('pane_Solomyansky_area_connections3_8').style.zIndex = 408;
mymap.getPane('pane_Solomyansky_area_connections3_8').style['mix-blend-mode'] = 'multiply';
var layer_Solomyansky_area_connections3_8 = new L.geoJson(json_Solomyansky_area_connections3_8, {
    attribution: '<a href=""></a>',
    pane: 'pane_Solomyansky_area_connections3_8',
    onEachFeature: pop_Solomyansky_area_connections3_8,
    style: style_Solomyansky_area_connections3_8_0,
});
bounds_group.addLayer(layer_Solomyansky_area_connections3_8);
mymap.addLayer(layer_Solomyansky_area_connections3_8);
function pop_s_solom_9(feature, layer) {
    var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['School'] !== null ? Autolinker.link(String(feature.properties['School'])) : '') + '</td>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_s_solom_9_0() {
    return {
        pane: 'pane_s_solom_9',
        radius: 2.0,
        stroke: false,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(0,0,0,0.5019607843137255)',
        renderer: renderer
    }
}
mymap.createPane('pane_s_solom_9');
mymap.getPane('pane_s_solom_9').style.zIndex = 409;
mymap.getPane('pane_s_solom_9').style['mix-blend-mode'] = 'normal';
var layer_s_solom_9 = new L.geoJson(json_s_solom_9, {
    attribution: '<a href=""></a>',
    pane: 'pane_s_solom_9',
    onEachFeature: pop_s_solom_9,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.circleMarker(latlng, style_s_solom_9_0(feature));
    },
});
bounds_group.addLayer(layer_s_solom_9);
function pop_Darnytsky_area_connections_10(feature, layer) {
    var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Area'] !== null ? Autolinker.link(String(feature.properties['Area'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['School nam'] !== null ? Autolinker.link(String(feature.properties['School nam'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Latitude_s'] !== null ? Autolinker.link(String(feature.properties['Latitude_s'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Longitude_'] !== null ? Autolinker.link(String(feature.properties['Longitude_'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Street'] !== null ? Autolinker.link(String(feature.properties['Street'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Number'] !== null ? Autolinker.link(String(feature.properties['Number'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Geo'] !== null ? Autolinker.link(String(feature.properties['Geo'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Latitude'] !== null ? Autolinker.link(String(feature.properties['Latitude'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Longitude'] !== null ? Autolinker.link(String(feature.properties['Longitude'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Distance'] !== null ? Autolinker.link(String(feature.properties['Distance'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['field_11'] !== null ? Autolinker.link(String(feature.properties['field_11'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['field_12'] !== null ? Autolinker.link(String(feature.properties['field_12'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['field_13'] !== null ? Autolinker.link(String(feature.properties['field_13'])) : '') + '</td>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_Darnytsky_area_connections_10_0() {
    return {
        pane: 'pane_Darnytsky_area_connections_10',
        opacity: 1,
        color: 'rgba(90,97,176,1.0)',
        dashArray: '',
        lineCap: 'square',
        lineJoin: 'bevel',
        weight: 1,
        fillOpacity: 0,
        renderer: renderer
    }
}
mymap.createPane('pane_Darnytsky_area_connections_10');
mymap.getPane('pane_Darnytsky_area_connections_10').style.zIndex = 410;
mymap.getPane('pane_Darnytsky_area_connections_10').style['mix-blend-mode'] = 'multiply';
var layer_Darnytsky_area_connections_10 = new L.geoJson(json_Darnytsky_area_connections_10, {
    attribution: '<a href=""></a>',
    pane: 'pane_Darnytsky_area_connections_10',
    onEachFeature: pop_Darnytsky_area_connections_10,
    style: style_Darnytsky_area_connections_10_0,
});
bounds_group.addLayer(layer_Darnytsky_area_connections_10);
mymap.addLayer(layer_Darnytsky_area_connections_10);
function pop_Darnytsky_houses_11(feature, layer) {
    var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Geo'] !== null ? Autolinker.link(String(feature.properties['Geo'])) : '') + '</td>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_Darnytsky_houses_11_0() {
    return {
        pane: 'pane_Darnytsky_houses_11',
        radius: 2.0,
        stroke: false,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(90,97,176,1.0)',
        renderer: renderer
    }
}
mymap.createPane('pane_Darnytsky_houses_11');
mymap.getPane('pane_Darnytsky_houses_11').style.zIndex = 411;
mymap.getPane('pane_Darnytsky_houses_11').style['mix-blend-mode'] = 'normal';
var layer_Darnytsky_houses_11 = new L.geoJson(json_Darnytsky_houses_11, {
    attribution: '<a href=""></a>',
    pane: 'pane_Darnytsky_houses_11',
    onEachFeature: pop_Darnytsky_houses_11,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.circleMarker(latlng, style_Darnytsky_houses_11_0(feature));
    },
});
bounds_group.addLayer(layer_Darnytsky_houses_11);
mymap.addLayer(layer_Darnytsky_houses_11);
function pop_s_darnyza_12(feature, layer) {
    var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['School nam'] !== null ? Autolinker.link(String(feature.properties['School nam'])) : '') + '</td>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_s_darnyza_12_0() {
    return {
        pane: 'pane_s_darnyza_12',
        radius: 2.0,
        stroke: false,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(0,0,0,0.5019607843137255)',
        renderer: renderer
    }
}
mymap.createPane('pane_s_darnyza_12');
mymap.getPane('pane_s_darnyza_12').style.zIndex = 412;
mymap.getPane('pane_s_darnyza_12').style['mix-blend-mode'] = 'normal';
var layer_s_darnyza_12 = new L.geoJson(json_s_darnyza_12, {
    attribution: '<a href=""></a>',
    pane: 'pane_s_darnyza_12',
    onEachFeature: pop_s_darnyza_12,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.circleMarker(latlng, style_s_darnyza_12_0(feature));
    },
});
bounds_group.addLayer(layer_s_darnyza_12);
function pop_Obolon_area_houses_13(feature, layer) {
    var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Geo'] !== null ? Autolinker.link(String(feature.properties['Geo'])) : '') + '</td>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_Obolon_area_houses_13_0() {
    return {
        pane: 'pane_Obolon_area_houses_13',
        radius: 2.4,
        stroke: false,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(193,107,69,1.0)',
        renderer: renderer
    }
}
mymap.createPane('pane_Obolon_area_houses_13');
mymap.getPane('pane_Obolon_area_houses_13').style.zIndex = 413;
mymap.getPane('pane_Obolon_area_houses_13').style['mix-blend-mode'] = 'normal';
var layer_Obolon_area_houses_13 = new L.geoJson(json_Obolon_area_houses_13, {
    attribution: '<a href=""></a>',
    pane: 'pane_Obolon_area_houses_13',
    onEachFeature: pop_Obolon_area_houses_13,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.circleMarker(latlng, style_Obolon_area_houses_13_0(feature));
    },
});
bounds_group.addLayer(layer_Obolon_area_houses_13);
mymap.addLayer(layer_Obolon_area_houses_13);
function pop_Obolon_area_connections3_14(feature, layer) {
    var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Area'] !== null ? Autolinker.link(String(feature.properties['Area'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['School'] !== null ? Autolinker.link(String(feature.properties['School'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Latitude_s'] !== null ? Autolinker.link(String(feature.properties['Latitude_s'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Longitude_'] !== null ? Autolinker.link(String(feature.properties['Longitude_'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Street'] !== null ? Autolinker.link(String(feature.properties['Street'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['House'] !== null ? Autolinker.link(String(feature.properties['House'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Note1'] !== null ? Autolinker.link(String(feature.properties['Note1'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Latitude'] !== null ? Autolinker.link(String(feature.properties['Latitude'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Longitude'] !== null ? Autolinker.link(String(feature.properties['Longitude'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Geo'] !== null ? Autolinker.link(String(feature.properties['Geo'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Note2'] !== null ? Autolinker.link(String(feature.properties['Note2'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Distance'] !== null ? Autolinker.link(String(feature.properties['Distance'])) : '') + '</td>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_Obolon_area_connections3_14_0() {
    return {
        pane: 'pane_Obolon_area_connections3_14',
        opacity: 1,
        color: 'rgba(193,107,69,1.0)',
        dashArray: '',
        lineCap: 'square',
        lineJoin: 'bevel',
        weight: 1,
        fillOpacity: 0,
        renderer: renderer
    }
}
mymap.createPane('pane_Obolon_area_connections3_14');
mymap.getPane('pane_Obolon_area_connections3_14').style.zIndex = 414;
mymap.getPane('pane_Obolon_area_connections3_14').style['mix-blend-mode'] = 'multiply';
var layer_Obolon_area_connections3_14 = new L.geoJson(json_Obolon_area_connections3_14, {
    attribution: '<a href=""></a>',
    pane: 'pane_Obolon_area_connections3_14',
    onEachFeature: pop_Obolon_area_connections3_14,
    style: style_Obolon_area_connections3_14_0,
});
bounds_group.addLayer(layer_Obolon_area_connections3_14);
mymap.addLayer(layer_Obolon_area_connections3_14);
function pop_s_obolon_15(feature, layer) {
    var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['School'] !== null ? Autolinker.link(String(feature.properties['School'])) : '') + '</td>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_s_obolon_15_0() {
    return {
        pane: 'pane_s_obolon_15',
        radius: 2.0,
        stroke: false,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(0,0,0,0.5019607843137255)',
        renderer: renderer
    }
}
mymap.createPane('pane_s_obolon_15');
mymap.getPane('pane_s_obolon_15').style.zIndex = 415;
mymap.getPane('pane_s_obolon_15').style['mix-blend-mode'] = 'normal';
var layer_s_obolon_15 = new L.geoJson(json_s_obolon_15, {
    attribution: '<a href=""></a>',
    pane: 'pane_s_obolon_15',
    onEachFeature: pop_s_obolon_15,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.circleMarker(latlng, style_s_obolon_15_0(feature));
    },
});
bounds_group.addLayer(layer_s_obolon_15);
function pop_Pechersky_area_connections2_16(feature, layer) {
    var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Area'] !== null ? Autolinker.link(String(feature.properties['Area'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['School'] !== null ? Autolinker.link(String(feature.properties['School'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Latitude_s'] !== null ? Autolinker.link(String(feature.properties['Latitude_s'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Longitude_'] !== null ? Autolinker.link(String(feature.properties['Longitude_'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Street'] !== null ? Autolinker.link(String(feature.properties['Street'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['House'] !== null ? Autolinker.link(String(feature.properties['House'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Geo'] !== null ? Autolinker.link(String(feature.properties['Geo'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Latitude'] !== null ? Autolinker.link(String(feature.properties['Latitude'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Longitude'] !== null ? Autolinker.link(String(feature.properties['Longitude'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Distance'] !== null ? Autolinker.link(String(feature.properties['Distance'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['field_11'] !== null ? Autolinker.link(String(feature.properties['field_11'])) : '') + '</td>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_Pechersky_area_connections2_16_0() {
    return {
        pane: 'pane_Pechersky_area_connections2_16',
        opacity: 1,
        color: 'rgba(20,175,202,1.0)',
        dashArray: '',
        lineCap: 'square',
        lineJoin: 'bevel',
        weight: 1.0,
        fillOpacity: 0,
        renderer: renderer
    }
}
mymap.createPane('pane_Pechersky_area_connections2_16');
mymap.getPane('pane_Pechersky_area_connections2_16').style.zIndex = 416;
mymap.getPane('pane_Pechersky_area_connections2_16').style['mix-blend-mode'] = 'normal';
var layer_Pechersky_area_connections2_16 = new L.geoJson(json_Pechersky_area_connections2_16, {
    attribution: '<a href=""></a>',
    pane: 'pane_Pechersky_area_connections2_16',
    onEachFeature: pop_Pechersky_area_connections2_16,
    style: style_Pechersky_area_connections2_16_0,
});
bounds_group.addLayer(layer_Pechersky_area_connections2_16);
mymap.addLayer(layer_Pechersky_area_connections2_16);
function pop_Pechersky_area_houses3_17(feature, layer) {
    var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Geo'] !== null ? Autolinker.link(String(feature.properties['Geo'])) : '') + '</td>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_Pechersky_area_houses3_17_0() {
    return {
        pane: 'pane_Pechersky_area_houses3_17',
        radius: 2.4,
        stroke: false,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(20,175,202,1.0)',
        renderer: renderer
    }
}
mymap.createPane('pane_Pechersky_area_houses3_17');
mymap.getPane('pane_Pechersky_area_houses3_17').style.zIndex = 417;
mymap.getPane('pane_Pechersky_area_houses3_17').style['mix-blend-mode'] = 'normal';
var layer_Pechersky_area_houses3_17 = new L.geoJson(json_Pechersky_area_houses3_17, {
    attribution: '<a href=""></a>',
    pane: 'pane_Pechersky_area_houses3_17',
    onEachFeature: pop_Pechersky_area_houses3_17,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.circleMarker(latlng, style_Pechersky_area_houses3_17_0(feature));
    },
});
bounds_group.addLayer(layer_Pechersky_area_houses3_17);
mymap.addLayer(layer_Pechersky_area_houses3_17);
function pop_s_pechersk_18(feature, layer) {
    var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['School'] !== null ? Autolinker.link(String(feature.properties['School'])) : '') + '</td>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_s_pechersk_18_0() {
    return {
        pane: 'pane_s_pechersk_18',
        radius: 2.0,
        stroke: false,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(0,0,0,0.5019607843137255)',
        renderer: renderer
    }
}
mymap.createPane('pane_s_pechersk_18');
mymap.getPane('pane_s_pechersk_18').style.zIndex = 418;
mymap.getPane('pane_s_pechersk_18').style['mix-blend-mode'] = 'normal';
var layer_s_pechersk_18 = new L.geoJson(json_s_pechersk_18, {
    attribution: '<a href=""></a>',
    pane: 'pane_s_pechersk_18',
    onEachFeature: pop_s_pechersk_18,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.circleMarker(latlng, style_s_pechersk_18_0(feature));
    },
});
bounds_group.addLayer(layer_s_pechersk_18);
function pop_Golosievsky_area_connections2_19(feature, layer) {
    var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Area'] !== null ? Autolinker.link(String(feature.properties['Area'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['School'] !== null ? Autolinker.link(String(feature.properties['School'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Latitude_s'] !== null ? Autolinker.link(String(feature.properties['Latitude_s'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Longitude_'] !== null ? Autolinker.link(String(feature.properties['Longitude_'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Street'] !== null ? Autolinker.link(String(feature.properties['Street'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['House'] !== null ? Autolinker.link(String(feature.properties['House'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Geo'] !== null ? Autolinker.link(String(feature.properties['Geo'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Latitude'] !== null ? Autolinker.link(String(feature.properties['Latitude'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Longitude'] !== null ? Autolinker.link(String(feature.properties['Longitude'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Note'] !== null ? Autolinker.link(String(feature.properties['Note'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Distance'] !== null ? Autolinker.link(String(feature.properties['Distance'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['field_12'] !== null ? Autolinker.link(String(feature.properties['field_12'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['field_13'] !== null ? Autolinker.link(String(feature.properties['field_13'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['field_14'] !== null ? Autolinker.link(String(feature.properties['field_14'])) : '') + '</td>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_Golosievsky_area_connections2_19_0() {
    return {
        pane: 'pane_Golosievsky_area_connections2_19',
        opacity: 1,
        color: 'rgba(236,189,16,1.0)',
        dashArray: '',
        lineCap: 'square',
        lineJoin: 'bevel',
        weight: 1,
        fillOpacity: 0,
        renderer: renderer
    }
}
mymap.createPane('pane_Golosievsky_area_connections2_19');
mymap.getPane('pane_Golosievsky_area_connections2_19').style.zIndex = 419;
mymap.getPane('pane_Golosievsky_area_connections2_19').style['mix-blend-mode'] = 'multiply';
var layer_Golosievsky_area_connections2_19 = new L.geoJson(json_Golosievsky_area_connections2_19, {
    attribution: '<a href=""></a>',
    pane: 'pane_Golosievsky_area_connections2_19',
    onEachFeature: pop_Golosievsky_area_connections2_19,
    style: style_Golosievsky_area_connections2_19_0,
});
bounds_group.addLayer(layer_Golosievsky_area_connections2_19);
mymap.addLayer(layer_Golosievsky_area_connections2_19);
function pop_Golosievsky_houses_20(feature, layer) {
    var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Geo'] !== null ? Autolinker.link(String(feature.properties['Geo'])) : '') + '</td>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_Golosievsky_houses_20_0() {
    return {
        pane: 'pane_Golosievsky_houses_20',
        radius: 2.4,
        stroke: false,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(236,189,16,1.0)',
        renderer: renderer
    }
}
mymap.createPane('pane_Golosievsky_houses_20');
mymap.getPane('pane_Golosievsky_houses_20').style.zIndex = 420;
mymap.getPane('pane_Golosievsky_houses_20').style['mix-blend-mode'] = 'normal';
var layer_Golosievsky_houses_20 = new L.geoJson(json_Golosievsky_houses_20, {
    attribution: '<a href=""></a>',
    pane: 'pane_Golosievsky_houses_20',
    onEachFeature: pop_Golosievsky_houses_20,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.circleMarker(latlng, style_Golosievsky_houses_20_0(feature));
    },
});
bounds_group.addLayer(layer_Golosievsky_houses_20);
mymap.addLayer(layer_Golosievsky_houses_20);
function pop_s_golosievo_21(feature, layer) {
    var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['School'] !== null ? Autolinker.link(String(feature.properties['School'])) : '') + '</td>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_s_golosievo_21_0() {
    return {
        pane: 'pane_s_golosievo_21',
        radius: 2.0,
        stroke: false,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(0,0,0,0.5019607843137255)',
        renderer: renderer
    }
}
mymap.createPane('pane_s_golosievo_21');
mymap.getPane('pane_s_golosievo_21').style.zIndex = 421;
mymap.getPane('pane_s_golosievo_21').style['mix-blend-mode'] = 'normal';
var layer_s_golosievo_21 = new L.geoJson(json_s_golosievo_21, {
    attribution: '<a href=""></a>',
    pane: 'pane_s_golosievo_21',
    onEachFeature: pop_s_golosievo_21,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.circleMarker(latlng, style_s_golosievo_21_0(feature));
    },
});
bounds_group.addLayer(layer_s_golosievo_21);
function pop_Shevchenkivsky_area_connections2_22(feature, layer) {
    var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Area'] !== null ? Autolinker.link(String(feature.properties['Area'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Street_s'] !== null ? Autolinker.link(String(feature.properties['Street_s'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Latitude_s'] !== null ? Autolinker.link(String(feature.properties['Latitude_s'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Longitude_'] !== null ? Autolinker.link(String(feature.properties['Longitude_'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['School'] !== null ? Autolinker.link(String(feature.properties['School'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Street'] !== null ? Autolinker.link(String(feature.properties['Street'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['House'] !== null ? Autolinker.link(String(feature.properties['House'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Latitude'] !== null ? Autolinker.link(String(feature.properties['Latitude'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Longitude'] !== null ? Autolinker.link(String(feature.properties['Longitude'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Geo'] !== null ? Autolinker.link(String(feature.properties['Geo'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Note'] !== null ? Autolinker.link(String(feature.properties['Note'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Distance'] !== null ? Autolinker.link(String(feature.properties['Distance'])) : '') + '</td>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_Shevchenkivsky_area_connections2_22_0() {
    return {
        pane: 'pane_Shevchenkivsky_area_connections2_22',
        opacity: 1,
        color: 'rgba(182,78,172,1.0)',
        dashArray: '',
        lineCap: 'square',
        lineJoin: 'bevel',
        weight: 1,
        fillOpacity: 0,
        renderer: renderer
    }
}
mymap.createPane('pane_Shevchenkivsky_area_connections2_22');
mymap.getPane('pane_Shevchenkivsky_area_connections2_22').style.zIndex = 422;
mymap.getPane('pane_Shevchenkivsky_area_connections2_22').style['mix-blend-mode'] = 'multiply';
var layer_Shevchenkivsky_area_connections2_22 = new L.geoJson(json_Shevchenkivsky_area_connections2_22, {
    attribution: '<a href=""></a>',
    pane: 'pane_Shevchenkivsky_area_connections2_22',
    onEachFeature: pop_Shevchenkivsky_area_connections2_22,
    style: style_Shevchenkivsky_area_connections2_22_0,
});
bounds_group.addLayer(layer_Shevchenkivsky_area_connections2_22);
mymap.addLayer(layer_Shevchenkivsky_area_connections2_22);
function pop_Shevchenkivsky_area_houses2_23(feature, layer) {
    var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Geo'] !== null ? Autolinker.link(String(feature.properties['Geo'])) : '') + '</td>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_Shevchenkivsky_area_houses2_23_0() {
    return {
        pane: 'pane_Shevchenkivsky_area_houses2_23',
        radius: 2.4,
        stroke: false,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(182,78,172,1.0)',
        renderer: renderer
    }
}
mymap.createPane('pane_Shevchenkivsky_area_houses2_23');
mymap.getPane('pane_Shevchenkivsky_area_houses2_23').style.zIndex = 423;
mymap.getPane('pane_Shevchenkivsky_area_houses2_23').style['mix-blend-mode'] = 'normal';
var layer_Shevchenkivsky_area_houses2_23 = new L.geoJson(json_Shevchenkivsky_area_houses2_23, {
    attribution: '<a href=""></a>',
    pane: 'pane_Shevchenkivsky_area_houses2_23',
    onEachFeature: pop_Shevchenkivsky_area_houses2_23,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.circleMarker(latlng, style_Shevchenkivsky_area_houses2_23_0(feature));
    },
});
bounds_group.addLayer(layer_Shevchenkivsky_area_houses2_23);
mymap.addLayer(layer_Shevchenkivsky_area_houses2_23);
function pop_s_shev_24(feature, layer) {
    var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['School'] !== null ? Autolinker.link(String(feature.properties['School'])) : '') + '</td>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_s_shev_24_0() {
    return {
        pane: 'pane_s_shev_24',
        radius: 2.0,
        stroke: false,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(0,0,0,0.5019607843137255)',
        renderer: renderer
    }
}
mymap.createPane('pane_s_shev_24');
mymap.getPane('pane_s_shev_24').style.zIndex = 424;
mymap.getPane('pane_s_shev_24').style['mix-blend-mode'] = 'normal';
var layer_s_shev_24 = new L.geoJson(json_s_shev_24, {
    attribution: '<a href=""></a>',
    pane: 'pane_s_shev_24',
    onEachFeature: pop_s_shev_24,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.circleMarker(latlng, style_s_shev_24_0(feature));
    },
});
bounds_group.addLayer(layer_s_shev_24);
function pop_Podil_area_houses3_25(feature, layer) {
    var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Geo'] !== null ? Autolinker.link(String(feature.properties['Geo'])) : '') + '</td>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_Podil_area_houses3_25_0() {
    return {
        pane: 'pane_Podil_area_houses3_25',
        radius: 2.4,
        stroke: false,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(81,81,203,1.0)',
        renderer: renderer
    }
}
mymap.createPane('pane_Podil_area_houses3_25');
mymap.getPane('pane_Podil_area_houses3_25').style.zIndex = 425;
mymap.getPane('pane_Podil_area_houses3_25').style['mix-blend-mode'] = 'normal';
var layer_Podil_area_houses3_25 = new L.geoJson(json_Podil_area_houses3_25, {
    attribution: '<a href=""></a>',
    pane: 'pane_Podil_area_houses3_25',
    onEachFeature: pop_Podil_area_houses3_25,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.circleMarker(latlng, style_Podil_area_houses3_25_0(feature));
    },
});
bounds_group.addLayer(layer_Podil_area_houses3_25);
mymap.addLayer(layer_Podil_area_houses3_25);
function pop_Podil_area_connections4_26(feature, layer) {
    var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Area'] !== null ? Autolinker.link(String(feature.properties['Area'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['School'] !== null ? Autolinker.link(String(feature.properties['School'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Latitude_s'] !== null ? Autolinker.link(String(feature.properties['Latitude_s'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Longitude_'] !== null ? Autolinker.link(String(feature.properties['Longitude_'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Street'] !== null ? Autolinker.link(String(feature.properties['Street'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['House'] !== null ? Autolinker.link(String(feature.properties['House'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Geo'] !== null ? Autolinker.link(String(feature.properties['Geo'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Latitude'] !== null ? Autolinker.link(String(feature.properties['Latitude'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Longitude'] !== null ? Autolinker.link(String(feature.properties['Longitude'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Note'] !== null ? Autolinker.link(String(feature.properties['Note'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Distance'] !== null ? Autolinker.link(String(feature.properties['Distance'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['field_12'] !== null ? Autolinker.link(String(feature.properties['field_12'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['field_13'] !== null ? Autolinker.link(String(feature.properties['field_13'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['field_14'] !== null ? Autolinker.link(String(feature.properties['field_14'])) : '') + '</td>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_Podil_area_connections4_26_0() {
    return {
        pane: 'pane_Podil_area_connections4_26',
        opacity: 1,
        color: 'rgba(81,81,203,1.0)',
        dashArray: '',
        lineCap: 'square',
        lineJoin: 'bevel',
        weight: 1,
        fillOpacity: 0,
        renderer: renderer
    }
}
mymap.createPane('pane_Podil_area_connections4_26');
mymap.getPane('pane_Podil_area_connections4_26').style.zIndex = 426;
mymap.getPane('pane_Podil_area_connections4_26').style['mix-blend-mode'] = 'multiply';
var layer_Podil_area_connections4_26 = new L.geoJson(json_Podil_area_connections4_26, {
    attribution: '<a href=""></a>',
    pane: 'pane_Podil_area_connections4_26',
    onEachFeature: pop_Podil_area_connections4_26,
    style: style_Podil_area_connections4_26_0,
});
bounds_group.addLayer(layer_Podil_area_connections4_26);
mymap.addLayer(layer_Podil_area_connections4_26);
function pop_s_podil_27(feature, layer) {
    var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['School'] !== null ? Autolinker.link(String(feature.properties['School'])) : '') + '</td>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_s_podil_27_0() {
    return {
        pane: 'pane_s_podil_27',
        radius: 2.0,
        stroke: false,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(0,0,0,0.5019607843137255)',
        renderer: renderer
    }
}
mymap.createPane('pane_s_podil_27');
mymap.getPane('pane_s_podil_27').style.zIndex = 427;
mymap.getPane('pane_s_podil_27').style['mix-blend-mode'] = 'normal';
var layer_s_podil_27 = new L.geoJson(json_s_podil_27, {
    attribution: '<a href=""></a>',
    pane: 'pane_s_podil_27',
    onEachFeature: pop_s_podil_27,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.circleMarker(latlng, style_s_podil_27_0(feature));
    },
});
bounds_group.addLayer(layer_s_podil_27);
function pop_cap_darniza_28(feature, layer) {
    var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Occupancy2'] !== null ? Autolinker.link(String(feature.properties['Occupancy2'])) : '') + '</td>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_cap_darniza_28_0(feature) {
    if (feature.properties['q2wHide_Number'] >= 23.000000 && feature.properties['q2wHide_Number'] <= 227.000000 ) {
        return {
            pane: 'pane_cap_darniza_28',
            radius: 3.0,
            opacity: 1,
            color: 'rgba(90,97,176,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(90,97,176,1.0)',
            renderer: renderer
        }
    }
    if (feature.properties['q2wHide_Number'] >= 227.000000 && feature.properties['q2wHide_Number'] <= 431.000000 ) {
        return {
            pane: 'pane_cap_darniza_28',
            radius: 6.0,
            opacity: 1,
            color: 'rgba(90,97,176,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(90,97,176,1.0)',
            renderer: renderer
        }
    }
    if (feature.properties['q2wHide_Number'] >= 431.000000 && feature.properties['q2wHide_Number'] <= 635.000000 ) {
        return {
            pane: 'pane_cap_darniza_28',
            radius: 9.0,
            opacity: 1,
            color: 'rgba(90,97,176,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(90,97,176,1.0)',
            renderer: renderer
        }
    }
    if (feature.properties['q2wHide_Number'] >= 635.000000 && feature.properties['q2wHide_Number'] <= 839.000000 ) {
        return {
            pane: 'pane_cap_darniza_28',
            radius: 12.0,
            opacity: 1,
            color: 'rgba(90,97,176,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(90,97,176,1.0)',
            renderer: renderer
        }
    }
    if (feature.properties['q2wHide_Number'] >= 839.000000 && feature.properties['q2wHide_Number'] <= 1043.000000 ) {
        return {
            pane: 'pane_cap_darniza_28',
            radius: 15.0,
            opacity: 1,
            color: 'rgba(90,97,176,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(90,97,176,1.0)',
            renderer: renderer
        }
    }
}
mymap.createPane('pane_cap_darniza_28');
mymap.getPane('pane_cap_darniza_28').style.zIndex = 428;
mymap.getPane('pane_cap_darniza_28').style['mix-blend-mode'] = 'multiply';
var layer_cap_darniza_28 = new L.geoJson(json_cap_darniza_28, {
    attribution: '<a href=""></a>',
    pane: 'pane_cap_darniza_28',
    onEachFeature: pop_cap_darniza_28,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.circleMarker(latlng, style_cap_darniza_28_0(feature));
    },
});
bounds_group.addLayer(layer_cap_darniza_28);
mymap.addLayer(layer_cap_darniza_28);
function pop_cap_dnipro_29(feature, layer) {
    var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Occupancy2'] !== null ? Autolinker.link(String(feature.properties['Occupancy2'])) : '') + '</td>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_cap_dnipro_29_0(feature) {
    if (feature.properties['q2wHide_Number'] >= 23.000000 && feature.properties['q2wHide_Number'] <= 227.000000 ) {
        return {
            pane: 'pane_cap_dnipro_29',
            radius: 3.0,
            opacity: 1,
            color: 'rgba(198,63,102,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(198,63,102,1.0)',
            renderer: renderer
        }
    }
    if (feature.properties['q2wHide_Number'] >= 227.000000 && feature.properties['q2wHide_Number'] <= 431.000000 ) {
        return {
            pane: 'pane_cap_dnipro_29',
            radius: 6.0,
            opacity: 1,
            color: 'rgba(198,63,102,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(198,63,102,1.0)',
            renderer: renderer
        }
    }
    if (feature.properties['q2wHide_Number'] >= 431.000000 && feature.properties['q2wHide_Number'] <= 635.000000 ) {
        return {
            pane: 'pane_cap_dnipro_29',
            radius: 9.0,
            opacity: 1,
            color: 'rgba(198,63,102,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(198,63,102,1.0)',
            renderer: renderer
        }
    }
    if (feature.properties['q2wHide_Number'] >= 635.000000 && feature.properties['q2wHide_Number'] <= 839.000000 ) {
        return {
            pane: 'pane_cap_dnipro_29',
            radius: 12.0,
            opacity: 1,
            color: 'rgba(198,63,102,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(198,63,102,1.0)',
            renderer: renderer
        }
    }
    if (feature.properties['q2wHide_Number'] >= 839.000000 && feature.properties['q2wHide_Number'] <= 1043.000000 ) {
        return {
            pane: 'pane_cap_dnipro_29',
            radius: 15.0,
            opacity: 1,
            color: 'rgba(198,63,102,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(198,63,102,1.0)',
            renderer: renderer
        }
    }
}
mymap.createPane('pane_cap_dnipro_29');
mymap.getPane('pane_cap_dnipro_29').style.zIndex = 429;
mymap.getPane('pane_cap_dnipro_29').style['mix-blend-mode'] = 'multiply';
var layer_cap_dnipro_29 = new L.geoJson(json_cap_dnipro_29, {
    attribution: '<a href=""></a>',
    pane: 'pane_cap_dnipro_29',
    onEachFeature: pop_cap_dnipro_29,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.circleMarker(latlng, style_cap_dnipro_29_0(feature));
    },
});
bounds_group.addLayer(layer_cap_dnipro_29);
mymap.addLayer(layer_cap_dnipro_29);
function pop_cap_podil_30(feature, layer) {
    var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Occupancy2'] !== null ? Autolinker.link(String(feature.properties['Occupancy2'])) : '') + '</td>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_cap_podil_30_0(feature) {
    if (feature.properties['q2wHide_Number'] >= 23.000000 && feature.properties['q2wHide_Number'] <= 227.000000 ) {
        return {
            pane: 'pane_cap_podil_30',
            radius: 3.0,
            opacity: 1,
            color: 'rgba(81,81,203,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(81,81,203,1.0)',
            renderer: renderer
        }
    }
    if (feature.properties['q2wHide_Number'] >= 227.000000 && feature.properties['q2wHide_Number'] <= 431.000000 ) {
        return {
            pane: 'pane_cap_podil_30',
            radius: 6.0,
            opacity: 1,
            color: 'rgba(81,81,203,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(81,81,203,1.0)',
            renderer: renderer
        }
    }
    if (feature.properties['q2wHide_Number'] >= 431.000000 && feature.properties['q2wHide_Number'] <= 635.000000 ) {
        return {
            pane: 'pane_cap_podil_30',
            radius: 9.0,
            opacity: 1,
            color: 'rgba(81,81,203,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(81,81,203,1.0)',
            renderer: renderer
        }
    }
    if (feature.properties['q2wHide_Number'] >= 635.000000 && feature.properties['q2wHide_Number'] <= 839.000000 ) {
        return {
            pane: 'pane_cap_podil_30',
            radius: 12.0,
            opacity: 1,
            color: 'rgba(81,81,203,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(81,81,203,1.0)',
            renderer: renderer
        }
    }
    if (feature.properties['q2wHide_Number'] >= 839.000000 && feature.properties['q2wHide_Number'] <= 1043.000000 ) {
        return {
            pane: 'pane_cap_podil_30',
            radius: 15.0,
            opacity: 1,
            color: 'rgba(81,81,203,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(81,81,203,1.0)',
            renderer: renderer
        }
    }
}
mymap.createPane('pane_cap_podil_30');
mymap.getPane('pane_cap_podil_30').style.zIndex = 430;
mymap.getPane('pane_cap_podil_30').style['mix-blend-mode'] = 'multiply';
var layer_cap_podil_30 = new L.geoJson(json_cap_podil_30, {
    attribution: '<a href=""></a>',
    pane: 'pane_cap_podil_30',
    onEachFeature: pop_cap_podil_30,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.circleMarker(latlng, style_cap_podil_30_0(feature));
    },
});
bounds_group.addLayer(layer_cap_podil_30);
mymap.addLayer(layer_cap_podil_30);
function pop_cap_shev_31(feature, layer) {
    var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Occupancy2'] !== null ? Autolinker.link(String(feature.properties['Occupancy2'])) : '') + '</td>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_cap_shev_31_0(feature) {
    if (feature.properties['q2wHide_Number'] >= 23.000000 && feature.properties['q2wHide_Number'] <= 227.000000 ) {
        return {
            pane: 'pane_cap_shev_31',
            radius: 3.0,
            opacity: 1,
            color: 'rgba(182,78,172,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(182,78,172,1.0)',
            renderer: renderer
        }
    }
    if (feature.properties['q2wHide_Number'] >= 227.000000 && feature.properties['q2wHide_Number'] <= 431.000000 ) {
        return {
            pane: 'pane_cap_shev_31',
            radius: 6.0,
            opacity: 1,
            color: 'rgba(182,78,172,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(182,78,172,1.0)',
            renderer: renderer
        }
    }
    if (feature.properties['q2wHide_Number'] >= 431.000000 && feature.properties['q2wHide_Number'] <= 635.000000 ) {
        return {
            pane: 'pane_cap_shev_31',
            radius: 9.0,
            opacity: 1,
            color: 'rgba(182,78,172,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(182,78,172,1.0)',
            renderer: renderer
        }
    }
    if (feature.properties['q2wHide_Number'] >= 635.000000 && feature.properties['q2wHide_Number'] <= 839.000000 ) {
        return {
            pane: 'pane_cap_shev_31',
            radius: 12.0,
            opacity: 1,
            color: 'rgba(182,78,172,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(182,78,172,1.0)',
            renderer: renderer
        }
    }
    if (feature.properties['q2wHide_Number'] >= 839.000000 && feature.properties['q2wHide_Number'] <= 1043.000000 ) {
        return {
            pane: 'pane_cap_shev_31',
            radius: 15.0,
            opacity: 1,
            color: 'rgba(182,78,172,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(182,78,172,1.0)',
            renderer: renderer
        }
    }
}
mymap.createPane('pane_cap_shev_31');
mymap.getPane('pane_cap_shev_31').style.zIndex = 431;
mymap.getPane('pane_cap_shev_31').style['mix-blend-mode'] = 'multiply';
var layer_cap_shev_31 = new L.geoJson(json_cap_shev_31, {
    attribution: '<a href=""></a>',
    pane: 'pane_cap_shev_31',
    onEachFeature: pop_cap_shev_31,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.circleMarker(latlng, style_cap_shev_31_0(feature));
    },
});
bounds_group.addLayer(layer_cap_shev_31);
mymap.addLayer(layer_cap_shev_31);
function pop_cap_pechersk_32(feature, layer) {
    var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Occupancy2'] !== null ? Autolinker.link(String(feature.properties['Occupancy2'])) : '') + '</td>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_cap_pechersk_32_0(feature) {
    if (feature.properties['q2wHide_Number'] >= 23.000000 && feature.properties['q2wHide_Number'] <= 227.000000 ) {
        return {
            pane: 'pane_cap_pechersk_32',
            radius: 3.0,
            opacity: 1,
            color: 'rgba(20,175,202,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(20,175,202,1.0)',
            renderer: renderer
        }
    }
    if (feature.properties['q2wHide_Number'] >= 227.000000 && feature.properties['q2wHide_Number'] <= 431.000000 ) {
        return {
            pane: 'pane_cap_pechersk_32',
            radius: 6.0,
            opacity: 1,
            color: 'rgba(20,175,202,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(20,175,202,1.0)',
            renderer: renderer
        }
    }
    if (feature.properties['q2wHide_Number'] >= 431.000000 && feature.properties['q2wHide_Number'] <= 635.000000 ) {
        return {
            pane: 'pane_cap_pechersk_32',
            radius: 9.0,
            opacity: 1,
            color: 'rgba(20,175,202,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(20,175,202,1.0)',
            renderer: renderer
        }
    }
    if (feature.properties['q2wHide_Number'] >= 635.000000 && feature.properties['q2wHide_Number'] <= 839.000000 ) {
        return {
            pane: 'pane_cap_pechersk_32',
            radius: 12.0,
            opacity: 1,
            color: 'rgba(20,175,202,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(20,175,202,1.0)',
            renderer: renderer
        }
    }
    if (feature.properties['q2wHide_Number'] >= 839.000000 && feature.properties['q2wHide_Number'] <= 1043.000000 ) {
        return {
            pane: 'pane_cap_pechersk_32',
            radius: 15.0,
            opacity: 1,
            color: 'rgba(20,175,202,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(20,175,202,1.0)',
            renderer: renderer
        }
    }
}
mymap.createPane('pane_cap_pechersk_32');
mymap.getPane('pane_cap_pechersk_32').style.zIndex = 432;
mymap.getPane('pane_cap_pechersk_32').style['mix-blend-mode'] = 'multiply';
var layer_cap_pechersk_32 = new L.geoJson(json_cap_pechersk_32, {
    attribution: '<a href=""></a>',
    pane: 'pane_cap_pechersk_32',
    onEachFeature: pop_cap_pechersk_32,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.circleMarker(latlng, style_cap_pechersk_32_0(feature));
    },
});
bounds_group.addLayer(layer_cap_pechersk_32);
mymap.addLayer(layer_cap_pechersk_32);
function pop_cap_golos_33(feature, layer) {
    var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Occupancy2'] !== null ? Autolinker.link(String(feature.properties['Occupancy2'])) : '') + '</td>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_cap_golos_33_0(feature) {
    if (feature.properties['q2wHide_Number'] >= 23.000000 && feature.properties['q2wHide_Number'] <= 227.000000 ) {
        return {
            pane: 'pane_cap_golos_33',
            radius: 3.0,
            opacity: 1,
            color: 'rgba(236,189,16,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(236,189,16,1.0)',
            renderer: renderer
        }
    }
    if (feature.properties['q2wHide_Number'] >= 227.000000 && feature.properties['q2wHide_Number'] <= 431.000000 ) {
        return {
            pane: 'pane_cap_golos_33',
            radius: 6.0,
            opacity: 1,
            color: 'rgba(236,189,16,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(236,189,16,1.0)',
            renderer: renderer
        }
    }
    if (feature.properties['q2wHide_Number'] >= 431.000000 && feature.properties['q2wHide_Number'] <= 635.000000 ) {
        return {
            pane: 'pane_cap_golos_33',
            radius: 9.0,
            opacity: 1,
            color: 'rgba(236,189,16,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(236,189,16,1.0)',
            renderer: renderer
        }
    }
    if (feature.properties['q2wHide_Number'] >= 635.000000 && feature.properties['q2wHide_Number'] <= 839.000000 ) {
        return {
            pane: 'pane_cap_golos_33',
            radius: 12.0,
            opacity: 1,
            color: 'rgba(236,189,16,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(236,189,16,1.0)',
            renderer: renderer
        }
    }
    if (feature.properties['q2wHide_Number'] >= 839.000000 && feature.properties['q2wHide_Number'] <= 1043.000000 ) {
        return {
            pane: 'pane_cap_golos_33',
            radius: 15.0,
            opacity: 1,
            color: 'rgba(236,189,16,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(236,189,16,1.0)',
            renderer: renderer
        }
    }
}
mymap.createPane('pane_cap_golos_33');
mymap.getPane('pane_cap_golos_33').style.zIndex = 433;
mymap.getPane('pane_cap_golos_33').style['mix-blend-mode'] = 'multiply';
var layer_cap_golos_33 = new L.geoJson(json_cap_golos_33, {
    attribution: '<a href=""></a>',
    pane: 'pane_cap_golos_33',
    onEachFeature: pop_cap_golos_33,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.circleMarker(latlng, style_cap_golos_33_0(feature));
    },
});
bounds_group.addLayer(layer_cap_golos_33);
mymap.addLayer(layer_cap_golos_33);
function pop_cap_solom_34(feature, layer) {
    var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Occupancy2'] !== null ? Autolinker.link(String(feature.properties['Occupancy2'])) : '') + '</td>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_cap_solom_34_0(feature) {
    if (feature.properties['q2wHide_Number'] >= 23.000000 && feature.properties['q2wHide_Number'] <= 227.000000 ) {
        return {
            pane: 'pane_cap_solom_34',
            radius: 3.0,
            opacity: 1,
            color: 'rgba(177,176,82,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(177,176,82,1.0)',
            renderer: renderer
        }
    }
    if (feature.properties['q2wHide_Number'] >= 227.000000 && feature.properties['q2wHide_Number'] <= 431.000000 ) {
        return {
            pane: 'pane_cap_solom_34',
            radius: 6.0,
            opacity: 1,
            color: 'rgba(177,176,82,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(177,176,82,1.0)',
            renderer: renderer
        }
    }
    if (feature.properties['q2wHide_Number'] >= 431.000000 && feature.properties['q2wHide_Number'] <= 635.000000 ) {
        return {
            pane: 'pane_cap_solom_34',
            radius: 9.0,
            opacity: 1,
            color: 'rgba(177,176,82,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(177,176,82,1.0)',
            renderer: renderer
        }
    }
    if (feature.properties['q2wHide_Number'] >= 635.000000 && feature.properties['q2wHide_Number'] <= 839.000000 ) {
        return {
            pane: 'pane_cap_solom_34',
            radius: 12.0,
            opacity: 1,
            color: 'rgba(177,176,82,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(177,176,82,1.0)',
            renderer: renderer
        }
    }
    if (feature.properties['q2wHide_Number'] >= 839.000000 && feature.properties['q2wHide_Number'] <= 1043.000000 ) {
        return {
            pane: 'pane_cap_solom_34',
            radius: 15.0,
            opacity: 1,
            color: 'rgba(177,176,82,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(177,176,82,1.0)',
            renderer: renderer
        }
    }
}
mymap.createPane('pane_cap_solom_34');
mymap.getPane('pane_cap_solom_34').style.zIndex = 434;
mymap.getPane('pane_cap_solom_34').style['mix-blend-mode'] = 'multiply';
var layer_cap_solom_34 = new L.geoJson(json_cap_solom_34, {
    attribution: '<a href=""></a>',
    pane: 'pane_cap_solom_34',
    onEachFeature: pop_cap_solom_34,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.circleMarker(latlng, style_cap_solom_34_0(feature));
    },
});
bounds_group.addLayer(layer_cap_solom_34);
mymap.addLayer(layer_cap_solom_34);
function pop_cap_obolon_35(feature, layer) {
    var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Occupancy2'] !== null ? Autolinker.link(String(feature.properties['Occupancy2'])) : '') + '</td>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_cap_obolon_35_0(feature) {
    if (feature.properties['q2wHide_Number'] >= 23.000000 && feature.properties['q2wHide_Number'] <= 227.000000 ) {
        return {
            pane: 'pane_cap_obolon_35',
            radius: 3.0,
            opacity: 1,
            color: 'rgba(193,107,69,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(193,107,69,1.0)',
            renderer: renderer
        }
    }
    if (feature.properties['q2wHide_Number'] >= 227.000000 && feature.properties['q2wHide_Number'] <= 431.000000 ) {
        return {
            pane: 'pane_cap_obolon_35',
            radius: 6.0,
            opacity: 1,
            color: 'rgba(193,107,69,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(193,107,69,1.0)',
            renderer: renderer
        }
    }
    if (feature.properties['q2wHide_Number'] >= 431.000000 && feature.properties['q2wHide_Number'] <= 635.000000 ) {
        return {
            pane: 'pane_cap_obolon_35',
            radius: 9.0,
            opacity: 1,
            color: 'rgba(193,107,69,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(193,107,69,1.0)',
            renderer: renderer
        }
    }
    if (feature.properties['q2wHide_Number'] >= 635.000000 && feature.properties['q2wHide_Number'] <= 839.000000 ) {
        return {
            pane: 'pane_cap_obolon_35',
            radius: 12.0,
            opacity: 1,
            color: 'rgba(193,107,69,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(193,107,69,1.0)',
            renderer: renderer
        }
    }
    if (feature.properties['q2wHide_Number'] >= 839.000000 && feature.properties['q2wHide_Number'] <= 1043.000000 ) {
        return {
            pane: 'pane_cap_obolon_35',
            radius: 15.0,
            opacity: 1,
            color: 'rgba(193,107,69,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(193,107,69,1.0)',
            renderer: renderer
        }
    }
}
mymap.createPane('pane_cap_obolon_35');
mymap.getPane('pane_cap_obolon_35').style.zIndex = 435;
mymap.getPane('pane_cap_obolon_35').style['mix-blend-mode'] = 'multiply';
var layer_cap_obolon_35 = new L.geoJson(json_cap_obolon_35, {
    attribution: '<a href=""></a>',
    pane: 'pane_cap_obolon_35',
    onEachFeature: pop_cap_obolon_35,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.circleMarker(latlng, style_cap_obolon_35_0(feature));
    },
});
bounds_group.addLayer(layer_cap_obolon_35);
mymap.addLayer(layer_cap_obolon_35);
function pop_cap_svyat_36(feature, layer) {
    var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Occupancy2'] !== null ? Autolinker.link(String(feature.properties['Occupancy2'])) : '') + '</td>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_cap_svyat_36_0(feature) {
    if (feature.properties['q2wHide_Number'] >= 23.000000 && feature.properties['q2wHide_Number'] <= 227.000000 ) {
        return {
            pane: 'pane_cap_svyat_36',
            radius: 3.0,
            opacity: 1,
            color: 'rgba(50,156,123,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(50,156,123,1.0)',
            renderer: renderer
        }
    }
    if (feature.properties['q2wHide_Number'] >= 227.000000 && feature.properties['q2wHide_Number'] <= 431.000000 ) {
        return {
            pane: 'pane_cap_svyat_36',
            radius: 6.0,
            opacity: 1,
            color: 'rgba(50,156,123,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(50,156,123,1.0)',
            renderer: renderer
        }
    }
    if (feature.properties['q2wHide_Number'] >= 431.000000 && feature.properties['q2wHide_Number'] <= 635.000000 ) {
        return {
            pane: 'pane_cap_svyat_36',
            radius: 9.0,
            opacity: 1,
            color: 'rgba(50,156,123,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(50,156,123,1.0)',
            renderer: renderer
        }
    }
    if (feature.properties['q2wHide_Number'] >= 635.000000 && feature.properties['q2wHide_Number'] <= 839.000000 ) {
        return {
            pane: 'pane_cap_svyat_36',
            radius: 12.0,
            opacity: 1,
            color: 'rgba(50,156,123,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(50,156,123,1.0)',
            renderer: renderer
        }
    }
    if (feature.properties['q2wHide_Number'] >= 839.000000 && feature.properties['q2wHide_Number'] <= 1043.000000 ) {
        return {
            pane: 'pane_cap_svyat_36',
            radius: 15.0,
            opacity: 1,
            color: 'rgba(50,156,123,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(50,156,123,1.0)',
            renderer: renderer
        }
    }
}
mymap.createPane('pane_cap_svyat_36');
mymap.getPane('pane_cap_svyat_36').style.zIndex = 436;
mymap.getPane('pane_cap_svyat_36').style['mix-blend-mode'] = 'multiply';
var layer_cap_svyat_36 = new L.geoJson(json_cap_svyat_36, {
    attribution: '<a href=""></a>',
    pane: 'pane_cap_svyat_36',
    onEachFeature: pop_cap_svyat_36,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.circleMarker(latlng, style_cap_svyat_36_0(feature));
    },
});
bounds_group.addLayer(layer_cap_svyat_36);
mymap.addLayer(layer_cap_svyat_36);

mymap.addLayer(layer_s_svyatosh_3);
mymap.addLayer(layer_s_dnipro_6);
mymap.addLayer(layer_s_solom_9);
mymap.addLayer(layer_s_darnyza_12);
mymap.addLayer(layer_s_obolon_15);
mymap.addLayer(layer_s_pechersk_18);
mymap.addLayer(layer_s_golosievo_21);
mymap.addLayer(layer_s_shev_24);
mymap.addLayer(layer_s_podil_27);


var osmGeocoder = new L.Control.OSMGeocoder({
    collapsed: false,
    position: 'topright',
    text: 'пошук за адресою',
});
osmGeocoder.addTo(mymap);
var baseMaps = {};
L.control.layers(baseMaps,{'<b>Потужність школи (кількість учнів 1-4 класів)</b><br /><table><tr><td style="text-align: center;"><img src="map2/legend/cap_svyat_36_23000022700000.png" /></td><td> 23 - 227 </td></tr><tr><td style="text-align: center;"><img src="map2/legend/cap_svyat_36_227000043100001.png" /></td><td> 227 - 431 </td></tr><tr><td style="text-align: center;"><img src="map2/legend/cap_svyat_36_431000063500002.png" /></td><td> 431 - 635 </td></tr><tr><td style="text-align: center;"><img src="map2/legend/cap_svyat_36_635000083900003.png" /></td><td> 635 - 839 </td></tr><tr><td style="text-align: center;"><img src="map2/legend/cap_svyat_36_8390000104300004.png" /></td><td> 839 - 1043 </td></tr></table>' : layer_cap_svyat_36},{collapsed:false}).addTo(mymap);
setBounds();
var i = 0;
layer_s_svyatosh_3.eachLayer(function(layer) {
    var context = {
        feature: layer.feature,
        variables: {}
    };
    layer.bindTooltip((layer.feature.properties['School'] !== null?String('<div style="color: #000000; font-size: 8pt; font-weight: bold; font-family: \'Open Sans\', sans-serif;">' + layer.feature.properties['School']) + '</div>':''), {permanent: true, offset: [-0, -16], className: 'css_s_svyatosh_3'});
    labels.push(layer);
    totalMarkers += 1;
    layer.added = true;
    addLabel(layer, i);
    i++;
});
var i = 0;
layer_s_dnipro_6.eachLayer(function(layer) {
    var context = {
        feature: layer.feature,
        variables: {}
    };
    layer.bindTooltip((layer.feature.properties['School'] !== null?String('<div style="color: #000000; font-size: 8pt; font-weight: bold; font-family: \'Open Sans\', sans-serif;">' + layer.feature.properties['School']) + '</div>':''), {permanent: true, offset: [-0, -16], className: 'css_s_dnipro_6'});
    labels.push(layer);
    totalMarkers += 1;
    layer.added = true;
    addLabel(layer, i);
    i++;
});
var i = 0;
layer_s_solom_9.eachLayer(function(layer) {
    var context = {
        feature: layer.feature,
        variables: {}
    };
    layer.bindTooltip((layer.feature.properties['School'] !== null?String('<div style="color: #000000; font-size: 8pt; font-weight: bold; font-family: \'Open Sans\', sans-serif;">' + layer.feature.properties['School']) + '</div>':''), {permanent: true, offset: [-0, -16], className: 'css_s_solom_9'});
    labels.push(layer);
    totalMarkers += 1;
    layer.added = true;
    addLabel(layer, i);
    i++;
});
var i = 0;
layer_s_darnyza_12.eachLayer(function(layer) {
    var context = {
        feature: layer.feature,
        variables: {}
    };
    layer.bindTooltip((layer.feature.properties['School nam'] !== null?String('<div style="color: #000000; font-size: 8pt; font-weight: bold; font-family: \'Open Sans\', sans-serif;">' + layer.feature.properties['School nam']) + '</div>':''), {permanent: true, offset: [-0, -16], className: 'css_s_darnyza_12'});
    labels.push(layer);
    totalMarkers += 1;
    layer.added = true;
    addLabel(layer, i);
    i++;
});
var i = 0;
layer_s_obolon_15.eachLayer(function(layer) {
    var context = {
        feature: layer.feature,
        variables: {}
    };
    layer.bindTooltip((layer.feature.properties['School'] !== null?String('<div style="color: #000000; font-size: 8pt; font-weight: bold; font-family: \'Open Sans\', sans-serif;">' + layer.feature.properties['School']) + '</div>':''), {permanent: true, offset: [-0, -16], className: 'css_s_obolon_15'});
    labels.push(layer);
    totalMarkers += 1;
    layer.added = true;
    addLabel(layer, i);
    i++;
});
var i = 0;
layer_s_pechersk_18.eachLayer(function(layer) {
    var context = {
        feature: layer.feature,
        variables: {}
    };
    layer.bindTooltip((layer.feature.properties['School'] !== null?String('<div style="color: #000000; font-size: 8pt; font-weight: bold; font-family: \'Open Sans\', sans-serif;">' + layer.feature.properties['School']) + '</div>':''), {permanent: true, offset: [-0, -16], className: 'css_s_pechersk_18'});
    labels.push(layer);
    totalMarkers += 1;
    layer.added = true;
    addLabel(layer, i);
    i++;
});
var i = 0;
layer_s_golosievo_21.eachLayer(function(layer) {
    var context = {
        feature: layer.feature,
        variables: {}
    };
    layer.bindTooltip((layer.feature.properties['School'] !== null?String('<div style="color: #000000; font-size: 8pt; font-weight: bold; font-family: \'Open Sans\', sans-serif;">' + layer.feature.properties['School']) + '</div>':''), {permanent: true, offset: [-0, -16], className: 'css_s_golosievo_21'});
    labels.push(layer);
    totalMarkers += 1;
    layer.added = true;
    addLabel(layer, i);
    i++;
});
var i = 0;
layer_s_shev_24.eachLayer(function(layer) {
    var context = {
        feature: layer.feature,
        variables: {}
    };
    layer.bindTooltip((layer.feature.properties['School'] !== null?String('<div style="color: #000000; font-size: 8pt; font-weight: bold; font-family: \'Open Sans\', sans-serif;">' + layer.feature.properties['School']) + '</div>':''), {permanent: true, offset: [-0, -16], className: 'css_s_shev_24'});
    labels.push(layer);
    totalMarkers += 1;
    layer.added = true;
    addLabel(layer, i);
    i++;
});
var i = 0;
layer_s_podil_27.eachLayer(function(layer) {
    var context = {
        feature: layer.feature,
        variables: {}
    };
    layer.bindTooltip((layer.feature.properties['School'] !== null?String('<div style="color: #000000; font-size: 8pt; font-weight: bold; font-family: \'Open Sans\', sans-serif;">' + layer.feature.properties['School']) + '</div>':''), {permanent: true, offset: [-0, -16], className: 'css_s_podil_27'});
    labels.push(layer);
    totalMarkers += 1;
    layer.added = true;
    addLabel(layer, i);
    i++;
});
resetLabels([layer_ssvyatosh_3,layer_sdnipro_6,layer_ssolom_9,layer_sdarnyza_12,layer_sobolon_15,layer_spechersk_18,layer_sgolosievo_21,layer_sshev_24,layer_spodil_27]);
mymap.on("zoomend", function(){
    resetLabels([layer_ssvyatosh_3,layer_sdnipro_6,layer_ssolom_9,layer_sdarnyza_12,layer_sobolon_15,layer_spechersk_18,layer_sgolosievo_21,layer_sshev_24,layer_spodil_27]);
});
mymap.on("layeradd", function(){
    resetLabels([layer_ssvyatosh_3,layer_sdnipro_6,layer_ssolom_9,layer_sdarnyza_12,layer_sobolon_15,layer_spechersk_18,layer_sgolosievo_21,layer_sshev_24,layer_spodil_27]);
});
mymap.on("layerremove", function(){
    resetLabels([layer_ssvyatosh_3,layer_sdnipro_6,layer_ssolom_9,layer_sdarnyza_12,layer_sobolon_15,layer_spechersk_18,layer_sgolosievo_21,layer_sshev_24,layer_spodil_27]);
});
