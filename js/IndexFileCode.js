var map = L.map('map', {
    zoomControl:true, maxZoom:16, minZoom:11, renderer: L.canvas()
})

map.scrollWheelZoom.disable();
map.on('focus', () => { map.scrollWheelZoom.enable(); });
map.on('blur', () => { map.scrollWheelZoom.disable(); });

var visible;


map.on('zoomend', function (e) {
    // Check zoom level
    if (map.getZoom() < 14) {
      console.log(map.getZoom())
      $('.leaflet-tooltip').css("display", "none")

    } else {
        $('.leaflet-tooltip').css("display", "block")
    }
});


var renderer = L.canvas();
var hash = new L.Hash(map);
map.attributionControl.addAttribution('<a href="https://github.com/tomchadwin/qgis2web" target="_blank">qgis2web</a>');
var bounds_group = new L.featureGroup([]);
function setBounds() {
    if (bounds_group.getLayers().length) {
        map.fitBounds(bounds_group.getBounds());
    }
}
var overlay_NEW_0 = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
    opacity: 1.0
});
overlay_NEW_0.addTo(map);
map.addLayer(overlay_NEW_0);
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
map.createPane('pane_Svyatoshynsky_area_houses3_1');
map.getPane('pane_Svyatoshynsky_area_houses3_1').style.zIndex = 401;
map.getPane('pane_Svyatoshynsky_area_houses3_1').style['mix-blend-mode'] = 'normal';
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
map.addLayer(layer_Svyatoshynsky_area_houses3_1);
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
map.createPane('pane_Svytoshynsky_area_connections3_2');
map.getPane('pane_Svytoshynsky_area_connections3_2').style.zIndex = 402;
map.getPane('pane_Svytoshynsky_area_connections3_2').style['mix-blend-mode'] = 'normal';
var layer_Svytoshynsky_area_connections3_2 = new L.geoJson(json_Svytoshynsky_area_connections3_2, {
    attribution: '<a href=""></a>',
    pane: 'pane_Svytoshynsky_area_connections3_2',
    onEachFeature: pop_Svytoshynsky_area_connections3_2,
    style: style_Svytoshynsky_area_connections3_2_0,
});
bounds_group.addLayer(layer_Svytoshynsky_area_connections3_2);
map.addLayer(layer_Svytoshynsky_area_connections3_2);
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
map.createPane('pane_s_svyatosh_3');
map.getPane('pane_s_svyatosh_3').style.zIndex = 403;
map.getPane('pane_s_svyatosh_3').style['mix-blend-mode'] = 'normal';
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
map.createPane('pane_Dnipro_houses_4');
map.getPane('pane_Dnipro_houses_4').style.zIndex = 404;
map.getPane('pane_Dnipro_houses_4').style['mix-blend-mode'] = 'normal';
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
map.addLayer(layer_Dnipro_houses_4);
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
map.createPane('pane_Dnipro_area_connections4_5');
map.getPane('pane_Dnipro_area_connections4_5').style.zIndex = 405;
map.getPane('pane_Dnipro_area_connections4_5').style['mix-blend-mode'] = 'normal';
var layer_Dnipro_area_connections4_5 = new L.geoJson(json_Dnipro_area_connections4_5, {
    attribution: '<a href=""></a>',
    pane: 'pane_Dnipro_area_connections4_5',
    onEachFeature: pop_Dnipro_area_connections4_5,
    style: style_Dnipro_area_connections4_5_0,
});
bounds_group.addLayer(layer_Dnipro_area_connections4_5);
map.addLayer(layer_Dnipro_area_connections4_5);
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
map.createPane('pane_s_dnipro_6');
map.getPane('pane_s_dnipro_6').style.zIndex = 406;
map.getPane('pane_s_dnipro_6').style['mix-blend-mode'] = 'normal';
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
function pop_desnyansky_houses_7(feature, layer) {
    var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Geo'] !== null ? Autolinker.link(String(feature.properties['Geo'])) : '') + '</td>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}
function style_desnyansky_houses_7_0() {
    return {
        pane: 'pane_desnyansky_houses_7',
        radius: 2.4,
        stroke: false,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(0,126,125,1.0)',
        renderer: renderer
    }
}
map.createPane('pane_desnyansky_houses_7');
map.getPane('pane_desnyansky_houses_7').style.zIndex = 407;
map.getPane('pane_desnyansky_houses_7').style['mix-blend-mode'] = 'normal';
var layer_desnyansky_houses_7 = new L.geoJson(json_desnyansky_houses_7, {
    attribution: '<a href=""></a>',
    pane: 'pane_desnyansky_houses_7',
    onEachFeature: pop_desnyansky_houses_7,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.circleMarker(latlng, style_desnyansky_houses_7_0(feature));
    },
});
bounds_group.addLayer(layer_desnyansky_houses_7);
map.addLayer(layer_desnyansky_houses_7);
function pop_Desnyansjy_area_connections3_8(feature, layer) {
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
function style_Desnyansjy_area_connections3_8_0() {
    return {
        pane: 'pane_Desnyansjy_area_connections3_8',
        opacity: 1,
        color: 'rgba(0,126,125,1.0)',
        dashArray: '',
        lineCap: 'square',
        lineJoin: 'bevel',
        weight: 1,
        fillOpacity: 0,
        renderer: renderer
    }
}
map.createPane('pane_Desnyansjy_area_connections3_8');
map.getPane('pane_Desnyansjy_area_connections3_8').style.zIndex = 408;
map.getPane('pane_Desnyansjy_area_connections3_8').style['mix-blend-mode'] = 'multiply';
var layer_Desnyansjy_area_connections3_8 = new L.geoJson(json_Desnyansjy_area_connections3_8, {
    attribution: '<a href=""></a>',
    pane: 'pane_Desnyansjy_area_connections3_8',
    onEachFeature: pop_Desnyansjy_area_connections3_8,
    style: style_Desnyansjy_area_connections3_8_0,
});
bounds_group.addLayer(layer_Desnyansjy_area_connections3_8);
map.addLayer(layer_Desnyansjy_area_connections3_8);
function pop_s_desnyansky_9(feature, layer) {
    var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['School'] !== null ? Autolinker.link(String(feature.properties['School'])) : '') + '</td>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}
function style_s_desnyansky_9_0() {
    return {
        pane: 'pane_s_desnyansky_9',
        radius: 2.0,
        stroke: false,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(0,0,0,0.5019607843137255)',
        renderer: renderer
    }
}
map.createPane('pane_s_desnyansky_9');
map.getPane('pane_s_desnyansky_9').style.zIndex = 409;
map.getPane('pane_s_desnyansky_9').style['mix-blend-mode'] = 'normal';
var layer_s_desnyansky_9 = new L.geoJson(json_s_desnyansky_9, {
    attribution: '<a href=""></a>',
    pane: 'pane_s_desnyansky_9',
    onEachFeature: pop_s_desnyansky_9,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.circleMarker(latlng, style_s_desnyansky_9_0(feature));
    },
});
bounds_group.addLayer(layer_s_desnyansky_9);
function pop_solomyansky_houses2_10(feature, layer) {
    var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Geo'] !== null ? Autolinker.link(String(feature.properties['Geo'])) : '') + '</td>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}
function style_solomyansky_houses2_10_0() {
    return {
        pane: 'pane_solomyansky_houses2_10',
        radius: 2.4,
        stroke: false,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(177,176,82,1.0)',
        renderer: renderer
    }
}
map.createPane('pane_solomyansky_houses2_10');
map.getPane('pane_solomyansky_houses2_10').style.zIndex = 410;
map.getPane('pane_solomyansky_houses2_10').style['mix-blend-mode'] = 'normal';
var layer_solomyansky_houses2_10 = new L.geoJson(json_solomyansky_houses2_10, {
    attribution: '<a href=""></a>',
    pane: 'pane_solomyansky_houses2_10',
    onEachFeature: pop_solomyansky_houses2_10,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.circleMarker(latlng, style_solomyansky_houses2_10_0(feature));
    },
});
bounds_group.addLayer(layer_solomyansky_houses2_10);
map.addLayer(layer_solomyansky_houses2_10);
function pop_Solomyansky_area_connections3_11(feature, layer) {
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
function style_Solomyansky_area_connections3_11_0() {
    return {
        pane: 'pane_Solomyansky_area_connections3_11',
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
map.createPane('pane_Solomyansky_area_connections3_11');
map.getPane('pane_Solomyansky_area_connections3_11').style.zIndex = 411;
map.getPane('pane_Solomyansky_area_connections3_11').style['mix-blend-mode'] = 'multiply';
var layer_Solomyansky_area_connections3_11 = new L.geoJson(json_Solomyansky_area_connections3_11, {
    attribution: '<a href=""></a>',
    pane: 'pane_Solomyansky_area_connections3_11',
    onEachFeature: pop_Solomyansky_area_connections3_11,
    style: style_Solomyansky_area_connections3_11_0,
});
bounds_group.addLayer(layer_Solomyansky_area_connections3_11);
map.addLayer(layer_Solomyansky_area_connections3_11);
function pop_s_solom_12(feature, layer) {
    var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['School'] !== null ? Autolinker.link(String(feature.properties['School'])) : '') + '</td>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}
function style_s_solom_12_0() {
    return {
        pane: 'pane_s_solom_12',
        radius: 2.0,
        stroke: false,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(0,0,0,0.5019607843137255)',
        renderer: renderer
    }
}
map.createPane('pane_s_solom_12');
map.getPane('pane_s_solom_12').style.zIndex = 412;
map.getPane('pane_s_solom_12').style['mix-blend-mode'] = 'normal';
var layer_s_solom_12 = new L.geoJson(json_s_solom_12, {
    attribution: '<a href=""></a>',
    pane: 'pane_s_solom_12',
    onEachFeature: pop_s_solom_12,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.circleMarker(latlng, style_s_solom_12_0(feature));
    },
});
bounds_group.addLayer(layer_s_solom_12);
function pop_Darnytsky_area_connections_13(feature, layer) {
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
function style_Darnytsky_area_connections_13_0() {
    return {
        pane: 'pane_Darnytsky_area_connections_13',
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
map.createPane('pane_Darnytsky_area_connections_13');
map.getPane('pane_Darnytsky_area_connections_13').style.zIndex = 413;
map.getPane('pane_Darnytsky_area_connections_13').style['mix-blend-mode'] = 'multiply';
var layer_Darnytsky_area_connections_13 = new L.geoJson(json_Darnytsky_area_connections_13, {
    attribution: '<a href=""></a>',
    pane: 'pane_Darnytsky_area_connections_13',
    onEachFeature: pop_Darnytsky_area_connections_13,
    style: style_Darnytsky_area_connections_13_0,
});
bounds_group.addLayer(layer_Darnytsky_area_connections_13);
map.addLayer(layer_Darnytsky_area_connections_13);
function pop_Darnytsky_houses_14(feature, layer) {
    var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Geo'] !== null ? Autolinker.link(String(feature.properties['Geo'])) : '') + '</td>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}
function style_Darnytsky_houses_14_0() {
    return {
        pane: 'pane_Darnytsky_houses_14',
        radius: 2.0,
        stroke: false,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(90,97,176,1.0)',
        renderer: renderer
    }
}
map.createPane('pane_Darnytsky_houses_14');
map.getPane('pane_Darnytsky_houses_14').style.zIndex = 414;
map.getPane('pane_Darnytsky_houses_14').style['mix-blend-mode'] = 'normal';
var layer_Darnytsky_houses_14 = new L.geoJson(json_Darnytsky_houses_14, {
    attribution: '<a href=""></a>',
    pane: 'pane_Darnytsky_houses_14',
    onEachFeature: pop_Darnytsky_houses_14,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.circleMarker(latlng, style_Darnytsky_houses_14_0(feature));
    },
});
bounds_group.addLayer(layer_Darnytsky_houses_14);
map.addLayer(layer_Darnytsky_houses_14);
function pop_s_darnyza_15(feature, layer) {
    var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['School nam'] !== null ? Autolinker.link(String(feature.properties['School nam'])) : '') + '</td>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}
function style_s_darnyza_15_0() {
    return {
        pane: 'pane_s_darnyza_15',
        radius: 2.0,
        stroke: false,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(0,0,0,0.5019607843137255)',
        renderer: renderer
    }
}
map.createPane('pane_s_darnyza_15');
map.getPane('pane_s_darnyza_15').style.zIndex = 415;
map.getPane('pane_s_darnyza_15').style['mix-blend-mode'] = 'normal';
var layer_s_darnyza_15 = new L.geoJson(json_s_darnyza_15, {
    attribution: '<a href=""></a>',
    pane: 'pane_s_darnyza_15',
    onEachFeature: pop_s_darnyza_15,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.circleMarker(latlng, style_s_darnyza_15_0(feature));
    },
});
bounds_group.addLayer(layer_s_darnyza_15);
function pop_Obolon_area_houses_16(feature, layer) {
    var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Geo'] !== null ? Autolinker.link(String(feature.properties['Geo'])) : '') + '</td>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}
function style_Obolon_area_houses_16_0() {
    return {
        pane: 'pane_Obolon_area_houses_16',
        radius: 2.4,
        stroke: false,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(193,107,69,1.0)',
        renderer: renderer
    }
}
map.createPane('pane_Obolon_area_houses_16');
map.getPane('pane_Obolon_area_houses_16').style.zIndex = 416;
map.getPane('pane_Obolon_area_houses_16').style['mix-blend-mode'] = 'normal';
var layer_Obolon_area_houses_16 = new L.geoJson(json_Obolon_area_houses_16, {
    attribution: '<a href=""></a>',
    pane: 'pane_Obolon_area_houses_16',
    onEachFeature: pop_Obolon_area_houses_16,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.circleMarker(latlng, style_Obolon_area_houses_16_0(feature));
    },
});
bounds_group.addLayer(layer_Obolon_area_houses_16);
map.addLayer(layer_Obolon_area_houses_16);
function pop_Obolon_area_connections3_17(feature, layer) {
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
function style_Obolon_area_connections3_17_0() {
    return {
        pane: 'pane_Obolon_area_connections3_17',
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
map.createPane('pane_Obolon_area_connections3_17');
map.getPane('pane_Obolon_area_connections3_17').style.zIndex = 417;
map.getPane('pane_Obolon_area_connections3_17').style['mix-blend-mode'] = 'multiply';
var layer_Obolon_area_connections3_17 = new L.geoJson(json_Obolon_area_connections3_17, {
    attribution: '<a href=""></a>',
    pane: 'pane_Obolon_area_connections3_17',
    onEachFeature: pop_Obolon_area_connections3_17,
    style: style_Obolon_area_connections3_17_0,
});
bounds_group.addLayer(layer_Obolon_area_connections3_17);
map.addLayer(layer_Obolon_area_connections3_17);
function pop_s_obolon_18(feature, layer) {
    var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['School'] !== null ? Autolinker.link(String(feature.properties['School'])) : '') + '</td>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}
function style_s_obolon_18_0() {
    return {
        pane: 'pane_s_obolon_18',
        radius: 2.0,
        stroke: false,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(0,0,0,0.5019607843137255)',
        renderer: renderer
    }
}
map.createPane('pane_s_obolon_18');
map.getPane('pane_s_obolon_18').style.zIndex = 418;
map.getPane('pane_s_obolon_18').style['mix-blend-mode'] = 'normal';
var layer_s_obolon_18 = new L.geoJson(json_s_obolon_18, {
    attribution: '<a href=""></a>',
    pane: 'pane_s_obolon_18',
    onEachFeature: pop_s_obolon_18,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.circleMarker(latlng, style_s_obolon_18_0(feature));
    },
});
bounds_group.addLayer(layer_s_obolon_18);
function pop_Pechersky_area_connections2_19(feature, layer) {
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
function style_Pechersky_area_connections2_19_0() {
    return {
        pane: 'pane_Pechersky_area_connections2_19',
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
map.createPane('pane_Pechersky_area_connections2_19');
map.getPane('pane_Pechersky_area_connections2_19').style.zIndex = 419;
map.getPane('pane_Pechersky_area_connections2_19').style['mix-blend-mode'] = 'normal';
var layer_Pechersky_area_connections2_19 = new L.geoJson(json_Pechersky_area_connections2_19, {
    attribution: '<a href=""></a>',
    pane: 'pane_Pechersky_area_connections2_19',
    onEachFeature: pop_Pechersky_area_connections2_19,
    style: style_Pechersky_area_connections2_19_0,
});
bounds_group.addLayer(layer_Pechersky_area_connections2_19);
map.addLayer(layer_Pechersky_area_connections2_19);
function pop_Pechersky_area_houses3_20(feature, layer) {
    var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Geo'] !== null ? Autolinker.link(String(feature.properties['Geo'])) : '') + '</td>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}
function style_Pechersky_area_houses3_20_0() {
    return {
        pane: 'pane_Pechersky_area_houses3_20',
        radius: 2.4,
        stroke: false,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(20,175,202,1.0)',
        renderer: renderer
    }
}
map.createPane('pane_Pechersky_area_houses3_20');
map.getPane('pane_Pechersky_area_houses3_20').style.zIndex = 420;
map.getPane('pane_Pechersky_area_houses3_20').style['mix-blend-mode'] = 'normal';
var layer_Pechersky_area_houses3_20 = new L.geoJson(json_Pechersky_area_houses3_20, {
    attribution: '<a href=""></a>',
    pane: 'pane_Pechersky_area_houses3_20',
    onEachFeature: pop_Pechersky_area_houses3_20,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.circleMarker(latlng, style_Pechersky_area_houses3_20_0(feature));
    },
});
bounds_group.addLayer(layer_Pechersky_area_houses3_20);
map.addLayer(layer_Pechersky_area_houses3_20);
function pop_s_pechersk_21(feature, layer) {
    var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['School'] !== null ? Autolinker.link(String(feature.properties['School'])) : '') + '</td>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}
function style_s_pechersk_21_0() {
    return {
        pane: 'pane_s_pechersk_21',
        radius: 2.0,
        stroke: false,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(0,0,0,0.5019607843137255)',
        renderer: renderer
    }
}
map.createPane('pane_s_pechersk_21');
map.getPane('pane_s_pechersk_21').style.zIndex = 421;
map.getPane('pane_s_pechersk_21').style['mix-blend-mode'] = 'normal';
var layer_s_pechersk_21 = new L.geoJson(json_s_pechersk_21, {
    attribution: '<a href=""></a>',
    pane: 'pane_s_pechersk_21',
    onEachFeature: pop_s_pechersk_21,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.circleMarker(latlng, style_s_pechersk_21_0(feature));
    },
});
bounds_group.addLayer(layer_s_pechersk_21);
function pop_Golosievsky_area_connections2_22(feature, layer) {
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
function style_Golosievsky_area_connections2_22_0() {
    return {
        pane: 'pane_Golosievsky_area_connections2_22',
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
map.createPane('pane_Golosievsky_area_connections2_22');
map.getPane('pane_Golosievsky_area_connections2_22').style.zIndex = 422;
map.getPane('pane_Golosievsky_area_connections2_22').style['mix-blend-mode'] = 'multiply';
var layer_Golosievsky_area_connections2_22 = new L.geoJson(json_Golosievsky_area_connections2_22, {
    attribution: '<a href=""></a>',
    pane: 'pane_Golosievsky_area_connections2_22',
    onEachFeature: pop_Golosievsky_area_connections2_22,
    style: style_Golosievsky_area_connections2_22_0,
});
bounds_group.addLayer(layer_Golosievsky_area_connections2_22);
map.addLayer(layer_Golosievsky_area_connections2_22);
function pop_Golosievsky_houses_23(feature, layer) {
    var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Geo'] !== null ? Autolinker.link(String(feature.properties['Geo'])) : '') + '</td>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}
function style_Golosievsky_houses_23_0() {
    return {
        pane: 'pane_Golosievsky_houses_23',
        radius: 2.4,
        stroke: false,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(236,189,16,1.0)',
        renderer: renderer
    }
}
map.createPane('pane_Golosievsky_houses_23');
map.getPane('pane_Golosievsky_houses_23').style.zIndex = 423;
map.getPane('pane_Golosievsky_houses_23').style['mix-blend-mode'] = 'normal';
var layer_Golosievsky_houses_23 = new L.geoJson(json_Golosievsky_houses_23, {
    attribution: '<a href=""></a>',
    pane: 'pane_Golosievsky_houses_23',
    onEachFeature: pop_Golosievsky_houses_23,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.circleMarker(latlng, style_Golosievsky_houses_23_0(feature));
    },
});
bounds_group.addLayer(layer_Golosievsky_houses_23);
map.addLayer(layer_Golosievsky_houses_23);
function pop_s_golosievo_24(feature, layer) {
    var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['School'] !== null ? Autolinker.link(String(feature.properties['School'])) : '') + '</td>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}
function style_s_golosievo_24_0() {
    return {
        pane: 'pane_s_golosievo_24',
        radius: 2.0,
        stroke: false,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(0,0,0,0.5019607843137255)',
        renderer: renderer
    }
}
map.createPane('pane_s_golosievo_24');
map.getPane('pane_s_golosievo_24').style.zIndex = 424;
map.getPane('pane_s_golosievo_24').style['mix-blend-mode'] = 'normal';
var layer_s_golosievo_24 = new L.geoJson(json_s_golosievo_24, {
    attribution: '<a href=""></a>',
    pane: 'pane_s_golosievo_24',
    onEachFeature: pop_s_golosievo_24,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.circleMarker(latlng, style_s_golosievo_24_0(feature));
    },
});
bounds_group.addLayer(layer_s_golosievo_24);
function pop_Shevchenkivsky_area_connections2_25(feature, layer) {
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
function style_Shevchenkivsky_area_connections2_25_0() {
    return {
        pane: 'pane_Shevchenkivsky_area_connections2_25',
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
map.createPane('pane_Shevchenkivsky_area_connections2_25');
map.getPane('pane_Shevchenkivsky_area_connections2_25').style.zIndex = 425;
map.getPane('pane_Shevchenkivsky_area_connections2_25').style['mix-blend-mode'] = 'multiply';
var layer_Shevchenkivsky_area_connections2_25 = new L.geoJson(json_Shevchenkivsky_area_connections2_25, {
    attribution: '<a href=""></a>',
    pane: 'pane_Shevchenkivsky_area_connections2_25',
    onEachFeature: pop_Shevchenkivsky_area_connections2_25,
    style: style_Shevchenkivsky_area_connections2_25_0,
});
bounds_group.addLayer(layer_Shevchenkivsky_area_connections2_25);
map.addLayer(layer_Shevchenkivsky_area_connections2_25);
function pop_Shevchenkivsky_area_houses2_26(feature, layer) {
    var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Geo'] !== null ? Autolinker.link(String(feature.properties['Geo'])) : '') + '</td>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}
function style_Shevchenkivsky_area_houses2_26_0() {
    return {
        pane: 'pane_Shevchenkivsky_area_houses2_26',
        radius: 2.4,
        stroke: false,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(182,78,172,1.0)',
        renderer: renderer
    }
}
map.createPane('pane_Shevchenkivsky_area_houses2_26');
map.getPane('pane_Shevchenkivsky_area_houses2_26').style.zIndex = 426;
map.getPane('pane_Shevchenkivsky_area_houses2_26').style['mix-blend-mode'] = 'normal';
var layer_Shevchenkivsky_area_houses2_26 = new L.geoJson(json_Shevchenkivsky_area_houses2_26, {
    attribution: '<a href=""></a>',
    pane: 'pane_Shevchenkivsky_area_houses2_26',
    onEachFeature: pop_Shevchenkivsky_area_houses2_26,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.circleMarker(latlng, style_Shevchenkivsky_area_houses2_26_0(feature));
    },
});
bounds_group.addLayer(layer_Shevchenkivsky_area_houses2_26);
map.addLayer(layer_Shevchenkivsky_area_houses2_26);
function pop_s_shev_27(feature, layer) {
    var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['School'] !== null ? Autolinker.link(String(feature.properties['School'])) : '') + '</td>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}
function style_s_shev_27_0() {
    return {
        pane: 'pane_s_shev_27',
        radius: 2.0,
        stroke: false,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(0,0,0,0.5019607843137255)',
        renderer: renderer
    }
}
map.createPane('pane_s_shev_27');
map.getPane('pane_s_shev_27').style.zIndex = 427;
map.getPane('pane_s_shev_27').style['mix-blend-mode'] = 'normal';
var layer_s_shev_27 = new L.geoJson(json_s_shev_27, {
    attribution: '<a href=""></a>',
    pane: 'pane_s_shev_27',
    onEachFeature: pop_s_shev_27,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.circleMarker(latlng, style_s_shev_27_0(feature));
    },
});
bounds_group.addLayer(layer_s_shev_27);
function pop_Podil_area_houses3_28(feature, layer) {
    var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Geo'] !== null ? Autolinker.link(String(feature.properties['Geo'])) : '') + '</td>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}
function style_Podil_area_houses3_28_0() {
    return {
        pane: 'pane_Podil_area_houses3_28',
        radius: 2.4,
        stroke: false,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(81,81,203,1.0)',
        renderer: renderer
    }
}
map.createPane('pane_Podil_area_houses3_28');
map.getPane('pane_Podil_area_houses3_28').style.zIndex = 428;
map.getPane('pane_Podil_area_houses3_28').style['mix-blend-mode'] = 'normal';
var layer_Podil_area_houses3_28 = new L.geoJson(json_Podil_area_houses3_28, {
    attribution: '<a href=""></a>',
    pane: 'pane_Podil_area_houses3_28',
    onEachFeature: pop_Podil_area_houses3_28,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.circleMarker(latlng, style_Podil_area_houses3_28_0(feature));
    },
});
bounds_group.addLayer(layer_Podil_area_houses3_28);
map.addLayer(layer_Podil_area_houses3_28);
function pop_Podil_area_connections4_29(feature, layer) {
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
function style_Podil_area_connections4_29_0() {
    return {
        pane: 'pane_Podil_area_connections4_29',
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
map.createPane('pane_Podil_area_connections4_29');
map.getPane('pane_Podil_area_connections4_29').style.zIndex = 429;
map.getPane('pane_Podil_area_connections4_29').style['mix-blend-mode'] = 'multiply';
var layer_Podil_area_connections4_29 = new L.geoJson(json_Podil_area_connections4_29, {
    attribution: '<a href=""></a>',
    pane: 'pane_Podil_area_connections4_29',
    onEachFeature: pop_Podil_area_connections4_29,
    style: style_Podil_area_connections4_29_0,
});
bounds_group.addLayer(layer_Podil_area_connections4_29);
map.addLayer(layer_Podil_area_connections4_29);
function pop_s_podil_30(feature, layer) {
    var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['School'] !== null ? Autolinker.link(String(feature.properties['School'])) : '') + '</td>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}
function style_s_podil_30_0() {
    return {
        pane: 'pane_s_podil_30',
        radius: 2.0,
        stroke: false,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(0,0,0,0.5019607843137255)',
        renderer: renderer
    }
}
map.createPane('pane_s_podil_30');
map.getPane('pane_s_podil_30').style.zIndex = 430;
map.getPane('pane_s_podil_30').style['mix-blend-mode'] = 'normal';
var layer_s_podil_30 = new L.geoJson(json_s_podil_30, {
    attribution: '<a href=""></a>',
    pane: 'pane_s_podil_30',
    onEachFeature: pop_s_podil_30,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.circleMarker(latlng, style_s_podil_30_0(feature));
    },
});
bounds_group.addLayer(layer_s_podil_30);
function pop_cap_darniza_31(feature, layer) {
    var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Occupancy2'] !== null ? Autolinker.link(String(feature.properties['Occupancy2'])) : '') + '</td>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}
function style_cap_darniza_31_0(feature) {
    if (feature.properties['q2wHide_Number'] >= 23.000000 && feature.properties['q2wHide_Number'] <= 227.000000 ) {
        return {
            pane: 'pane_cap_darniza_31',
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
            pane: 'pane_cap_darniza_31',
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
            pane: 'pane_cap_darniza_31',
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
            pane: 'pane_cap_darniza_31',
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
            pane: 'pane_cap_darniza_31',
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
map.createPane('pane_cap_darniza_31');
map.getPane('pane_cap_darniza_31').style.zIndex = 431;
map.getPane('pane_cap_darniza_31').style['mix-blend-mode'] = 'multiply';
var layer_cap_darniza_31 = new L.geoJson(json_cap_darniza_31, {
    attribution: '<a href=""></a>',
    pane: 'pane_cap_darniza_31',
    onEachFeature: pop_cap_darniza_31,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.circleMarker(latlng, style_cap_darniza_31_0(feature));
    },
});
bounds_group.addLayer(layer_cap_darniza_31);
map.addLayer(layer_cap_darniza_31);
function pop_cap_dnipro_32(feature, layer) {
    var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Occupancy2'] !== null ? Autolinker.link(String(feature.properties['Occupancy2'])) : '') + '</td>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}
function style_cap_dnipro_32_0(feature) {
    if (feature.properties['q2wHide_Number'] >= 23.000000 && feature.properties['q2wHide_Number'] <= 227.000000 ) {
        return {
            pane: 'pane_cap_dnipro_32',
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
            pane: 'pane_cap_dnipro_32',
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
            pane: 'pane_cap_dnipro_32',
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
            pane: 'pane_cap_dnipro_32',
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
            pane: 'pane_cap_dnipro_32',
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
map.createPane('pane_cap_dnipro_32');
map.getPane('pane_cap_dnipro_32').style.zIndex = 432;
map.getPane('pane_cap_dnipro_32').style['mix-blend-mode'] = 'multiply';
var layer_cap_dnipro_32 = new L.geoJson(json_cap_dnipro_32, {
    attribution: '<a href=""></a>',
    pane: 'pane_cap_dnipro_32',
    onEachFeature: pop_cap_dnipro_32,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.circleMarker(latlng, style_cap_dnipro_32_0(feature));
    },
});
bounds_group.addLayer(layer_cap_dnipro_32);
map.addLayer(layer_cap_dnipro_32);
function pop_cap_desn_33(feature, layer) {
    var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Occupancy2'] !== null ? Autolinker.link(String(feature.properties['Occupancy2'])) : '') + '</td>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}
function style_cap_desn_33_0(feature) {
    if (feature.properties['q2wHide_Number'] >= 23.000000 && feature.properties['q2wHide_Number'] <= 227.000000 ) {
        return {
            pane: 'pane_cap_desn_33',
            radius: 3.0,
            opacity: 1,
            color: 'rgba(0,126,125,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(0,126,125,1.0)',
            renderer: renderer
        }
    }
    if (feature.properties['q2wHide_Number'] >= 227.000000 && feature.properties['q2wHide_Number'] <= 431.000000 ) {
        return {
            pane: 'pane_cap_desn_33',
            radius: 6.0,
            opacity: 1,
            color: 'rgba(0,126,125,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(0,126,125,1.0)',
            renderer: renderer
        }
    }
    if (feature.properties['q2wHide_Number'] >= 431.000000 && feature.properties['q2wHide_Number'] <= 635.000000 ) {
        return {
            pane: 'pane_cap_desn_33',
            radius: 9.0,
            opacity: 1,
            color: 'rgba(0,126,125,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(0,126,125,1.0)',
            renderer: renderer
        }
    }
    if (feature.properties['q2wHide_Number'] >= 635.000000 && feature.properties['q2wHide_Number'] <= 839.000000 ) {
        return {
            pane: 'pane_cap_desn_33',
            radius: 12.0,
            opacity: 1,
            color: 'rgba(0,126,125,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(0,126,125,1.0)',
            renderer: renderer
        }
    }
    if (feature.properties['q2wHide_Number'] >= 839.000000 && feature.properties['q2wHide_Number'] <= 1043.000000 ) {
        return {
            pane: 'pane_cap_desn_33',
            radius: 15.0,
            opacity: 1,
            color: 'rgba(0,126,125,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(0,126,125,1.0)',
            renderer: renderer
        }
    }
}
map.createPane('pane_cap_desn_33');
map.getPane('pane_cap_desn_33').style.zIndex = 433;
map.getPane('pane_cap_desn_33').style['mix-blend-mode'] = 'multiply';
var layer_cap_desn_33 = new L.geoJson(json_cap_desn_33, {
    attribution: '<a href=""></a>',
    pane: 'pane_cap_desn_33',
    onEachFeature: pop_cap_desn_33,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.circleMarker(latlng, style_cap_desn_33_0(feature));
    },
});
bounds_group.addLayer(layer_cap_desn_33);
map.addLayer(layer_cap_desn_33);
function pop_cap_podil_34(feature, layer) {
    var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Occupancy2'] !== null ? Autolinker.link(String(feature.properties['Occupancy2'])) : '') + '</td>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}
function style_cap_podil_34_0(feature) {
    if (feature.properties['q2wHide_Number'] >= 23.000000 && feature.properties['q2wHide_Number'] <= 227.000000 ) {
        return {
            pane: 'pane_cap_podil_34',
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
            pane: 'pane_cap_podil_34',
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
            pane: 'pane_cap_podil_34',
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
            pane: 'pane_cap_podil_34',
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
            pane: 'pane_cap_podil_34',
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
map.createPane('pane_cap_podil_34');
map.getPane('pane_cap_podil_34').style.zIndex = 434;
map.getPane('pane_cap_podil_34').style['mix-blend-mode'] = 'multiply';
var layer_cap_podil_34 = new L.geoJson(json_cap_podil_34, {
    attribution: '<a href=""></a>',
    pane: 'pane_cap_podil_34',
    onEachFeature: pop_cap_podil_34,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.circleMarker(latlng, style_cap_podil_34_0(feature));
    },
});
bounds_group.addLayer(layer_cap_podil_34);
map.addLayer(layer_cap_podil_34);
function pop_cap_shev_35(feature, layer) {
    var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Occupancy2'] !== null ? Autolinker.link(String(feature.properties['Occupancy2'])) : '') + '</td>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}
function style_cap_shev_35_0(feature) {
    if (feature.properties['q2wHide_Number'] >= 23.000000 && feature.properties['q2wHide_Number'] <= 227.000000 ) {
        return {
            pane: 'pane_cap_shev_35',
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
            pane: 'pane_cap_shev_35',
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
            pane: 'pane_cap_shev_35',
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
            pane: 'pane_cap_shev_35',
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
            pane: 'pane_cap_shev_35',
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
map.createPane('pane_cap_shev_35');
map.getPane('pane_cap_shev_35').style.zIndex = 435;
map.getPane('pane_cap_shev_35').style['mix-blend-mode'] = 'multiply';
var layer_cap_shev_35 = new L.geoJson(json_cap_shev_35, {
    attribution: '<a href=""></a>',
    pane: 'pane_cap_shev_35',
    onEachFeature: pop_cap_shev_35,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.circleMarker(latlng, style_cap_shev_35_0(feature));
    },
});
bounds_group.addLayer(layer_cap_shev_35);
map.addLayer(layer_cap_shev_35);
function pop_cap_pechersk_36(feature, layer) {
    var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Occupancy2'] !== null ? Autolinker.link(String(feature.properties['Occupancy2'])) : '') + '</td>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}
function style_cap_pechersk_36_0(feature) {
    if (feature.properties['q2wHide_Number'] >= 23.000000 && feature.properties['q2wHide_Number'] <= 227.000000 ) {
        return {
            pane: 'pane_cap_pechersk_36',
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
            pane: 'pane_cap_pechersk_36',
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
            pane: 'pane_cap_pechersk_36',
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
            pane: 'pane_cap_pechersk_36',
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
            pane: 'pane_cap_pechersk_36',
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
map.createPane('pane_cap_pechersk_36');
map.getPane('pane_cap_pechersk_36').style.zIndex = 436;
map.getPane('pane_cap_pechersk_36').style['mix-blend-mode'] = 'multiply';
var layer_cap_pechersk_36 = new L.geoJson(json_cap_pechersk_36, {
    attribution: '<a href=""></a>',
    pane: 'pane_cap_pechersk_36',
    onEachFeature: pop_cap_pechersk_36,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.circleMarker(latlng, style_cap_pechersk_36_0(feature));
    },
});
bounds_group.addLayer(layer_cap_pechersk_36);
map.addLayer(layer_cap_pechersk_36);
function pop_cap_golos_37(feature, layer) {
    var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Occupancy2'] !== null ? Autolinker.link(String(feature.properties['Occupancy2'])) : '') + '</td>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}
function style_cap_golos_37_0(feature) {
    if (feature.properties['q2wHide_Number'] >= 23.000000 && feature.properties['q2wHide_Number'] <= 227.000000 ) {
        return {
            pane: 'pane_cap_golos_37',
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
            pane: 'pane_cap_golos_37',
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
            pane: 'pane_cap_golos_37',
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
            pane: 'pane_cap_golos_37',
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
            pane: 'pane_cap_golos_37',
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
map.createPane('pane_cap_golos_37');
map.getPane('pane_cap_golos_37').style.zIndex = 437;
map.getPane('pane_cap_golos_37').style['mix-blend-mode'] = 'multiply';
var layer_cap_golos_37 = new L.geoJson(json_cap_golos_37, {
    attribution: '<a href=""></a>',
    pane: 'pane_cap_golos_37',
    onEachFeature: pop_cap_golos_37,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.circleMarker(latlng, style_cap_golos_37_0(feature));
    },
});
bounds_group.addLayer(layer_cap_golos_37);
map.addLayer(layer_cap_golos_37);
function pop_cap_solom_38(feature, layer) {
    var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Occupancy2'] !== null ? Autolinker.link(String(feature.properties['Occupancy2'])) : '') + '</td>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}
function style_cap_solom_38_0(feature) {
    if (feature.properties['q2wHide_Number'] >= 23.000000 && feature.properties['q2wHide_Number'] <= 227.000000 ) {
        return {
            pane: 'pane_cap_solom_38',
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
            pane: 'pane_cap_solom_38',
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
            pane: 'pane_cap_solom_38',
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
            pane: 'pane_cap_solom_38',
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
            pane: 'pane_cap_solom_38',
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
map.createPane('pane_cap_solom_38');
map.getPane('pane_cap_solom_38').style.zIndex = 438;
map.getPane('pane_cap_solom_38').style['mix-blend-mode'] = 'multiply';
var layer_cap_solom_38 = new L.geoJson(json_cap_solom_38, {
    attribution: '<a href=""></a>',
    pane: 'pane_cap_solom_38',
    onEachFeature: pop_cap_solom_38,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.circleMarker(latlng, style_cap_solom_38_0(feature));
    },
});
bounds_group.addLayer(layer_cap_solom_38);
map.addLayer(layer_cap_solom_38);
function pop_cap_obolon_39(feature, layer) {
    var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Occupancy2'] !== null ? Autolinker.link(String(feature.properties['Occupancy2'])) : '') + '</td>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}
function style_cap_obolon_39_0(feature) {
    if (feature.properties['q2wHide_Number'] >= 23.000000 && feature.properties['q2wHide_Number'] <= 227.000000 ) {
        return {
            pane: 'pane_cap_obolon_39',
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
            pane: 'pane_cap_obolon_39',
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
            pane: 'pane_cap_obolon_39',
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
            pane: 'pane_cap_obolon_39',
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
            pane: 'pane_cap_obolon_39',
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
map.createPane('pane_cap_obolon_39');
map.getPane('pane_cap_obolon_39').style.zIndex = 439;
map.getPane('pane_cap_obolon_39').style['mix-blend-mode'] = 'multiply';
var layer_cap_obolon_39 = new L.geoJson(json_cap_obolon_39, {
    attribution: '<a href=""></a>',
    pane: 'pane_cap_obolon_39',
    onEachFeature: pop_cap_obolon_39,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.circleMarker(latlng, style_cap_obolon_39_0(feature));
    },
});
bounds_group.addLayer(layer_cap_obolon_39);
map.addLayer(layer_cap_obolon_39);
function pop_cap_svyat_40(feature, layer) {
    var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Occupancy2'] !== null ? Autolinker.link(String(feature.properties['Occupancy2'])) : '') + '</td>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}
function style_cap_svyat_40_0(feature) {
    if (feature.properties['q2wHide_Number'] >= 23.000000 && feature.properties['q2wHide_Number'] <= 227.000000 ) {
        return {
            pane: 'pane_cap_svyat_40',
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
            pane: 'pane_cap_svyat_40',
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
            pane: 'pane_cap_svyat_40',
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
            pane: 'pane_cap_svyat_40',
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
            pane: 'pane_cap_svyat_40',
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
map.createPane('pane_cap_svyat_40');
map.getPane('pane_cap_svyat_40').style.zIndex = 440;
map.getPane('pane_cap_svyat_40').style['mix-blend-mode'] = 'multiply';
var layer_cap_svyat_40 = new L.geoJson(json_cap_svyat_40, {
    attribution: '<a href=""></a>',
    pane: 'pane_cap_svyat_40',
    onEachFeature: pop_cap_svyat_40,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.circleMarker(latlng, style_cap_svyat_40_0(feature));
    },
});
bounds_group.addLayer(layer_cap_svyat_40);
map.addLayer(layer_cap_svyat_40);

        map.addLayer(layer_s_svyatosh_3);
        map.addLayer(layer_s_dnipro_6);
        map.addLayer(layer_s_desnyansky_9);
        map.addLayer(layer_s_solom_12);
        map.addLayer(layer_s_darnyza_15);
        map.addLayer(layer_s_obolon_18);
        map.addLayer(layer_s_pechersk_21);
        map.addLayer(layer_s_golosievo_24);
        map.addLayer(layer_s_shev_27);
        map.addLayer(layer_s_podil_30);


var osmGeocoder = new L.Control.OSMGeocoder({
    collapsed: false,
    position: 'topright',
    text: 'пошук за адресою',
});
osmGeocoder.addTo(map);
var baseMaps = {};
L.control.layers(baseMaps,{'<b>Потужність школи (кількість учнів 1-4 класів)</b><br/><table><tr><td style="text-align: center;"><img src="legend/cap_svyat_40_23000022700000.png" /></td><td> 23 - 227 </td></tr><tr><td style="text-align: center;"><img src="legend/cap_svyat_40_227000043100001.png" /></td><td> 227 - 431 </td></tr><tr><td style="text-align: center;"><img src="legend/cap_svyat_40_431000063500002.png" /></td><td> 431 - 635 </td></tr><tr><td style="text-align: center;"><img src="legend/cap_svyat_40_635000083900003.png" /></td><td> 635 - 839 </td></tr><tr><td style="text-align: center;"><img src="legend/cap_svyat_40_8390000104300004.png" /></td><td> 839 - 1043 </td></tr></table>': layer_cap_svyat_40},{collapsed:false}).addTo(map);
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
layer_s_desnyansky_9.eachLayer(function(layer) {
    var context = {
        feature: layer.feature,
        variables: {}
    };
    layer.bindTooltip((layer.feature.properties['School'] !== null?String('<div style="color: #000000; font-size: 8pt; font-weight: bold; font-family: \'Open Sans\', sans-serif;">' + layer.feature.properties['School']) + '</div>':''), {permanent: true, offset: [-0, -16], className: 'css_s_desnyansky_9'});
    labels.push(layer);
    totalMarkers += 1;
    layer.added = true;
    addLabel(layer, i);
    i++;
});
var i = 0;
layer_s_solom_12.eachLayer(function(layer) {
    var context = {
        feature: layer.feature,
        variables: {}
    };
    layer.bindTooltip((layer.feature.properties['School'] !== null?String('<div style="color: #000000; font-size: 8pt; font-weight: bold; font-family: \'Open Sans\', sans-serif;">' + layer.feature.properties['School']) + '</div>':''), {permanent: true, offset: [-0, -16], className: 'css_s_solom_12'});
    labels.push(layer);
    totalMarkers += 1;
    layer.added = true;
    addLabel(layer, i);
    i++;
});
var i = 0;
layer_s_darnyza_15.eachLayer(function(layer) {
    var context = {
        feature: layer.feature,
        variables: {}
    };
    layer.bindTooltip((layer.feature.properties['School nam'] !== null?String('<div style="color: #000000; font-size: 8pt; font-weight: bold; font-family: \'Open Sans\', sans-serif;">' + layer.feature.properties['School nam']) + '</div>':''), {permanent: true, offset: [-0, -16], className: 'css_s_darnyza_15'});
    labels.push(layer);
    totalMarkers += 1;
    layer.added = true;
    addLabel(layer, i);
    i++;
});
var i = 0;
layer_s_obolon_18.eachLayer(function(layer) {
    var context = {
        feature: layer.feature,
        variables: {}
    };
    layer.bindTooltip((layer.feature.properties['School'] !== null?String('<div style="color: #000000; font-size: 8pt; font-weight: bold; font-family: \'Open Sans\', sans-serif;">' + layer.feature.properties['School']) + '</div>':''), {permanent: true, offset: [-0, -16], className: 'css_s_obolon_18'});
    labels.push(layer);
    totalMarkers += 1;
    layer.added = true;
    addLabel(layer, i);
    i++;
});
var i = 0;
layer_s_pechersk_21.eachLayer(function(layer) {
    var context = {
        feature: layer.feature,
        variables: {}
    };
    layer.bindTooltip((layer.feature.properties['School'] !== null?String('<div style="color: #000000; font-size: 8pt; font-weight: bold; font-family: \'Open Sans\', sans-serif;">' + layer.feature.properties['School']) + '</div>':''), {permanent: true, offset: [-0, -16], className: 'css_s_pechersk_21'});
    labels.push(layer);
    totalMarkers += 1;
    layer.added = true;
    addLabel(layer, i);
    i++;
});
var i = 0;
layer_s_golosievo_24.eachLayer(function(layer) {
    var context = {
        feature: layer.feature,
        variables: {}
    };
    layer.bindTooltip((layer.feature.properties['School'] !== null?String('<div style="color: #000000; font-size: 8pt; font-weight: bold; font-family: \'Open Sans\', sans-serif;">' + layer.feature.properties['School']) + '</div>':''), {permanent: true, offset: [-0, -16], className: 'css_s_golosievo_24'});
    labels.push(layer);
    totalMarkers += 1;
    layer.added = true;
    addLabel(layer, i);
    i++;
});
var i = 0;
layer_s_shev_27.eachLayer(function(layer) {
    var context = {
        feature: layer.feature,
        variables: {}
    };
    layer.bindTooltip((layer.feature.properties['School'] !== null?String('<div style="color: #000000; font-size: 8pt; font-weight: bold; font-family: \'Open Sans\', sans-serif;">' + layer.feature.properties['School']) + '</div>':''), {permanent: true, offset: [-0, -16], className: 'css_s_shev_27'});
    labels.push(layer);
    totalMarkers += 1;
    layer.added = true;
    addLabel(layer, i);
    i++;
});
var i = 0;
layer_s_podil_30.eachLayer(function(layer) {
    var context = {
        feature: layer.feature,
        variables: {}
    };
    layer.bindTooltip((layer.feature.properties['School'] !== null?String('<div style="color: #000000; font-size: 8pt; font-weight: bold; font-family: \'Open Sans\', sans-serif;">' + layer.feature.properties['School']) + '</div>':''), {permanent: true, offset: [-0, -16], className: 'css_s_podil_30'});
    labels.push(layer);
    totalMarkers += 1;
    layer.added = true;
    addLabel(layer, i);
    i++;
});
resetLabels([layer_ssvyatosh_3,layer_sdnipro_6,layer_sdesnyansky_9,layer_ssolom_12,layer_sdarnyza_15,layer_sobolon_18,layer_spechersk_21,layer_sgolosievo_24,layer_sshev_27,layer_spodil_30]);
map.on("zoomend", function(){
    resetLabels([layer_ssvyatosh_3,layer_sdnipro_6,layer_sdesnyansky_9,layer_ssolom_12,layer_sdarnyza_15,layer_sobolon_18,layer_spechersk_21,layer_sgolosievo_24,layer_sshev_27,layer_spodil_30]);
});
map.on("layeradd", function(){
    resetLabels([layer_ssvyatosh_3,layer_sdnipro_6,layer_sdesnyansky_9,layer_ssolom_12,layer_sdarnyza_15,layer_sobolon_18,layer_spechersk_21,layer_sgolosievo_24,layer_sshev_27,layer_spodil_30]);
});
map.on("layerremove", function(){
    resetLabels([layer_ssvyatosh_3,layer_sdnipro_6,layer_sdesnyansky_9,layer_ssolom_12,layer_sdarnyza_15,layer_sobolon_18,layer_spechersk_21,layer_sgolosievo_24,layer_sshev_27,layer_spodil_30]);
});