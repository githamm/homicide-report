/* ///// CHARTS ///// */

var dataFile = "js/homicides_111920.json";

/* ----- HOMICIDES BY MONTH CHART ----- */

d3.json(dataFile, function(data) {
    var monthCount = [];
    var monthTotal = 0;
    var yearCount = [];
    var yearTotal = 0;

    for (var i = 0; i < data.length; i++) {
        var item = data[i];

        if (!monthCount[item.homicideMonth + item.homicideYear]) {
            monthCount[item.homicideMonth + item.homicideYear] = [];
        }
        monthCount[item.homicideMonth + item.homicideYear].push({ Month: item.homicideMonth + item.homicideYear });
        if (monthTotal < item.homicideMonth) {
            monthTotal = item.homicideMonth;
        }
    }
    for (var i = 0; i < data.length; i++) {
        var item = data[i];

        if (!yearCount[item.homicideYear]) {
            yearCount[item.homicideYear] = [];
        }
        yearCount[item.homicideYear].push({ Year: item.homicideYear });
        if (yearTotal < item.homicideYear) {
            yearTotal = item.homicideYear;
        }
    };

    var jan2015 = monthCount.Jan2015.length;
    var feb2015 = jan2015 + monthCount.Feb2015.length;
    var mar2015 = feb2015 + monthCount.Mar2015.length;
    var apr2015 = mar2015 + monthCount.Apr2015.length;
    var may2015 = apr2015 + monthCount.May2015.length;
    var jun2015 = may2015 + monthCount.Jun2015.length;
    var jul2015 = jun2015 + monthCount.Jul2015.length;
    var aug2015 = jul2015 + monthCount.Aug2015.length;
    var sep2015 = aug2015 + monthCount.Sep2015.length;
    var oct2015 = sep2015 + monthCount.Oct2015.length;
    var nov2015 = oct2015 + monthCount.Nov2015.length;
    var dec2015 = nov2015 + monthCount.Dec2015.length;
    var jan2016 = monthCount.Jan2016.length;
    var feb2016 = jan2016 + monthCount.Feb2016.length;
    var mar2016 = feb2016 + monthCount.Mar2016.length;
    var apr2016 = mar2016 + monthCount.Apr2016.length;
    var may2016 = apr2016 + monthCount.May2016.length;
    var jun2016 = may2016 + monthCount.Jun2016.length;
    var jul2016 = jun2016 + monthCount.Jul2016.length;
    var aug2016 = jul2016 + monthCount.Aug2016.length;
    var sep2016 = aug2016 + monthCount.Sep2016.length;
    var oct2016 = sep2016 + monthCount.Oct2016.length;
    var nov2016 = oct2016 + monthCount.Nov2016.length;
    var dec2016 = nov2016 + monthCount.Dec2016.length;
    var jan2017 = monthCount.Jan2017.length;
    var feb2017 = jan2017 + monthCount.Feb2017.length;
    var mar2017 = feb2017 + monthCount.Mar2017.length;
    var apr2017 = mar2017 + monthCount.Apr2017.length;
    var may2017 = apr2017 + monthCount.May2017.length;
    var jun2017 = may2017 + monthCount.Jun2017.length;
    var jul2017 = jun2017 + monthCount.Jul2017.length;
    var aug2017 = jul2017 + monthCount.Aug2017.length;
    var sep2017 = aug2017 + monthCount.Sep2017.length;
    var oct2017 = sep2017 + monthCount.Oct2017.length;
    var nov2017 = oct2017 + monthCount.Nov2017.length;
    var dec2017 = nov2017 + monthCount.Dec2017.length;
    var jan2018 = monthCount.Jan2018.length;
    var feb2018 = jan2018 + monthCount.Feb2018.length;
    var mar2018 = feb2018 + monthCount.Mar2018.length;
    var apr2018 = mar2018 + monthCount.Apr2018.length;
    var may2018 = apr2018 + monthCount.May2018.length;
    var jun2018 = may2018 + monthCount.Jun2018.length;
    var jul2018 = jun2018 + monthCount.Jul2018.length;
    var aug2018 = jul2018 + monthCount.Aug2018.length;
    var sep2018 = aug2018 + monthCount.Sep2018.length;
    var oct2018 = sep2018 + monthCount.Oct2018.length;
    var nov2018 = oct2018 + monthCount.Nov2018.length;
    var dec2018 = nov2018 + monthCount.Dec2018.length;
    var jan2019 = monthCount.Jan2019.length;
    var feb2019 = jan2019 + monthCount.Feb2019.length;
    var mar2019 = feb2019 + monthCount.Mar2019.length;
    var apr2019 = mar2019 + monthCount.Apr2019.length;
    var may2019 = apr2019 + monthCount.May2019.length;
    var jun2019 = may2019 + monthCount.Jun2019.length;
    var jul2019 = jun2019 + monthCount.Jul2019.length;
    var aug2019 = jul2019 + monthCount.Aug2019.length;
    var sep2019 = aug2019 + monthCount.Sep2019.length;
    var oct2019 = sep2019 + monthCount.Oct2019.length;
    var nov2019 = oct2019 + monthCount.Nov2019.length;
    var dec2019 = nov2019 + monthCount.Dec2019.length;
    var jan2020 = monthCount.Jan2020.length;
    var feb2020 = jan2020 + monthCount.Feb2020.length;
    var mar2020 = feb2020 + monthCount.Mar2020.length;
    var apr2020 = mar2020 + monthCount.Apr2020.length;
    var may2020 = apr2020 + monthCount.May2020.length;
    var jun2020 = may2020 + monthCount.Jun2020.length;
    var jul2020 = jun2020 + monthCount.Jul2020.length;
    var aug2020 = jul2020 + monthCount.Aug2020.length;
    var sep2020 = aug2020 + monthCount.Sep2020.length;
    var oct2020 = sep2020 + monthCount.Oct2020.length;
    var nov2020 = oct2020 + monthCount.Nov2020.length;
    // var dec2020 = nov2020 + monthCount.Dec2020.length;

    /* -- For count displayed on index.html NOT BEING USED -- */
    var homePageTotal = yearCount[2018].length;
    $('#display-totals').html(homePageTotal);

    var homicideChart = c3.generate({
        bindto: '#homicide-chart',
        // size: {
        //     height: 500
        // },
        data: {
            x: 'x',
            columns: [
                ['x', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                ['2010', 2, 2, 3, 3, 5, 6, 9, 9, 13, 18, 22, 27],
                ['2011', 3, 5, 7, 11, 16, 19, 20, 27, 32, 33, 36, 38],
                ['2012', 1, 4, 8, 11, 13, 16, 17, 19, 20, 25, 28, 28],
                ['2013', 4, 6, 9, 14, 16, 17, 21, 25, 28, 32, 34, 36],
                ['2014', 2, 3, 7, 8, 10, 12, 15, 20, 21, 24, 27, 28],
                // ['2015', 4, 7, 12, 17, 19, 20, 27, 32, 39, 42, 49, 50],
                // ['2016', 4, 7, 9, 14, 15, 20, 28, 30, 33, 45, 55, 56],
                // ['2017', 4, 8, 9, 16, 21, 24, 32, 33]
                ['2015', jan2015, feb2015, mar2015, apr2015, may2015, jun2015, jul2015, aug2015, sep2015, oct2015, nov2015, dec2015],
                ['2016', jan2016, feb2016, mar2016, apr2016, may2016, jun2016, jul2016, aug2016, sep2016, oct2016, nov2016, dec2016],
                ['2017', jan2017, feb2017, mar2017, apr2017, may2017, jun2017, jul2017, aug2017, sep2017, oct2017, nov2017, dec2017],
                ['2018', jan2018, feb2018, mar2018, apr2018, may2018, jun2018, jul2018, aug2018, sep2018, oct2018, nov2018, dec2018],
                ['2019', jan2019, feb2019, mar2019, apr2019, may2019, jun2019, jul2019, aug2019, sep2019, oct2019, nov2019, dec2019],
                ['2020', jan2020, feb2020, mar2020, apr2020, may2020, jun2020, jul2020, aug2020, sep2020, oct2020, nov2020 /*, dec2020*/ ]
            ],
            colors: {
                '2010': '#bbb',
                '2011': '#bbb',
                '2012': '#bbb',
                '2013': '#bbb',
                '2014': '#bbb',
                '2015': '#bbb',
                '2016': '#bbb',
                '2017': '#bbb',
                '2018': '#bbb',
                '2019': 'rgba(142,16,36,.5)',
                '2020': 'rgba(142,16,36,1)'
            }
        },
        grid: {
            x: {
                show: true
            },
            y: {
                show: true
                // lines: [{
                //     value: 6,
                //     text: '6 innings',
                //     axis: 'y'
                // }]
            },
        },
        legend: {
            position: 'bottom'
        },
        axis: {
            x: {
                type: 'category', // this needed to load string x value
                tick: {
                    rotate: 45
                }
            },
            y: {
                label: {
                    text: 'Number of homicides (cumulative)',
                    position: 'outer-middle'
                }
            },
        },
    });
});

/* ----- HOMICIDE RATE CHART ----- */

var homicideRateChart = c3.generate({
    bindto: '#homicide-rate-chart',
    data: {
        x: 'x',
        columns: [
            ['x', "1985-01-01", "1986-01-01", "1987-01-01", "1988-01-01", "1989-01-01", "1990-01-01", "1991-01-01", "1992-01-01", "1993-01-01", "1994-01-01", "1995-01-01", "1996-01-01", "1997-01-01", "1998-01-01", "1999-01-01", "2000-01-01", "2001-01-01", "2002-01-01", "2003-01-01", "2004-01-01", "2005-01-01", "2006-01-01", "2007-01-01", "2008-01-01", "2009-01-01", "2010-01-01", "2011-01-01", "2012-01-01", "2013-01-01", "2014-01-01", "2015-01-01", "2016-01-01", "2017-01-01", "2018-01-01", "2019-01-01"],
            ['Homicide count', 72, 91, 79, 69, 55, 67, 89, 93, 73, 85, 82, 69, 72, 55, 65, 33, 47, 51, 65, 91, 61, 55, 50, 49, 38, 37, 44, 39, 42, 31, 50, 56, 56, 67, 63],
            ['Homicide rate', 14.5, 18.3, 16.1, 14.4, 11.6, 14.3, 18.7, 19.0, 14.6, 16.9, 16.2, 13.3, 13.7, 10.3, 11.9, 5.9, 8.3, 9.1, 11.6, 16.2, 10.9, 9.8, 8.8, 8.4, 6.4, 6.1, 7.1, 6.1, 6.5, 4.7, 7.3, 8.0, 7.9, 9.3, 8.6]
        ],
        types: {
            'Homicide count': 'line',
            'Homicide rate': 'area-step'
        },
        colors: {
            'Homicide count': 'rgba(142,16,36,1)',
            'Homicide rate': '#08306b'
        }
    },
    grid: {
        x: {
            show: true
        },
        y: {
            show: true
        }
    },
    axis: {
        x: {
            type: 'timeseries',
            tick: {
                format: '%Y',
                values: ['1985-01-01', '1990-01-01', '1995-01-01', '2000-01-01', '2005-01-01', '2010-01-01', '2015-01-01']

            }
        }
    }
});

/* ----- SIDEBAR CHARTS ----- */

d3.json(dataFile, function(data) {
    var genderCount = [];
    var causeCount = [];
    var categoryTotal = 0;

    let ageBucket1 = [];
    let ageBucket2 = [];
    let ageBucket3 = [];
    let ageBucket4 = [];
    let ageBucket5 = [];
    let ageBucket6 = [];
    let ageBucket7 = [];
    let ageBucket8 = [];
    let ageBucket9 = [];

    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        if (item.victimAge <= 9) {
            ageBucket1.push(1)
        } else if (item.victimAge <= 19) {
            ageBucket2.push(1)
        } else if (item.victimAge <= 29) {
            ageBucket3.push(1)
        } else if (item.victimAge <= 39) {
            ageBucket4.push(1)
        } else if (item.victimAge <= 49) {
            ageBucket5.push(1)
        } else if (item.victimAge <= 59) {
            ageBucket6.push(1)
        } else if (item.victimAge <= 69) {
            ageBucket7.push(1)
        } else if (item.victimAge <= 79) {
            ageBucket8.push(1)
        } else ageBucket9.push(1)
    }

    var neighborhoodChart = c3.generate({
        bindto: '#homicide-age',
        size: {
            height: 275
        },
        data: {
            x: 'x',
            columns: [
                ['x', '0-9', '10-19', '20-29', '30-39', '40-49', '50-59', '60-69', '70-79', '80+'],
                ['Homicides', ageBucket1.length, ageBucket2.length, ageBucket3.length, ageBucket4.length, ageBucket5.length, ageBucket6.length, ageBucket7.length, ageBucket8.length, ageBucket9.length]

            ],
            type: 'bar',
            colors: {
                'Homicides': '#08306b'
            }
        },
        axis: {
            x: {
                type: 'category'
            }
        },
        grid: {
            y: {
                show: true
            }
        }
    });

    /* ----- HOMICIDES BY NEIGHBORHOOD CHART ----- */

    // var neighborhoodCount = [];
    // var categoryTotal = 0;

    // for (var i = 0; i < data.length; i++) {
    //     var item = data[i];
    //     if (!neighborhoodCount[item.neighborhood]) {
    //         neighborhoodCount[item.neighborhood] = [];
    //     }
    //     neighborhoodCount[item.neighborhood].push({ Neighborhood: item.neighborhood });
    //     if (categoryTotal < item.neighborhood) {
    //         categoryTotal = item.neighborhood;
    //     }
    // }
    // var fivePoints = neighborhoodCount['Five Points'].length;
    // var montbello = neighborhoodCount.Montbello.length;
    // var eastColfax = neighborhoodCount['East Colfax'].length;
    // var northeastParkHill = neighborhoodCount['Northeast Park Hill'].length;
    // // var cole = neighborhoodCount.Cole.length;
    // // var elyriaSwansea = neighborhoodCount['Elyria Swansea'].length;
    // var westwood = neighborhoodCount.Westwood.length;
    // // var gatewayGreenValleyRanch = neighborhoodCount['Gateway-Green Valley Ranch'].length;
    // var others = data.length - (fivePoints + montbello + eastColfax + northeastParkHill + westwood);

    // var neighborhoodChart = c3.generate({
    //     bindto: '#homicide-neighborhoods',
    //     size: {
    //         height: 325
    //     },
    //     data: {
    //         columns: [
    //             ['Montbello', montbello],
    //             ['Five Points', fivePoints],
    //             ['East Colfax', eastColfax],
    //             ['Northeast Park Hill', northeastParkHill],
    //             ['Westwood', westwood],
    //             // ['Cole', cole],
    //             // ['Elyria Swansea', elyriaSwansea],
    //             // ['Gateway-Green Valley Ranch', gatewayGreenValleyRanch],
    //             ['Others', others]

    //         ],
    //         type: 'donut',
    //     },
    //     donut: {
    //         label: {
    //             format: function(value) { return value; }
    //         }
    //     },
    //     axis: {
    //         x: {
    //             type: 'category'
    //         }
    //     },
    //     color: {
    //         pattern: ['#08306b', '#08519c', '#2171b5', '#4292c6', '#6baed6', '#9ecae1', '#c6dbef', /*'#deebf7',*/ '#ccc']
    //     }
    // });

    /* ----- HOMICIDES BY SEX CHART----- */

    for (var i = 0; i < data.length; i++) {
        var item = data[i];
        // var homicideCount = data.length;
        if (!genderCount[item.victimGender + item.homicideYear]) {
            genderCount[item.victimGender + item.homicideYear] = [];
        }
        genderCount[item.victimGender + item.homicideYear].push({ Gender: item.victimGender + item.homicideYear });
        if (categoryTotal < item.victimGender) {
            categoryTotal = item.victimGender;
        }
    }
    var sexChart = c3.generate({
        bindto: '#homicide-sex',
        size: {
            height: 275
        },
        data: {
            x: 'x',
            columns: [
                ['x', 'Male', 'Female'],
                ['2020', genderCount.Male2020.length, genderCount.Female2020.length],
                ['2019', genderCount.Male2019.length, genderCount.Female2019.length],
                ['2018', genderCount.Male2018.length, genderCount.Female2018.length],
                ['2017', genderCount.Male2017.length, genderCount.Female2017.length],
                ['2016', genderCount.Male2016.length, genderCount.Female2016.length],
                ['2015', genderCount.Male2015.length, genderCount.Female2015.length]

            ],
            type: 'bar',
            colors: {
                '2015': '#ddd',
                '2016': '#ccc',
                '2017': '#bbb',
                '2018': '#aaa',
                '2019': 'rgba(142,16,36,.5)',
                '2020': 'rgba(142,16,36,1)'
            },
            onclick: function(d, i) { console.log("onclick", d, i); },
            onmouseover: function(d, i) { console.log("onmouseover", d, i); },
            onmouseout: function(d, i) { console.log("onmouseout", d, i); }
        },
        bar: {
            width: {
                ratio: 0.75
            }
        },
        axis: {
            x: {
                type: 'category'
            }
        },
        grid: {
            x: {
                show: true
            },
            y: {
                show: true
            }
        }
    });
});

/* ///// MAP ///// */

var neighborhoods = new L.LayerGroup();
// var census = new L.LayerGroup();
var homicides2020 = new L.LayerGroup();
var homicides2019 = new L.LayerGroup();
var homicides2018 = new L.LayerGroup();
var homicides2017 = new L.LayerGroup();
var homicides2016 = new L.LayerGroup();
var homicides2015 = new L.LayerGroup();

var streetMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC',
    maxZoom: 16
});

var stamenMap = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.{ext}', {
    attribution: 'Map tiles by <a href="http://stamen.com">stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    subdomains: 'abcd',
    minZoom: 0,
    maxZoom: 20,
    ext: 'png'
});

var baseLayers = {
    "Monochrome map": stamenMap,
    "Street map": streetMap
    // "Satellite map": satellite
};

// grouped layer control from http://bl.ocks.org/ismyrnow/6123517
var groupedOverlays = {
    "Background": {
        "Neighborhoods": neighborhoods
        // "Income levels": census
    },
    "Homicides": {
        "2020": homicides2020,
        "2019": homicides2019,
        "2018": homicides2018,
        "2017": homicides2017,
        "2016": homicides2016,
        "2015": homicides2015
    }
};

// map from http://bl.ocks.org/awoodruff/3ce5d735126a56dfff94
// initialize the map
var map = L.map('map', {
    center: [39.72, -104.91],
    zoom: 12,
    minZoom: 11,
    maxZoom: 16,
    scrollWheelZoom: true,
    // touchZoom: true,
    keyboard: false,
    layers: [stamenMap, neighborhoods, homicides2020, homicides2019, homicides2018, homicides2017, homicides2016, homicides2015]
});

// below from http://maptimeboston.github.io/leaflet-intro/
$.getJSON("js/homicide-neighborhoods-geojson.js", function(data) {
    L.geoJson(data, {
        style: function(feature) {
            // var fillColor,
            //     density = feature.properties.homicides;
            // if (density >= 16) fillColor = "#08306b";
            // else if (density >= 12) fillColor = "#08519c";
            // else if (density >= 8) fillColor = "#2171b5";
            // else if (density >= 4) fillColor = "#4292c6";
            // else if (density > 0) fillColor = "#6baed6";
            // else fillColor = "rgba(255,255,0,.3)"; // no data
            return {
                color: "#0000ff",
                weight: 5,
                fillColor: '#000',
                fillOpacity: .1
            };
        },
        onEachFeature: function(feature, layer) {
            layer.bindPopup(
                '<h4 class="neighborhood-header">' + feature.properties.nbhd_name + '</h4>'
                //'<h4 class="neighborhood-header">' + feature.properties.nbhd_name + '</h4><hr class="popup">' + '<span class="neighborhood-total">' + feature.properties.homicides + '</span> homicide(s) since 2015'
            )
        }
    }).addTo(neighborhoods);
});

// $.getJSON("js/acs-2013-tract-geojson.js", function(data) {
//     L.geoJson(data, {
//         style: function(feature) {
//             var fillColor,
//                 density = feature.properties.med_hh_inc;
//             if (density > 100000) fillColor = "#54278f";
//             else if (density > 75000) fillColor = "#756bb1";
//             else if (density > 50000) fillColor = "#9e9ac8";
//             else if (density > 25000) fillColor = "#cbc9e2";
//             else if (density > 0) fillColor = "#f2f0f7";
//             else fillColor = "rgba(0,0,0,0)"; // no data
//             return {
//                 color: "#000",
//                 weight: 1,
//                 fillColor: fillColor,
//                 fillOpacity: .6
//             };
//         },
//         onEachFeature: function(feature, layer) {
//             layer.bindPopup(
//                 '<strong>' + 'Tract No. ' + feature.properties.geo_name + '</strong><hr class="popup">' + 'Median income: ' + '$' + feature.properties.med_hh_inc + '<br/>' + 'Population: ' + feature.properties.ttl_popula + '<br/>' + 'Pct. under 18: ' + feature.properties.ageless18_pct + '%'
//             )
//         }
//     }).addTo(census);
// });


$.getJSON("js/homicides_2020_geojson.js", function(data) {
    var mapIcon = L.divIcon({
        //iconUrl: 'images/circle-red.png',
        className: 'icon-current-year',
        iconSize: [10, 10]
        //iconAnchor: [6, 3],
        //popupAnchor: [-1, -5]
        // icons from https://www.iconfinder.com/icons/73019/ball_base_chartreuse_map_marker_right_tv_icon#size=32
    });
    L.geoJson(data, {
        pointToLayer: function(feature, latlng) {
            var marker = L.marker(latlng, {
                icon: mapIcon
            });

            marker.bindPopup(
                '<h4 class="name-header">' + feature.properties.victimName + ', ' + feature.properties.victimAge + '</h4><br>' + '<hr class="popup">' + 'Killed on ' + feature.properties.homicideDate + ' near the ' + feature.properties.blockAddress + '.<br>' + '<div class="spacer">Cause of death: ' + feature.properties.mannerOfDeath + '</div><p class="article-link"><a href="' + feature.properties.articleLink + '" target="blank">Read the story</a></p>');
                // '<h4 class="name-header">' + feature.properties.victimName + ', ' + feature.properties.victimAge + '</h4><br>' + '<hr class="popup">' + 'Killed on ' + feature.properties.homicideDate + ' near the ' + feature.properties.blockAddress + ' in the ' + feature.properties.neighborhood + ' neighborhood.<br>' + '<div class="spacer">Cause of death: ' + feature.properties.mannerOfDeath + '</div><p class="article-link"><a href="' + feature.properties.articleLink + '" target="blank">Read the story</a></p>');
            return marker;
        }
    }).addTo(homicides2020);
});

$.getJSON("js/homicides_2019_geojson.js", function(data) {
    var mapIcon = L.divIcon({
        //iconUrl: 'images/circle-red.png',
        className: 'icon-previous-year',
        iconSize: [8, 8]
        //iconAnchor: [6, 3],
        //popupAnchor: [-1, -5]
        // icons from https://www.iconfinder.com/icons/73019/ball_base_chartreuse_map_marker_right_tv_icon#size=32
    });
    L.geoJson(data, {
        pointToLayer: function(feature, latlng) {
            var marker = L.marker(latlng, {
                icon: mapIcon
            });

            marker.bindPopup(
                '<h4 class="name-header">' + feature.properties.victimName + ', ' + feature.properties.victimAge + '</h4><br>' + '<hr class="popup">' + 'Killed on ' + feature.properties.homicideDate + ' near the ' + feature.properties.blockAddress + '.<br>' + '<div class="spacer">Cause of death: ' + feature.properties.mannerOfDeath + '</div><p class="article-link"><a href="' + feature.properties.articleLink + '" target="blank">Read the story</a></p>');
            return marker;
        }
    }).addTo(homicides2019);
});

$.getJSON("js/homicides_2018_geojson.js", function(data) {
    var mapIcon = L.divIcon({
        //iconUrl: 'images/circle-red.png',
        className: 'icon-previous-year',
        iconSize: [8, 8]
        //iconAnchor: [6, 3],
        //popupAnchor: [-1, -5]
        // icons from https://www.iconfinder.com/icons/73019/ball_base_chartreuse_map_marker_right_tv_icon#size=32
    });
    L.geoJson(data, {
        pointToLayer: function(feature, latlng) {
            var marker = L.marker(latlng, {
                icon: mapIcon
            });

            marker.bindPopup(
                '<h4 class="name-header">' + feature.properties.victimName + ', ' + feature.properties.victimAge + '</h4><br>' + '<hr class="popup">' + 'Killed on ' + feature.properties.homicideDate + ' near the ' + feature.properties.blockAddress + '.<br>' + '<div class="spacer">Cause of death: ' + feature.properties.mannerOfDeath + '</div><p class="article-link"><a href="' + feature.properties.articleLink + '" target="blank">Read the story</a></p>');
            return marker;
        }
    }).addTo(homicides2018);
});

$.getJSON("js/homicides_2017_geojson.js", function(data) {
    var mapIcon = L.divIcon({
        //iconUrl: 'images/circle-red.png',
        className: 'icon-previous-year',
        iconSize: [8, 8]
        //iconAnchor: [6, 3],
        //popupAnchor: [-1, -5]
        // icons from https://www.iconfinder.com/icons/73019/ball_base_chartreuse_map_marker_right_tv_icon#size=32
    });
    L.geoJson(data, {
        pointToLayer: function(feature, latlng) {
            var marker = L.marker(latlng, {
                icon: mapIcon
            });

            marker.bindPopup(
                '<h4 class="name-header">' + feature.properties.victim_name + ', ' + feature.properties.victim_age + '</h4><br>' + '<hr class="popup">' + 'Killed on ' + feature.properties.homicide_date + ' near the ' + feature.properties.block_address + '.<br>' + '<div class="spacer">Cause of death: ' + feature.properties.manner_of_death + '</div><p class="article-link"><a href="' + feature.properties.article_link + '" target="blank">Read the story</a></p>');
            return marker;
        }
    }).addTo(homicides2017);
});

$.getJSON("js/homicides_2016_geojson.js", function(data) {
    var mapIcon = L.divIcon({
        //iconUrl: 'images/circle-red.png',
        className: 'icon-previous-year',
        iconSize: [8, 8]
        //iconAnchor: [6, 3],
        //popupAnchor: [-1, -5]
        // icons from https://www.iconfinder.com/icons/73019/ball_base_chartreuse_map_marker_right_tv_icon#size=32
    });
    L.geoJson(data, {
        pointToLayer: function(feature, latlng) {
            var marker = L.marker(latlng, {
                icon: mapIcon
            });
            marker.bindPopup(
                '<h4 class="name-header">' + feature.properties.victim_name + ', ' + feature.properties.victim_age + '</h4><br>' + '<hr class="popup">' + 'Killed on ' + feature.properties.homicide_date + ' near the ' + feature.properties.block_address + '.<br>' + '<div class="spacer">Cause of death: ' + feature.properties.manner_of_death + '</div><p class="article-link"><a href="' + feature.properties.article_link + '" target="blank">Read the story</a></p>');
            return marker;
        }
    }).addTo(homicides2016);
});

$.getJSON("js/homicides_2015_geojson.js", function(data) {
    var mapIcon = L.divIcon({
        //iconUrl: 'images/circle-red.png',
        className: 'icon-previous-year',
        iconSize: [8, 8]
        //iconAnchor: [6, 3],
        //popupAnchor: [-1, -5]
        // icons from https://www.iconfinder.com/icons/73019/ball_base_chartreuse_map_marker_right_tv_icon#size=32
    });
    L.geoJson(data, {
        pointToLayer: function(feature, latlng) {
            var marker = L.marker(latlng, {
                icon: mapIcon
            });
            marker.bindPopup(
                '<h4 class="name-header">' + feature.properties.victim_name + ', ' + feature.properties.victim_age + '</h4><br>' + '<hr class="popup">' + 'Killed on ' + feature.properties.homicide_date + ' near the ' + feature.properties.block_address + '.<br>' + '<div class="spacer">Cause of death: ' + feature.properties.manner_of_death + '</div><p class="article-link"><a href="' + feature.properties.article_link + '" target="blank">Read the story</a></p>');
            return marker;
        }
    }).addTo(homicides2015);
});
// 
L.control.groupedLayers(baseLayers, groupedOverlays).addTo(map);

/* ///// TABLE ///// */

$(document).ready(function() {
    var homicideTable = $('#homicide-table').DataTable({
        ajax: {
            'url': dataFile,
            'dataSrc': ''
        },
        //pageLength: 15,
        scrollY: "500px",
        scrollCollapse: true,
        paging: false,
        //scrollX: true,
        fixedHeader: true,
        responsive: {
            details: {
                type: 'column'
            }
        },
        dom: '<if<t>lp>',
        columnDefs: [{
            className: 'control',
            orderable: false,
            targets: 0
        }],
        order: [
            [1, 'desc']
        ],
        columns: [
            { data: 'button' },
            { data: 'index' },
            {
                orderable: false,
                data: 'homicideDate'
            },
            { data: 'homicideMonth' },
            { data: 'homicideYear' },
            {
                orderable: false,
                data: 'victimName'
            },
            { data: 'victimAge' },
            { data: 'victimGender' },
            { data: 'victimRace' },
            { data: 'mannerOfDeath' },
            {
                orderable: false,
                data: 'blockAddress'
            },
            //{ data: 'neighborhood' },
            { data: 'latitude' },
            { data: 'longitude' },
            {
                orderable: false,
                data: 'articleLink',
                render: function(data, type, row) {
                    return '<a href="' + data + '" target="_blank">Read story</a>';
                }
            }
        ]
    });

    $('.filter-button').on('click', function(e) {
        e.preventDefault();
        //clear global search values
        homicideTable.search('');
        $('.filter').each(function() {
            if (this.value.length) {
                homicideTable.column($(this).data('columnIndex')).search(this.value);
            }
        });
        homicideTable.draw();
    });

    $(".dataTables_filter input").on('keyup change', function() {
        //clear column search values
        homicideTable.columns().search('');
        //clear input values
        $('.filter').val('');
    });
    homicideTable.draw();

    // This would be a single dynamic filter
    // $('#neighborhood-filter').on('change', function(){
    //     homicideTable.search(this.value).draw();
    // });

});