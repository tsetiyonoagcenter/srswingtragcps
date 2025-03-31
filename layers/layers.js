var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_transmission_line_of_concern_91m_1 = new ol.format.GeoJSON();
var features_transmission_line_of_concern_91m_1 = format_transmission_line_of_concern_91m_1.readFeatures(json_transmission_line_of_concern_91m_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_transmission_line_of_concern_91m_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_transmission_line_of_concern_91m_1.addFeatures(features_transmission_line_of_concern_91m_1);
var lyr_transmission_line_of_concern_91m_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_transmission_line_of_concern_91m_1, 
                style: style_transmission_line_of_concern_91m_1,
                popuplayertitle: 'transmission_line_of_concern_91m',
                interactive: true,
                title: '<img src="styles/legend/transmission_line_of_concern_91m_1.png" /> transmission_line_of_concern_91m'
            });
var format_transmission_line_aoi_L_2 = new ol.format.GeoJSON();
var features_transmission_line_aoi_L_2 = format_transmission_line_aoi_L_2.readFeatures(json_transmission_line_aoi_L_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_transmission_line_aoi_L_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_transmission_line_aoi_L_2.addFeatures(features_transmission_line_aoi_L_2);
var lyr_transmission_line_aoi_L_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_transmission_line_aoi_L_2, 
                style: style_transmission_line_aoi_L_2,
                popuplayertitle: 'transmission_line_aoi_L',
                interactive: true,
                title: '<img src="styles/legend/transmission_line_aoi_L_2.png" /> transmission_line_aoi_L'
            });
var format_transmission_line_of_concern_3 = new ol.format.GeoJSON();
var features_transmission_line_of_concern_3 = format_transmission_line_of_concern_3.readFeatures(json_transmission_line_of_concern_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_transmission_line_of_concern_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_transmission_line_of_concern_3.addFeatures(features_transmission_line_of_concern_3);
var lyr_transmission_line_of_concern_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_transmission_line_of_concern_3, 
                style: style_transmission_line_of_concern_3,
                popuplayertitle: 'transmission_line_of_concern',
                interactive: true,
                title: '<img src="styles/legend/transmission_line_of_concern_3.png" /> transmission_line_of_concern'
            });
var format_srs_wta_flight_missions_4 = new ol.format.GeoJSON();
var features_srs_wta_flight_missions_4 = format_srs_wta_flight_missions_4.readFeatures(json_srs_wta_flight_missions_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_srs_wta_flight_missions_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_srs_wta_flight_missions_4.addFeatures(features_srs_wta_flight_missions_4);
var lyr_srs_wta_flight_missions_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_srs_wta_flight_missions_4, 
                style: style_srs_wta_flight_missions_4,
                popuplayertitle: 'srs_wta_flight_missions',
                interactive: true,
                title: '<img src="styles/legend/srs_wta_flight_missions_4.png" /> srs_wta_flight_missions'
            });
var format_wtra_gcps_targets_wlinks_5 = new ol.format.GeoJSON();
var features_wtra_gcps_targets_wlinks_5 = format_wtra_gcps_targets_wlinks_5.readFeatures(json_wtra_gcps_targets_wlinks_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_wtra_gcps_targets_wlinks_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_wtra_gcps_targets_wlinks_5.addFeatures(features_wtra_gcps_targets_wlinks_5);
var lyr_wtra_gcps_targets_wlinks_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_wtra_gcps_targets_wlinks_5, 
                style: style_wtra_gcps_targets_wlinks_5,
                popuplayertitle: 'wtra_gcps_targets_wlinks',
                interactive: true,
                title: '<img src="styles/legend/wtra_gcps_targets_wlinks_5.png" /> wtra_gcps_targets_wlinks'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_transmission_line_of_concern_91m_1.setVisible(true);lyr_transmission_line_aoi_L_2.setVisible(true);lyr_transmission_line_of_concern_3.setVisible(true);lyr_srs_wta_flight_missions_4.setVisible(true);lyr_wtra_gcps_targets_wlinks_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_transmission_line_of_concern_91m_1,lyr_transmission_line_aoi_L_2,lyr_transmission_line_of_concern_3,lyr_srs_wta_flight_missions_4,lyr_wtra_gcps_targets_wlinks_5];
lyr_transmission_line_of_concern_91m_1.set('fieldAliases', {'id': 'id', });
lyr_transmission_line_aoi_L_2.set('fieldAliases', {'objectid': 'objectid', 'id': 'id', 'type': 'type', 'status': 'status', 'naics_code': 'naics_code', 'naics_desc': 'naics_desc', 'source': 'source', 'sourcedate': 'sourcedate', 'val_method': 'val_method', 'val_date': 'val_date', 'owner': 'owner', 'voltage': 'voltage', 'volt_class': 'volt_class', 'inferred': 'inferred', 'sub_1': 'sub_1', 'sub_2': 'sub_2', 'shape_leng': 'shape_leng', 'globalid': 'globalid', });
lyr_transmission_line_of_concern_3.set('fieldAliases', {'id': 'id', });
lyr_srs_wta_flight_missions_4.set('fieldAliases', {'id': 'id', 'area': 'area', });
lyr_wtra_gcps_targets_wlinks_5.set('fieldAliases', {'id': 'id', 'gmaplink': 'gmaplink', });
lyr_transmission_line_of_concern_91m_1.set('fieldImages', {'id': 'TextEdit', });
lyr_transmission_line_aoi_L_2.set('fieldImages', {'objectid': 'TextEdit', 'id': 'TextEdit', 'type': 'TextEdit', 'status': 'TextEdit', 'naics_code': 'TextEdit', 'naics_desc': 'TextEdit', 'source': 'TextEdit', 'sourcedate': 'TextEdit', 'val_method': 'TextEdit', 'val_date': 'TextEdit', 'owner': 'TextEdit', 'voltage': 'TextEdit', 'volt_class': 'TextEdit', 'inferred': 'TextEdit', 'sub_1': 'TextEdit', 'sub_2': 'TextEdit', 'shape_leng': 'TextEdit', 'globalid': 'TextEdit', });
lyr_transmission_line_of_concern_3.set('fieldImages', {'id': 'TextEdit', });
lyr_srs_wta_flight_missions_4.set('fieldImages', {'id': 'TextEdit', 'area': '', });
lyr_wtra_gcps_targets_wlinks_5.set('fieldImages', {'id': 'TextEdit', 'gmaplink': '', });
lyr_transmission_line_of_concern_91m_1.set('fieldLabels', {'id': 'no label', });
lyr_transmission_line_aoi_L_2.set('fieldLabels', {'objectid': 'no label', 'id': 'no label', 'type': 'no label', 'status': 'no label', 'naics_code': 'no label', 'naics_desc': 'no label', 'source': 'no label', 'sourcedate': 'no label', 'val_method': 'no label', 'val_date': 'no label', 'owner': 'no label', 'voltage': 'no label', 'volt_class': 'no label', 'inferred': 'no label', 'sub_1': 'no label', 'sub_2': 'no label', 'shape_leng': 'no label', 'globalid': 'no label', });
lyr_transmission_line_of_concern_3.set('fieldLabels', {'id': 'no label', });
lyr_srs_wta_flight_missions_4.set('fieldLabels', {'id': 'no label', 'area': 'no label', });
lyr_wtra_gcps_targets_wlinks_5.set('fieldLabels', {'id': 'no label', 'gmaplink': 'no label', });
lyr_wtra_gcps_targets_wlinks_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});