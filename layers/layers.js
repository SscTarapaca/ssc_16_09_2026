var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_WorldImagery_1 = new ol.layer.Tile({
            'title': 'World Imagery',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Regional_2 = new ol.format.GeoJSON();
var features_Regional_2 = format_Regional_2.readFeatures(json_Regional_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Regional_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Regional_2.addFeatures(features_Regional_2);
var lyr_Regional_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Regional_2, 
                style: style_Regional_2,
                popuplayertitle: 'Regional',
                interactive: false,
                title: '<img src="styles/legend/Regional_2.png" /> Regional'
            });
var format_comunas_3 = new ol.format.GeoJSON();
var features_comunas_3 = format_comunas_3.readFeatures(json_comunas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_comunas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_comunas_3.addFeatures(features_comunas_3);
var lyr_comunas_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_comunas_3, 
                style: style_comunas_3,
                popuplayertitle: 'comunas',
                interactive: false,
                title: '<img src="styles/legend/comunas_3.png" /> comunas'
            });
var format_ASENTAMIENTOCORRAL_4 = new ol.format.GeoJSON();
var features_ASENTAMIENTOCORRAL_4 = format_ASENTAMIENTOCORRAL_4.readFeatures(json_ASENTAMIENTOCORRAL_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ASENTAMIENTOCORRAL_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ASENTAMIENTOCORRAL_4.addFeatures(features_ASENTAMIENTOCORRAL_4);
var lyr_ASENTAMIENTOCORRAL_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ASENTAMIENTOCORRAL_4, 
                style: style_ASENTAMIENTOCORRAL_4,
                popuplayertitle: 'ASENTAMIENTO  CORRAL',
                interactive: true,
                title: '<img src="styles/legend/ASENTAMIENTOCORRAL_4.png" /> ASENTAMIENTO  CORRAL'
            });
var format_ASENTAMIENTO_5 = new ol.format.GeoJSON();
var features_ASENTAMIENTO_5 = format_ASENTAMIENTO_5.readFeatures(json_ASENTAMIENTO_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ASENTAMIENTO_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ASENTAMIENTO_5.addFeatures(features_ASENTAMIENTO_5);
var lyr_ASENTAMIENTO_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ASENTAMIENTO_5, 
                style: style_ASENTAMIENTO_5,
                popuplayertitle: 'ASENTAMIENTO',
                interactive: true,
                title: '<img src="styles/legend/ASENTAMIENTO_5.png" /> ASENTAMIENTO'
            });
var format_APACHETA_6 = new ol.format.GeoJSON();
var features_APACHETA_6 = format_APACHETA_6.readFeatures(json_APACHETA_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_APACHETA_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APACHETA_6.addFeatures(features_APACHETA_6);
var lyr_APACHETA_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_APACHETA_6, 
                style: style_APACHETA_6,
                popuplayertitle: 'APACHETA',
                interactive: true,
                title: '<img src="styles/legend/APACHETA_6.png" /> APACHETA'
            });
var format_ASENTAMIENTOESPORDICO_7 = new ol.format.GeoJSON();
var features_ASENTAMIENTOESPORDICO_7 = format_ASENTAMIENTOESPORDICO_7.readFeatures(json_ASENTAMIENTOESPORDICO_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ASENTAMIENTOESPORDICO_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ASENTAMIENTOESPORDICO_7.addFeatures(features_ASENTAMIENTOESPORDICO_7);
var lyr_ASENTAMIENTOESPORDICO_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ASENTAMIENTOESPORDICO_7, 
                style: style_ASENTAMIENTOESPORDICO_7,
                popuplayertitle: 'ASENTAMIENTO ESPORÁDICO',
                interactive: true,
                title: '<img src="styles/legend/ASENTAMIENTOESPORDICO_7.png" /> ASENTAMIENTO ESPORÁDICO'
            });
var format_ASENTAMIENTOESPORDICOCORRAL_8 = new ol.format.GeoJSON();
var features_ASENTAMIENTOESPORDICOCORRAL_8 = format_ASENTAMIENTOESPORDICOCORRAL_8.readFeatures(json_ASENTAMIENTOESPORDICOCORRAL_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ASENTAMIENTOESPORDICOCORRAL_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ASENTAMIENTOESPORDICOCORRAL_8.addFeatures(features_ASENTAMIENTOESPORDICOCORRAL_8);
var lyr_ASENTAMIENTOESPORDICOCORRAL_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ASENTAMIENTOESPORDICOCORRAL_8, 
                style: style_ASENTAMIENTOESPORDICOCORRAL_8,
                popuplayertitle: 'ASENTAMIENTO ESPORÁDICO  CORRAL',
                interactive: true,
                title: '<img src="styles/legend/ASENTAMIENTOESPORDICOCORRAL_8.png" /> ASENTAMIENTO ESPORÁDICO  CORRAL'
            });
var format_CORRAL_9 = new ol.format.GeoJSON();
var features_CORRAL_9 = format_CORRAL_9.readFeatures(json_CORRAL_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CORRAL_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CORRAL_9.addFeatures(features_CORRAL_9);
var lyr_CORRAL_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CORRAL_9, 
                style: style_CORRAL_9,
                popuplayertitle: 'CORRAL',
                interactive: true,
                title: '<img src="styles/legend/CORRAL_9.png" /> CORRAL'
            });
var format_CEREMONIA_10 = new ol.format.GeoJSON();
var features_CEREMONIA_10 = format_CEREMONIA_10.readFeatures(json_CEREMONIA_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CEREMONIA_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CEREMONIA_10.addFeatures(features_CEREMONIA_10);
var lyr_CEREMONIA_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CEREMONIA_10, 
                style: style_CEREMONIA_10,
                popuplayertitle: 'CEREMONIA',
                interactive: true,
                title: '<img src="styles/legend/CEREMONIA_10.png" /> CEREMONIA'
            });
var format_MINERIA_11 = new ol.format.GeoJSON();
var features_MINERIA_11 = format_MINERIA_11.readFeatures(json_MINERIA_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MINERIA_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MINERIA_11.addFeatures(features_MINERIA_11);
var lyr_MINERIA_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MINERIA_11, 
                style: style_MINERIA_11,
                popuplayertitle: 'MINERIA',
                interactive: true,
                title: '<img src="styles/legend/MINERIA_11.png" /> MINERIA'
            });
var format_CULTIVOS_12 = new ol.format.GeoJSON();
var features_CULTIVOS_12 = format_CULTIVOS_12.readFeatures(json_CULTIVOS_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CULTIVOS_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CULTIVOS_12.addFeatures(features_CULTIVOS_12);
var lyr_CULTIVOS_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CULTIVOS_12, 
                style: style_CULTIVOS_12,
                popuplayertitle: 'CULTIVOS',
                interactive: true,
                title: '<img src="styles/legend/CULTIVOS_12.png" /> CULTIVOS'
            });
var format_DESLINDETERRITORIAL_13 = new ol.format.GeoJSON();
var features_DESLINDETERRITORIAL_13 = format_DESLINDETERRITORIAL_13.readFeatures(json_DESLINDETERRITORIAL_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DESLINDETERRITORIAL_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DESLINDETERRITORIAL_13.addFeatures(features_DESLINDETERRITORIAL_13);
var lyr_DESLINDETERRITORIAL_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DESLINDETERRITORIAL_13, 
                style: style_DESLINDETERRITORIAL_13,
                popuplayertitle: 'DESLINDE TERRITORIAL',
                interactive: true,
                title: '<img src="styles/legend/DESLINDETERRITORIAL_13.png" /> DESLINDE TERRITORIAL'
            });
var format_ELEMENTONATURAl_14 = new ol.format.GeoJSON();
var features_ELEMENTONATURAl_14 = format_ELEMENTONATURAl_14.readFeatures(json_ELEMENTONATURAl_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ELEMENTONATURAl_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ELEMENTONATURAl_14.addFeatures(features_ELEMENTONATURAl_14);
var lyr_ELEMENTONATURAl_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ELEMENTONATURAl_14, 
                style: style_ELEMENTONATURAl_14,
                popuplayertitle: 'ELEMENTO NATURAl',
                interactive: true,
                title: '<img src="styles/legend/ELEMENTONATURAl_14.png" /> ELEMENTO NATURAl'
            });
var format_POZO_15 = new ol.format.GeoJSON();
var features_POZO_15 = format_POZO_15.readFeatures(json_POZO_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POZO_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POZO_15.addFeatures(features_POZO_15);
var lyr_POZO_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POZO_15, 
                style: style_POZO_15,
                popuplayertitle: 'POZO',
                interactive: true,
                title: '<img src="styles/legend/POZO_15.png" /> POZO'
            });
var format_OTROS_16 = new ol.format.GeoJSON();
var features_OTROS_16 = format_OTROS_16.readFeatures(json_OTROS_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OTROS_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OTROS_16.addFeatures(features_OTROS_16);
var lyr_OTROS_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OTROS_16, 
                style: style_OTROS_16,
                popuplayertitle: 'OTROS',
                interactive: true,
                title: '<img src="styles/legend/OTROS_16.png" /> OTROS'
            });
var format_SECTORSIMBLICO_17 = new ol.format.GeoJSON();
var features_SECTORSIMBLICO_17 = format_SECTORSIMBLICO_17.readFeatures(json_SECTORSIMBLICO_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SECTORSIMBLICO_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SECTORSIMBLICO_17.addFeatures(features_SECTORSIMBLICO_17);
var lyr_SECTORSIMBLICO_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SECTORSIMBLICO_17, 
                style: style_SECTORSIMBLICO_17,
                popuplayertitle: 'SECTOR SIMBÓLICO',
                interactive: true,
                title: '<img src="styles/legend/SECTORSIMBLICO_17.png" /> SECTOR SIMBÓLICO'
            });
var format_SITIOARQUEOLGICO_18 = new ol.format.GeoJSON();
var features_SITIOARQUEOLGICO_18 = format_SITIOARQUEOLGICO_18.readFeatures(json_SITIOARQUEOLGICO_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SITIOARQUEOLGICO_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SITIOARQUEOLGICO_18.addFeatures(features_SITIOARQUEOLGICO_18);
var lyr_SITIOARQUEOLGICO_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SITIOARQUEOLGICO_18, 
                style: style_SITIOARQUEOLGICO_18,
                popuplayertitle: 'SITIO ARQUEOLÓGICO',
                interactive: true,
                title: '<img src="styles/legend/SITIOARQUEOLGICO_18.png" /> SITIO ARQUEOLÓGICO'
            });
var format_SITIORELIGIOSO_19 = new ol.format.GeoJSON();
var features_SITIORELIGIOSO_19 = format_SITIORELIGIOSO_19.readFeatures(json_SITIORELIGIOSO_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SITIORELIGIOSO_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SITIORELIGIOSO_19.addFeatures(features_SITIORELIGIOSO_19);
var lyr_SITIORELIGIOSO_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SITIORELIGIOSO_19, 
                style: style_SITIORELIGIOSO_19,
                popuplayertitle: 'SITIO RELIGIOSO',
                interactive: true,
                title: '<img src="styles/legend/SITIORELIGIOSO_19.png" /> SITIO RELIGIOSO'
            });
var format_VERTIENTE_20 = new ol.format.GeoJSON();
var features_VERTIENTE_20 = format_VERTIENTE_20.readFeatures(json_VERTIENTE_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VERTIENTE_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VERTIENTE_20.addFeatures(features_VERTIENTE_20);
var lyr_VERTIENTE_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VERTIENTE_20, 
                style: style_VERTIENTE_20,
                popuplayertitle: 'VERTIENTE',
                interactive: true,
                title: '<img src="styles/legend/VERTIENTE_20.png" /> VERTIENTE'
            });
var format_ZONADEPASTOREO_21 = new ol.format.GeoJSON();
var features_ZONADEPASTOREO_21 = format_ZONADEPASTOREO_21.readFeatures(json_ZONADEPASTOREO_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONADEPASTOREO_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONADEPASTOREO_21.addFeatures(features_ZONADEPASTOREO_21);
var lyr_ZONADEPASTOREO_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONADEPASTOREO_21, 
                style: style_ZONADEPASTOREO_21,
                popuplayertitle: 'ZONA DE PASTOREO',
                interactive: true,
                title: '<img src="styles/legend/ZONADEPASTOREO_21.png" /> ZONA DE PASTOREO'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_WorldImagery_1.setVisible(true);lyr_Regional_2.setVisible(true);lyr_comunas_3.setVisible(true);lyr_ASENTAMIENTOCORRAL_4.setVisible(true);lyr_ASENTAMIENTO_5.setVisible(true);lyr_APACHETA_6.setVisible(true);lyr_ASENTAMIENTOESPORDICO_7.setVisible(true);lyr_ASENTAMIENTOESPORDICOCORRAL_8.setVisible(true);lyr_CORRAL_9.setVisible(true);lyr_CEREMONIA_10.setVisible(true);lyr_MINERIA_11.setVisible(true);lyr_CULTIVOS_12.setVisible(true);lyr_DESLINDETERRITORIAL_13.setVisible(true);lyr_ELEMENTONATURAl_14.setVisible(true);lyr_POZO_15.setVisible(true);lyr_OTROS_16.setVisible(true);lyr_SECTORSIMBLICO_17.setVisible(true);lyr_SITIOARQUEOLGICO_18.setVisible(true);lyr_SITIORELIGIOSO_19.setVisible(true);lyr_VERTIENTE_20.setVisible(true);lyr_ZONADEPASTOREO_21.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_WorldImagery_1,lyr_Regional_2,lyr_comunas_3,lyr_ASENTAMIENTOCORRAL_4,lyr_ASENTAMIENTO_5,lyr_APACHETA_6,lyr_ASENTAMIENTOESPORDICO_7,lyr_ASENTAMIENTOESPORDICOCORRAL_8,lyr_CORRAL_9,lyr_CEREMONIA_10,lyr_MINERIA_11,lyr_CULTIVOS_12,lyr_DESLINDETERRITORIAL_13,lyr_ELEMENTONATURAl_14,lyr_POZO_15,lyr_OTROS_16,lyr_SECTORSIMBLICO_17,lyr_SITIOARQUEOLGICO_18,lyr_SITIORELIGIOSO_19,lyr_VERTIENTE_20,lyr_ZONADEPASTOREO_21];
lyr_Regional_2.set('fieldAliases', {'objectid': 'objectid', 'cir_sena': 'cir_sena', 'codregion': 'codregion', 'area_km': 'area_km', 'st_area_sh': 'st_area_sh', 'st_length_': 'st_length_', 'Region': 'Region', });
lyr_comunas_3.set('fieldAliases', {'objectid': 'objectid', 'shape_leng': 'shape_leng', 'dis_elec': 'dis_elec', 'cir_sena': 'cir_sena', 'cod_comuna': 'cod_comuna', 'codregion': 'codregion', 'st_area_sh': 'st_area_sh', 'st_length_': 'st_length_', 'Region': 'Region', 'Comuna': 'Comuna', 'Provincia': 'Provincia', });
lyr_ASENTAMIENTOCORRAL_4.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'X': 'X', 'Y': 'Y', 'REGION': 'REGION', 'PROVINCIA': 'PROVINCIA', 'COMUNA': 'COMUNA', 'LOCALIDAD': 'LOCALIDAD', 'TIPO': 'TIPO', 'DESCRIPCIO': 'DESCRIPCIO', 'INFORMANTE': 'INFORMANTE', 'ALTURA (MS': 'ALTURA (MS', });
lyr_ASENTAMIENTO_5.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'X': 'X', 'Y': 'Y', 'REGION': 'REGION', 'PROVINCIA': 'PROVINCIA', 'COMUNA': 'COMUNA', 'LOCALIDAD': 'LOCALIDAD', 'TIPO': 'TIPO', 'DESCRIPCIO': 'DESCRIPCIO', 'INFORMANTE': 'INFORMANTE', 'ALTURA (MS': 'ALTURA (MS', });
lyr_APACHETA_6.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'X': 'X', 'Y': 'Y', 'REGION': 'REGION', 'PROVINCIA': 'PROVINCIA', 'COMUNA': 'COMUNA', 'LOCALIDAD': 'LOCALIDAD', 'TIPO': 'TIPO', 'DESCRIPCIO': 'DESCRIPCIO', 'INFORMANTE': 'INFORMANTE', 'ALTURA (MS': 'ALTURA (MS', });
lyr_ASENTAMIENTOESPORDICO_7.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'X': 'X', 'Y': 'Y', 'REGION': 'REGION', 'PROVINCIA': 'PROVINCIA', 'COMUNA': 'COMUNA', 'LOCALIDAD': 'LOCALIDAD', 'TIPO': 'TIPO', 'DESCRIPCIO': 'DESCRIPCIO', 'INFORMANTE': 'INFORMANTE', 'ALTURA (MS': 'ALTURA (MS', });
lyr_ASENTAMIENTOESPORDICOCORRAL_8.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'X': 'X', 'Y': 'Y', 'REGION': 'REGION', 'PROVINCIA': 'PROVINCIA', 'COMUNA': 'COMUNA', 'LOCALIDAD': 'LOCALIDAD', 'TIPO': 'TIPO', 'DESCRIPCIO': 'DESCRIPCIO', 'INFORMANTE': 'INFORMANTE', 'ALTURA (MS': 'ALTURA (MS', });
lyr_CORRAL_9.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'X': 'X', 'Y': 'Y', 'REGION': 'REGION', 'PROVINCIA': 'PROVINCIA', 'COMUNA': 'COMUNA', 'LOCALIDAD': 'LOCALIDAD', 'TIPO': 'TIPO', 'DESCRIPCIO': 'DESCRIPCIO', 'INFORMANTE': 'INFORMANTE', 'ALTURA (MS': 'ALTURA (MS', });
lyr_CEREMONIA_10.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'X': 'X', 'Y': 'Y', 'REGION': 'REGION', 'PROVINCIA': 'PROVINCIA', 'COMUNA': 'COMUNA', 'LOCALIDAD': 'LOCALIDAD', 'TIPO': 'TIPO', 'DESCRIPCIO': 'DESCRIPCIO', 'INFORMANTE': 'INFORMANTE', 'ALTURA (MS': 'ALTURA (MS', });
lyr_MINERIA_11.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'X': 'X', 'Y': 'Y', 'REGION': 'REGION', 'PROVINCIA': 'PROVINCIA', 'COMUNA': 'COMUNA', 'LOCALIDAD': 'LOCALIDAD', 'TIPO': 'TIPO', 'DESCRIPCIO': 'DESCRIPCIO', 'INFORMANTE': 'INFORMANTE', 'ALTURA (MS': 'ALTURA (MS', });
lyr_CULTIVOS_12.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'X': 'X', 'Y': 'Y', 'REGION': 'REGION', 'PROVINCIA': 'PROVINCIA', 'COMUNA': 'COMUNA', 'LOCALIDAD': 'LOCALIDAD', 'TIPO': 'TIPO', 'DESCRIPCIO': 'DESCRIPCIO', 'INFORMANTE': 'INFORMANTE', 'ALTURA (MS': 'ALTURA (MS', });
lyr_DESLINDETERRITORIAL_13.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'X': 'X', 'Y': 'Y', 'REGION': 'REGION', 'PROVINCIA': 'PROVINCIA', 'COMUNA': 'COMUNA', 'LOCALIDAD': 'LOCALIDAD', 'TIPO': 'TIPO', 'DESCRIPCIO': 'DESCRIPCIO', 'INFORMANTE': 'INFORMANTE', 'ALTURA (MS': 'ALTURA (MS', });
lyr_ELEMENTONATURAl_14.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'X': 'X', 'Y': 'Y', 'REGION': 'REGION', 'PROVINCIA': 'PROVINCIA', 'COMUNA': 'COMUNA', 'LOCALIDAD': 'LOCALIDAD', 'TIPO': 'TIPO', 'DESCRIPCIO': 'DESCRIPCIO', 'INFORMANTE': 'INFORMANTE', 'ALTURA (MS': 'ALTURA (MS', });
lyr_POZO_15.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'X': 'X', 'Y': 'Y', 'REGION': 'REGION', 'PROVINCIA': 'PROVINCIA', 'COMUNA': 'COMUNA', 'LOCALIDAD': 'LOCALIDAD', 'TIPO': 'TIPO', 'DESCRIPCIO': 'DESCRIPCIO', 'INFORMANTE': 'INFORMANTE', 'ALTURA (MS': 'ALTURA (MS', });
lyr_OTROS_16.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'X': 'X', 'Y': 'Y', 'REGION': 'REGION', 'PROVINCIA': 'PROVINCIA', 'COMUNA': 'COMUNA', 'LOCALIDAD': 'LOCALIDAD', 'TIPO': 'TIPO', 'DESCRIPCIO': 'DESCRIPCIO', 'INFORMANTE': 'INFORMANTE', 'ALTURA (MS': 'ALTURA (MS', });
lyr_SECTORSIMBLICO_17.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'X': 'X', 'Y': 'Y', 'REGION': 'REGION', 'PROVINCIA': 'PROVINCIA', 'COMUNA': 'COMUNA', 'LOCALIDAD': 'LOCALIDAD', 'TIPO': 'TIPO', 'DESCRIPCIO': 'DESCRIPCIO', 'INFORMANTE': 'INFORMANTE', 'ALTURA (MS': 'ALTURA (MS', });
lyr_SITIOARQUEOLGICO_18.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'X': 'X', 'Y': 'Y', 'REGION': 'REGION', 'PROVINCIA': 'PROVINCIA', 'COMUNA': 'COMUNA', 'LOCALIDAD': 'LOCALIDAD', 'TIPO': 'TIPO', 'DESCRIPCIO': 'DESCRIPCIO', 'INFORMANTE': 'INFORMANTE', 'ALTURA (MS': 'ALTURA (MS', });
lyr_SITIORELIGIOSO_19.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'X': 'X', 'Y': 'Y', 'REGION': 'REGION', 'PROVINCIA': 'PROVINCIA', 'COMUNA': 'COMUNA', 'LOCALIDAD': 'LOCALIDAD', 'TIPO': 'TIPO', 'DESCRIPCIO': 'DESCRIPCIO', 'INFORMANTE': 'INFORMANTE', 'ALTURA (MS': 'ALTURA (MS', });
lyr_VERTIENTE_20.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'X': 'X', 'Y': 'Y', 'REGION': 'REGION', 'PROVINCIA': 'PROVINCIA', 'COMUNA': 'COMUNA', 'LOCALIDAD': 'LOCALIDAD', 'TIPO': 'TIPO', 'DESCRIPCIO': 'DESCRIPCIO', 'INFORMANTE': 'INFORMANTE', 'ALTURA (MS': 'ALTURA (MS', });
lyr_ZONADEPASTOREO_21.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'X': 'X', 'Y': 'Y', 'REGION': 'REGION', 'PROVINCIA': 'PROVINCIA', 'COMUNA': 'COMUNA', 'LOCALIDAD': 'LOCALIDAD', 'TIPO': 'TIPO', 'DESCRIPCIO': 'DESCRIPCIO', 'INFORMANTE': 'INFORMANTE', 'ALTURA (MS': 'ALTURA (MS', });
lyr_Regional_2.set('fieldImages', {'objectid': 'TextEdit', 'cir_sena': 'Range', 'codregion': 'Range', 'area_km': 'TextEdit', 'st_area_sh': 'TextEdit', 'st_length_': 'TextEdit', 'Region': 'TextEdit', });
lyr_comunas_3.set('fieldImages', {'objectid': 'TextEdit', 'shape_leng': 'TextEdit', 'dis_elec': 'Range', 'cir_sena': 'Range', 'cod_comuna': 'Range', 'codregion': 'Range', 'st_area_sh': 'TextEdit', 'st_length_': 'TextEdit', 'Region': 'TextEdit', 'Comuna': 'TextEdit', 'Provincia': 'TextEdit', });
lyr_ASENTAMIENTOCORRAL_4.set('fieldImages', {'NOMBRE': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'REGION': 'TextEdit', 'PROVINCIA': 'TextEdit', 'COMUNA': 'TextEdit', 'LOCALIDAD': 'TextEdit', 'TIPO': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'INFORMANTE': 'TextEdit', 'ALTURA (MS': 'TextEdit', });
lyr_ASENTAMIENTO_5.set('fieldImages', {'NOMBRE': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'REGION': 'TextEdit', 'PROVINCIA': 'TextEdit', 'COMUNA': 'TextEdit', 'LOCALIDAD': 'TextEdit', 'TIPO': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'INFORMANTE': 'TextEdit', 'ALTURA (MS': 'TextEdit', });
lyr_APACHETA_6.set('fieldImages', {'NOMBRE': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'REGION': 'TextEdit', 'PROVINCIA': 'TextEdit', 'COMUNA': 'TextEdit', 'LOCALIDAD': 'TextEdit', 'TIPO': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'INFORMANTE': 'TextEdit', 'ALTURA (MS': 'TextEdit', });
lyr_ASENTAMIENTOESPORDICO_7.set('fieldImages', {'NOMBRE': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'REGION': 'TextEdit', 'PROVINCIA': 'TextEdit', 'COMUNA': 'TextEdit', 'LOCALIDAD': 'TextEdit', 'TIPO': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'INFORMANTE': 'TextEdit', 'ALTURA (MS': 'TextEdit', });
lyr_ASENTAMIENTOESPORDICOCORRAL_8.set('fieldImages', {'NOMBRE': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'REGION': 'TextEdit', 'PROVINCIA': 'TextEdit', 'COMUNA': 'TextEdit', 'LOCALIDAD': 'TextEdit', 'TIPO': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'INFORMANTE': 'TextEdit', 'ALTURA (MS': 'TextEdit', });
lyr_CORRAL_9.set('fieldImages', {'NOMBRE': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'REGION': 'TextEdit', 'PROVINCIA': 'TextEdit', 'COMUNA': 'TextEdit', 'LOCALIDAD': 'TextEdit', 'TIPO': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'INFORMANTE': 'TextEdit', 'ALTURA (MS': 'TextEdit', });
lyr_CEREMONIA_10.set('fieldImages', {'NOMBRE': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'REGION': 'TextEdit', 'PROVINCIA': 'TextEdit', 'COMUNA': 'TextEdit', 'LOCALIDAD': 'TextEdit', 'TIPO': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'INFORMANTE': 'TextEdit', 'ALTURA (MS': 'TextEdit', });
lyr_MINERIA_11.set('fieldImages', {'NOMBRE': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'REGION': 'TextEdit', 'PROVINCIA': 'TextEdit', 'COMUNA': 'TextEdit', 'LOCALIDAD': 'TextEdit', 'TIPO': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'INFORMANTE': 'TextEdit', 'ALTURA (MS': 'TextEdit', });
lyr_CULTIVOS_12.set('fieldImages', {'NOMBRE': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'REGION': 'TextEdit', 'PROVINCIA': 'TextEdit', 'COMUNA': 'TextEdit', 'LOCALIDAD': 'TextEdit', 'TIPO': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'INFORMANTE': 'TextEdit', 'ALTURA (MS': 'TextEdit', });
lyr_DESLINDETERRITORIAL_13.set('fieldImages', {'NOMBRE': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'REGION': 'TextEdit', 'PROVINCIA': 'TextEdit', 'COMUNA': 'TextEdit', 'LOCALIDAD': 'TextEdit', 'TIPO': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'INFORMANTE': 'TextEdit', 'ALTURA (MS': 'TextEdit', });
lyr_ELEMENTONATURAl_14.set('fieldImages', {'NOMBRE': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'REGION': 'TextEdit', 'PROVINCIA': 'TextEdit', 'COMUNA': 'TextEdit', 'LOCALIDAD': 'TextEdit', 'TIPO': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'INFORMANTE': 'TextEdit', 'ALTURA (MS': 'TextEdit', });
lyr_POZO_15.set('fieldImages', {'NOMBRE': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'REGION': 'TextEdit', 'PROVINCIA': 'TextEdit', 'COMUNA': 'TextEdit', 'LOCALIDAD': 'TextEdit', 'TIPO': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'INFORMANTE': 'TextEdit', 'ALTURA (MS': 'TextEdit', });
lyr_OTROS_16.set('fieldImages', {'NOMBRE': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'REGION': 'TextEdit', 'PROVINCIA': 'TextEdit', 'COMUNA': 'TextEdit', 'LOCALIDAD': 'TextEdit', 'TIPO': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'INFORMANTE': 'TextEdit', 'ALTURA (MS': 'TextEdit', });
lyr_SECTORSIMBLICO_17.set('fieldImages', {'NOMBRE': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'REGION': 'TextEdit', 'PROVINCIA': 'TextEdit', 'COMUNA': 'TextEdit', 'LOCALIDAD': 'TextEdit', 'TIPO': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'INFORMANTE': 'TextEdit', 'ALTURA (MS': 'TextEdit', });
lyr_SITIOARQUEOLGICO_18.set('fieldImages', {'NOMBRE': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'REGION': 'TextEdit', 'PROVINCIA': 'TextEdit', 'COMUNA': 'TextEdit', 'LOCALIDAD': 'TextEdit', 'TIPO': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'INFORMANTE': 'TextEdit', 'ALTURA (MS': 'TextEdit', });
lyr_SITIORELIGIOSO_19.set('fieldImages', {'NOMBRE': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'REGION': 'TextEdit', 'PROVINCIA': 'TextEdit', 'COMUNA': 'TextEdit', 'LOCALIDAD': 'TextEdit', 'TIPO': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'INFORMANTE': 'TextEdit', 'ALTURA (MS': 'TextEdit', });
lyr_VERTIENTE_20.set('fieldImages', {'NOMBRE': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'REGION': 'TextEdit', 'PROVINCIA': 'TextEdit', 'COMUNA': 'TextEdit', 'LOCALIDAD': 'TextEdit', 'TIPO': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'INFORMANTE': 'TextEdit', 'ALTURA (MS': 'TextEdit', });
lyr_ZONADEPASTOREO_21.set('fieldImages', {'NOMBRE': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'REGION': 'TextEdit', 'PROVINCIA': 'TextEdit', 'COMUNA': 'TextEdit', 'LOCALIDAD': 'TextEdit', 'TIPO': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'INFORMANTE': 'TextEdit', 'ALTURA (MS': 'TextEdit', });
lyr_Regional_2.set('fieldLabels', {'objectid': 'inline label - visible with data', 'cir_sena': 'inline label - visible with data', 'codregion': 'inline label - visible with data', 'area_km': 'inline label - visible with data', 'st_area_sh': 'inline label - visible with data', 'st_length_': 'inline label - visible with data', 'Region': 'inline label - visible with data', });
lyr_comunas_3.set('fieldLabels', {'objectid': 'no label', 'shape_leng': 'no label', 'dis_elec': 'no label', 'cir_sena': 'no label', 'cod_comuna': 'no label', 'codregion': 'no label', 'st_area_sh': 'no label', 'st_length_': 'no label', 'Region': 'no label', 'Comuna': 'no label', 'Provincia': 'no label', });
lyr_ASENTAMIENTOCORRAL_4.set('fieldLabels', {'NOMBRE': 'inline label - visible with data', 'X': 'hidden field', 'Y': 'hidden field', 'REGION': 'hidden field', 'PROVINCIA': 'inline label - visible with data', 'COMUNA': 'inline label - visible with data', 'LOCALIDAD': 'inline label - visible with data', 'TIPO': 'inline label - visible with data', 'DESCRIPCIO': 'inline label - visible with data', 'INFORMANTE': 'inline label - visible with data', 'ALTURA (MS': 'inline label - visible with data', });
lyr_ASENTAMIENTO_5.set('fieldLabels', {'NOMBRE': 'inline label - visible with data', 'X': 'hidden field', 'Y': 'hidden field', 'REGION': 'hidden field', 'PROVINCIA': 'inline label - visible with data', 'COMUNA': 'inline label - visible with data', 'LOCALIDAD': 'inline label - visible with data', 'TIPO': 'inline label - visible with data', 'DESCRIPCIO': 'inline label - visible with data', 'INFORMANTE': 'inline label - visible with data', 'ALTURA (MS': 'inline label - visible with data', });
lyr_APACHETA_6.set('fieldLabels', {'NOMBRE': 'inline label - visible with data', 'X': 'hidden field', 'Y': 'hidden field', 'REGION': 'hidden field', 'PROVINCIA': 'inline label - visible with data', 'COMUNA': 'inline label - visible with data', 'LOCALIDAD': 'inline label - visible with data', 'TIPO': 'inline label - visible with data', 'DESCRIPCIO': 'inline label - visible with data', 'INFORMANTE': 'inline label - visible with data', 'ALTURA (MS': 'inline label - visible with data', });
lyr_ASENTAMIENTOESPORDICO_7.set('fieldLabels', {'NOMBRE': 'inline label - visible with data', 'X': 'hidden field', 'Y': 'hidden field', 'REGION': 'hidden field', 'PROVINCIA': 'inline label - visible with data', 'COMUNA': 'inline label - visible with data', 'LOCALIDAD': 'inline label - visible with data', 'TIPO': 'inline label - visible with data', 'DESCRIPCIO': 'inline label - visible with data', 'INFORMANTE': 'inline label - visible with data', 'ALTURA (MS': 'inline label - visible with data', });
lyr_ASENTAMIENTOESPORDICOCORRAL_8.set('fieldLabels', {'NOMBRE': 'inline label - visible with data', 'X': 'hidden field', 'Y': 'hidden field', 'REGION': 'hidden field', 'PROVINCIA': 'inline label - visible with data', 'COMUNA': 'inline label - visible with data', 'LOCALIDAD': 'inline label - visible with data', 'TIPO': 'inline label - visible with data', 'DESCRIPCIO': 'inline label - visible with data', 'INFORMANTE': 'inline label - visible with data', 'ALTURA (MS': 'inline label - visible with data', });
lyr_CORRAL_9.set('fieldLabels', {'NOMBRE': 'inline label - visible with data', 'X': 'hidden field', 'Y': 'hidden field', 'REGION': 'hidden field', 'PROVINCIA': 'inline label - visible with data', 'COMUNA': 'inline label - visible with data', 'LOCALIDAD': 'inline label - visible with data', 'TIPO': 'inline label - visible with data', 'DESCRIPCIO': 'inline label - visible with data', 'INFORMANTE': 'inline label - visible with data', 'ALTURA (MS': 'inline label - visible with data', });
lyr_CEREMONIA_10.set('fieldLabels', {'NOMBRE': 'inline label - visible with data', 'X': 'hidden field', 'Y': 'hidden field', 'REGION': 'hidden field', 'PROVINCIA': 'inline label - visible with data', 'COMUNA': 'inline label - visible with data', 'LOCALIDAD': 'inline label - visible with data', 'TIPO': 'inline label - visible with data', 'DESCRIPCIO': 'inline label - visible with data', 'INFORMANTE': 'inline label - visible with data', 'ALTURA (MS': 'inline label - visible with data', });
lyr_MINERIA_11.set('fieldLabels', {'NOMBRE': 'inline label - visible with data', 'X': 'hidden field', 'Y': 'hidden field', 'REGION': 'hidden field', 'PROVINCIA': 'inline label - visible with data', 'COMUNA': 'inline label - visible with data', 'LOCALIDAD': 'inline label - visible with data', 'TIPO': 'inline label - visible with data', 'DESCRIPCIO': 'inline label - visible with data', 'INFORMANTE': 'inline label - visible with data', 'ALTURA (MS': 'inline label - visible with data', });
lyr_CULTIVOS_12.set('fieldLabels', {'NOMBRE': 'inline label - visible with data', 'X': 'hidden field', 'Y': 'hidden field', 'REGION': 'hidden field', 'PROVINCIA': 'inline label - visible with data', 'COMUNA': 'inline label - visible with data', 'LOCALIDAD': 'inline label - visible with data', 'TIPO': 'inline label - visible with data', 'DESCRIPCIO': 'inline label - visible with data', 'INFORMANTE': 'inline label - visible with data', 'ALTURA (MS': 'inline label - visible with data', });
lyr_DESLINDETERRITORIAL_13.set('fieldLabels', {'NOMBRE': 'inline label - visible with data', 'X': 'hidden field', 'Y': 'hidden field', 'REGION': 'hidden field', 'PROVINCIA': 'inline label - visible with data', 'COMUNA': 'inline label - visible with data', 'LOCALIDAD': 'inline label - visible with data', 'TIPO': 'inline label - visible with data', 'DESCRIPCIO': 'inline label - visible with data', 'INFORMANTE': 'inline label - visible with data', 'ALTURA (MS': 'inline label - visible with data', });
lyr_ELEMENTONATURAl_14.set('fieldLabels', {'NOMBRE': 'inline label - visible with data', 'X': 'hidden field', 'Y': 'hidden field', 'REGION': 'hidden field', 'PROVINCIA': 'inline label - visible with data', 'COMUNA': 'inline label - visible with data', 'LOCALIDAD': 'inline label - visible with data', 'TIPO': 'inline label - visible with data', 'DESCRIPCIO': 'inline label - visible with data', 'INFORMANTE': 'inline label - visible with data', 'ALTURA (MS': 'inline label - visible with data', });
lyr_POZO_15.set('fieldLabels', {'NOMBRE': 'inline label - visible with data', 'X': 'hidden field', 'Y': 'hidden field', 'REGION': 'hidden field', 'PROVINCIA': 'inline label - visible with data', 'COMUNA': 'inline label - visible with data', 'LOCALIDAD': 'inline label - visible with data', 'TIPO': 'inline label - visible with data', 'DESCRIPCIO': 'inline label - visible with data', 'INFORMANTE': 'inline label - visible with data', 'ALTURA (MS': 'inline label - visible with data', });
lyr_OTROS_16.set('fieldLabels', {'NOMBRE': 'inline label - visible with data', 'X': 'hidden field', 'Y': 'hidden field', 'REGION': 'hidden field', 'PROVINCIA': 'inline label - visible with data', 'COMUNA': 'inline label - visible with data', 'LOCALIDAD': 'inline label - visible with data', 'TIPO': 'inline label - visible with data', 'DESCRIPCIO': 'inline label - visible with data', 'INFORMANTE': 'inline label - visible with data', 'ALTURA (MS': 'inline label - visible with data', });
lyr_SECTORSIMBLICO_17.set('fieldLabels', {'NOMBRE': 'inline label - visible with data', 'X': 'hidden field', 'Y': 'hidden field', 'REGION': 'hidden field', 'PROVINCIA': 'inline label - visible with data', 'COMUNA': 'inline label - visible with data', 'LOCALIDAD': 'inline label - visible with data', 'TIPO': 'inline label - visible with data', 'DESCRIPCIO': 'inline label - visible with data', 'INFORMANTE': 'inline label - visible with data', 'ALTURA (MS': 'inline label - visible with data', });
lyr_SITIOARQUEOLGICO_18.set('fieldLabels', {'NOMBRE': 'inline label - visible with data', 'X': 'hidden field', 'Y': 'hidden field', 'REGION': 'hidden field', 'PROVINCIA': 'inline label - visible with data', 'COMUNA': 'inline label - visible with data', 'LOCALIDAD': 'inline label - visible with data', 'TIPO': 'inline label - visible with data', 'DESCRIPCIO': 'inline label - visible with data', 'INFORMANTE': 'inline label - visible with data', 'ALTURA (MS': 'inline label - visible with data', });
lyr_SITIORELIGIOSO_19.set('fieldLabels', {'NOMBRE': 'inline label - visible with data', 'X': 'hidden field', 'Y': 'hidden field', 'REGION': 'hidden field', 'PROVINCIA': 'inline label - visible with data', 'COMUNA': 'inline label - visible with data', 'LOCALIDAD': 'inline label - visible with data', 'TIPO': 'inline label - visible with data', 'DESCRIPCIO': 'inline label - visible with data', 'INFORMANTE': 'inline label - visible with data', 'ALTURA (MS': 'inline label - visible with data', });
lyr_VERTIENTE_20.set('fieldLabels', {'NOMBRE': 'inline label - visible with data', 'X': 'hidden field', 'Y': 'hidden field', 'REGION': 'hidden field', 'PROVINCIA': 'inline label - visible with data', 'COMUNA': 'inline label - visible with data', 'LOCALIDAD': 'inline label - visible with data', 'TIPO': 'inline label - visible with data', 'DESCRIPCIO': 'inline label - visible with data', 'INFORMANTE': 'inline label - visible with data', 'ALTURA (MS': 'inline label - visible with data', });
lyr_ZONADEPASTOREO_21.set('fieldLabels', {'NOMBRE': 'inline label - visible with data', 'X': 'hidden field', 'Y': 'hidden field', 'REGION': 'hidden field', 'PROVINCIA': 'inline label - visible with data', 'COMUNA': 'inline label - visible with data', 'LOCALIDAD': 'inline label - visible with data', 'TIPO': 'inline label - visible with data', 'DESCRIPCIO': 'inline label - visible with data', 'INFORMANTE': 'inline label - visible with data', 'ALTURA (MS': 'inline label - visible with data', });
lyr_ZONADEPASTOREO_21.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});