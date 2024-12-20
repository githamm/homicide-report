/* ///// CHARTS ///// */

// https://docs.google.com/spreadsheets/d/1DhNeO04vRj4p40ImE39xAdbKzEtFYb1ZSnNMk9yNcJc/edit#gid=0
$(document).ready(function() {
    var sheetID = '1DhNeO04vRj4p40ImE39xAdbKzEtFYb1ZSnNMk9yNcJc';
    var tabID = '0';
    Papa.parse('https://docs.google.com/spreadsheets/d/' + sheetID + '/export?format=csv&id=' + sheetID + '&gid=' + tabID, {
        download: true,
        header: true,
        skipEmptyLines: true,
        complete: function(results) {
            var sheetData = results.data;
            document.getElementById('updated-time').innerHTML = sheetData[0].updated;
            var monthCount = [];
            var monthTotal = 0;
            var yearCount = [];
            var yearTotal = 0;

            for (var i = 0; i < sheetData.length; i++) {
                var item = sheetData[i];
                if (!monthCount[item.homicideMonth + item.homicideYear]) {
                    monthCount[item.homicideMonth + item.homicideYear] = [];
                }
                monthCount[item.homicideMonth + item.homicideYear].push({ Month: item.homicideMonth + item.homicideYear });
                if (monthTotal < item.homicideMonth) {
                    monthTotal = item.homicideMonth;
                }
            }
            for (var i = 0; i < sheetData.length; i++) {
                var item = sheetData[i];

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
            var dec2020 = nov2020 + monthCount.Dec2020.length;
            var jan2021 = monthCount.Jan2021.length;
            var feb2021 = jan2021 + monthCount.Feb2021.length;
            var mar2021 = feb2021 + monthCount.Mar2021.length;
            var apr2021 = mar2021 + monthCount.Apr2021.length;
            var may2021 = apr2021 + monthCount.May2021.length;
            var jun2021 = may2021 + monthCount.Jun2021.length;
            var jul2021 = jun2021 + monthCount.Jul2021.length;
            var aug2021 = jul2021 + monthCount.Aug2021.length;
            var sep2021 = aug2021 + monthCount.Sep2021.length;
            var oct2021 = sep2021 + monthCount.Oct2021.length;
            var nov2021 = oct2021 + monthCount.Nov2021.length;
            var dec2021 = nov2021 + monthCount.Dec2021.length;
            var jan2022 = monthCount.Jan2022.length;
            var feb2022 = jan2022 + monthCount.Feb2022.length;
            var mar2022 = feb2022 + monthCount.Mar2022.length;
            var apr2022 = mar2022 + monthCount.Apr2022.length;
            var may2022 = apr2022 + monthCount.May2022.length;
            var jun2022 = may2022 + monthCount.Jun2022.length;
            var jul2022 = jun2022 + monthCount.Jul2022.length;
            var aug2022 = jul2022 + monthCount.Aug2022.length;
            var sep2022 = aug2022 + monthCount.Sep2022.length;
            var oct2022 = sep2022 + monthCount.Oct2022.length;
            var nov2022 = oct2022 + monthCount.Nov2022.length;
            var dec2022 = nov2022 + monthCount.Dec2022.length;
            var jan2023 = monthCount.Jan2023.length;
            var feb2023 = jan2023 + monthCount.Feb2023.length;
            var mar2023 = feb2023 + monthCount.Mar2023.length;
            var apr2023 = mar2023 + monthCount.Apr2023.length;
            var may2023 = apr2023 + monthCount.May2023.length;
            var jun2023 = may2023 + monthCount.Jun2023.length;
            var jul2023 = jun2023 + monthCount.Jul2023.length;
            var aug2023 = jul2023 + monthCount.Aug2023.length;
            var sep2023 = aug2023 + monthCount.Sep2023.length;
            var oct2023 = sep2023 + monthCount.Oct2023.length;
            var nov2023 = oct2023 + monthCount.Nov2023.length;
            var dec2023 = nov2023 + monthCount.Dec2023.length;
            var jan2024 = monthCount.Jan2024.length;
            var feb2024 = jan2024 + monthCount.Feb2024.length;
            var mar2024 = feb2024 + monthCount.Mar2024.length;
            var apr2024 = mar2024 + monthCount.Apr2024.length;
            var may2024 = apr2024 + monthCount.May2024.length;
            var jun2024 = may2024 + monthCount.Jun2024.length;
            var jul2024 = jun2024 + monthCount.Jul2024.length;
            var aug2024 = jul2024 + monthCount.Aug2024.length;
            var sep2024 = aug2024 + monthCount.Sep2024.length;
            var oct2024 = sep2024 + monthCount.Oct2024.length;
            // var nov2024 = oct2024 + monthCount.Nov2024.length;
            // var dec2024 = nov2024 + monthCount.Dec2024.length;

            /* -- For count displayed on index.html NOT BEING USED -- */
            // var homePageTotal = yearCount[2018].length;
            // $('#display-totals').html(homePageTotal);

            var homicideChart = c3.generate({
                bindto: '#homicide-chart',
                // size: {
                //     height: 500
                // },
                padding: {
                    left: 55
                },
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
                        ['2020', jan2020, feb2020, mar2020, apr2020, may2020, jun2020, jul2020, aug2020, sep2020, oct2020, nov2020, dec2020],
                        ['2021', jan2021, feb2021, mar2021, apr2021, may2021, jun2021, jul2021, aug2021, sep2021, oct2021, nov2021, dec2021],
                        ['2022', jan2022, feb2022, mar2022, apr2022, may2022, jun2022, jul2022, aug2022, sep2022, oct2022, nov2022, dec2022],
                        ['2023', jan2023, feb2023, mar2023, apr2023, may2023, jun2023, jul2023, aug2023, sep2023, oct2023, nov2023, dec2023],
                        ['2024', jan2024, feb2024, mar2024, apr2024, may2024, jun2024, jul2024, aug2024, sep2024, oct2024/*, nov2024, dec2024*/]
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
                        '2019': '#bbb',
                        '2020': '#bbb',
                        '2021': '#bbb',
                        '2022': '#bbb',
                        '2023': 'rgba(142,16,36,.5)',
                        '2024': 'rgba(142,16,36,1)'
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
                    }
                }
            })

            /* ----- HOMICIDE RATE CHART ----- */

            var homicideRateChart = c3.generate({
                bindto: '#homicide-rate-chart',
                padding: {
                    right: 10
                },
                data: {
                    x: 'x',
                    columns: [
                        ['x', "1980-01-01", "1981-01-01", "1982-01-01", "1983-01-01", "1984-01-01", "1985-01-01", "1986-01-01", "1987-01-01", "1988-01-01", "1989-01-01", "1990-01-01", "1991-01-01", "1992-01-01", "1993-01-01", "1994-01-01", "1995-01-01", "1996-01-01", "1997-01-01", "1998-01-01", "1999-01-01", "2000-01-01", "2001-01-01", "2002-01-01", "2003-01-01", "2004-01-01", "2005-01-01", "2006-01-01", "2007-01-01", "2008-01-01", "2009-01-01", "2010-01-01", "2011-01-01", "2012-01-01", "2013-01-01", "2014-01-01", "2015-01-01", "2016-01-01", "2017-01-01", "2018-01-01", "2019-01-01", "2020-01-01", "2021-01-01", "2022-01-01", "2023-01-01"],
                        ['Homicide count', 99, 100, 68, 78, 82, 72, 91, 79, 69, 55, 67, 89, 93, 73, 85, 82, 69, 72, 55, 65, 33, 47, 51, 65, 91, 61, 55, 50, 49, 38, 37, 44, 39, 42, 31, 50, 56, 56, 67, 63, 95, 96, 88, 85],
                        ['Homicide rate', 20.1, 20.0, 13.5, 15.3, 16.2, 14.3, 18.2, 16.1, 14.4, 11.6, 14.3, 18.6, 18.8, 14.4, 16.6, 15.8, 13.1, 13.4, 10.2, 11.8, 5.9, 8.3, 9.1, 11.6, 16.3, 10.9, 9.7, 8.6, 8.3, 6.2, 6.1, 7.1, 6.1, 6.5, 4.7, 7.3, 8.0, 7.9, 9.4, 8.7, 12.9, 13.5, 12.4, 11.9]
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
                            values: ['1985-01-01', '1990-01-01', '1995-01-01', '2000-01-01', '2005-01-01', '2010-01-01', '2015-01-01', '2020-01-01']

                        },
                        padding: {
                            //right: 13
                        }
                    }
                }
            })

            /* ----- SIDEBAR CHARTS ----- */

            var sexCount = [];
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

            for (let i = 0; i < sheetData.length; i++) {
                let item = sheetData[i];
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

            var ageChart = c3.generate({
                bindto: '#homicide-age',
                size: {
                    height: 275
                },
                padding: {
                    left: 25
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

            /* ----- HOMICIDES BY SEX CHART----- */

            //var data = sheetData.feed.entry;
            var data = data;
            for (var i = 0; i < sheetData.length; i++) {
                var item = sheetData[i];
                // var homicideCount = sheetData.length;
                if (!sexCount[item.victimSex + item.homicideYear]) {
                    sexCount[item.victimSex + item.homicideYear] = [];
                }
                sexCount[item.victimSex + item.homicideYear].push({ Sex: item.victimSex + item.homicideYear });
                if (categoryTotal < item.victimSex) {
                    categoryTotal = item.victimSex;
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
                        ['2024', sexCount.Male2024.length, sexCount.Female2024.length],
                        ['2023', sexCount.Male2023.length, sexCount.Female2023.length],
                        ['2022', sexCount.Male2022.length, sexCount.Female2022.length],
                        ['2021', sexCount.Male2021.length, sexCount.Female2021.length],
                        ['2020', sexCount.Male2020.length, sexCount.Female2020.length],
                        ['2019', sexCount.Male2019.length, sexCount.Female2019.length],
                        ['2018', sexCount.Male2018.length, sexCount.Female2018.length],
                        ['2017', sexCount.Male2017.length, sexCount.Female2017.length],
                        ['2016', sexCount.Male2016.length, sexCount.Female2016.length],
                        ['2015', sexCount.Male2015.length, sexCount.Female2015.length]

                    ],
                    type: 'bar',
                    colors: {
                        '2015': '#bbb',
                        '2016': '#bbb',
                        '2017': '#bbb',
                        '2018': '#bbb',
                        '2019': '#bbb',
                        '2020': '#bbb',
                        '2021': '#bbb',
                        '2022': '#bbb',
                        '2023': 'rgba(142,16,36,.5)',
                        '2024': 'rgba(142,16,36,1)'
                    },
                    onclick: function(d, i) { console.log("onclick", d, i); },
                    onmouseover: function(d, i) { console.log("onmouseover", d, i); },
                    onmouseout: function(d, i) { console.log("onmouseout", d, i); }
                },
                bar: {
                    width: {
                        ratio: .9
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
            })

            /* ///// MAP ///// */

            var neighborhoods = new L.LayerGroup();
            // var census = new L.LayerGroup();
            var homicides2024 = new L.LayerGroup();
            var homicides2023 = new L.LayerGroup();
            var homicides2022 = new L.LayerGroup();
            var homicides2021 = new L.LayerGroup();
            var homicides2020 = new L.LayerGroup();
            var homicides2019 = new L.LayerGroup();
            var homicides2018 = new L.LayerGroup();
            var homicides2017 = new L.LayerGroup();
            var homicides2016 = new L.LayerGroup();
            var homicides2015 = new L.LayerGroup();

            var streetMap = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
                subdomains: 'abcd',
                maxZoom: 20
            });

            var stamenMap = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
                subdomains: 'abcd',
                maxZoom: 20
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
                    "2024": homicides2024,
                    "2023": homicides2023,
                    "2022": homicides2022,
                    "2021": homicides2021,
                    "2020": homicides2020,
                    "2019": homicides2019,
                    "2018": homicides2018,
                    "2017": homicides2017,
                    "2016": homicides2016,
                    "2015": homicides2015
                }
            };

            var currentYearMarker = L.divIcon({
                className: 'icon-current-year',
                iconSize: [10, 10]
            });
            var previousYearMarker = L.divIcon({
                className: 'icon-previous-year',
                iconSize: [8, 8]
            });

            var map = L.map('map', {
                center: [39.72, -104.91],
                zoom: 12,
                minZoom: 11,
                maxZoom: 16,
                scrollWheelZoom: true,
                // touchZoom: true,
                keyboard: false,
                layers: [stamenMap, neighborhoods, homicides2024, homicides2023, homicides2022, homicides2021, homicides2020, homicides2019, homicides2018, homicides2017, homicides2016, homicides2015]
            });

            // Neighborhood layer
            $.getJSON("js/homicide-neighborhoods-geojson.js", function(data) {
                L.geoJson(data, {
                    style: function(feature) {
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
                        )
                    }
                }).addTo(neighborhoods);
            });

            // Builds geojson objects from json for homicide locations and information
            var homicideCoordinates = {
                'type': 'FeatureCollection',
                'features': []
            };

            for (i = 0; i < sheetData.length; i++) {
                var longitude = (sheetData[i].longitude);
                var latitude = (sheetData[i].latitude);
                var coordinates = JSON.parse('[' + longitude + ', ' + latitude + ']');

                homicideCoordinates.features.push({
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Point',
                        'coordinates': coordinates
                    },
                    'properties': {
                        'homicideDate': sheetData[i].homicideDate,
                        'homicideYear': sheetData[i].homicideYear,
                        'victimName': sheetData[i].victimName,
                        'victimAge': sheetData[i].victimAge,
                        'blockAddress': sheetData[i].blockAddress,
                        'mannerOfDeath': sheetData[i].mannerOfDeath,
                        'articleLink': sheetData[i].articleLink
                    }
                });
            }

            L.geoJson(homicideCoordinates, {
                filter: function(feature, latlng) {
                    if (feature.properties.homicideYear == '2024') {
                        return true
                    }
                },
                pointToLayer: function(feature, latlng) {
                    var marker = L.marker(latlng, {
                        icon: currentYearMarker
                    });

                    marker.bindPopup(
                        '<h4 class="name-header">' + feature.properties.victimName + ', ' + feature.properties.victimAge + '</h4><br>' + '<hr class="popup">' + 'Killed on ' + feature.properties.homicideDate + ' near the ' + feature.properties.blockAddress + '.<br>' + '<div class="spacer">Cause of death: ' + feature.properties.mannerOfDeath + '</div><p class="article-link"><a href="' + feature.properties.articleLink + '" target="blank">Read the story</a></p>');
                    return marker;
                }
            }).addTo(homicides2024);

            L.geoJson(homicideCoordinates, {
                filter: function(feature, latlng) {
                    if (feature.properties.homicideYear == '2023') {
                        return true
                    }
                },
                pointToLayer: function(feature, latlng) {
                    var marker = L.marker(latlng, {
                        icon: previousYearMarker
                    });

                    marker.bindPopup(
                        '<h4 class="name-header">' + feature.properties.victimName + ', ' + feature.properties.victimAge + '</h4><br>' + '<hr class="popup">' + 'Killed on ' + feature.properties.homicideDate + ' near the ' + feature.properties.blockAddress + '.<br>' + '<div class="spacer">Cause of death: ' + feature.properties.mannerOfDeath + '</div><p class="article-link"><a href="' + feature.properties.articleLink + '" target="blank">Read the story</a></p>');
                    return marker;
                }
            }).addTo(homicides2023);

            L.geoJson(homicideCoordinates, {
                filter: function(feature, latlng) {
                    if (feature.properties.homicideYear == '2022') {
                        return true
                    }
                },
                pointToLayer: function(feature, latlng) {
                    var marker = L.marker(latlng, {
                        icon: previousYearMarker
                    });

                    marker.bindPopup(
                        '<h4 class="name-header">' + feature.properties.victimName + ', ' + feature.properties.victimAge + '</h4><br>' + '<hr class="popup">' + 'Killed on ' + feature.properties.homicideDate + ' near the ' + feature.properties.blockAddress + '.<br>' + '<div class="spacer">Cause of death: ' + feature.properties.mannerOfDeath + '</div><p class="article-link"><a href="' + feature.properties.articleLink + '" target="blank">Read the story</a></p>');
                    return marker;
                }
            }).addTo(homicides2022);

            L.geoJson(homicideCoordinates, {
                filter: function(feature, latlng) {
                    if (feature.properties.homicideYear == '2021') {
                        return true
                    }
                },
                pointToLayer: function(feature, latlng) {
                    var marker = L.marker(latlng, {
                        icon: previousYearMarker
                    });

                    marker.bindPopup(
                        '<h4 class="name-header">' + feature.properties.victimName + ', ' + feature.properties.victimAge + '</h4><br>' + '<hr class="popup">' + 'Killed on ' + feature.properties.homicideDate + ' near the ' + feature.properties.blockAddress + '.<br>' + '<div class="spacer">Cause of death: ' + feature.properties.mannerOfDeath + '</div><p class="article-link"><a href="' + feature.properties.articleLink + '" target="blank">Read the story</a></p>');
                    return marker;
                }
            }).addTo(homicides2021);

            L.geoJson(homicideCoordinates, {
                filter: function(feature, latlng) {
                    if (feature.properties.homicideYear == '2020') {
                        return true
                    }
                },
                pointToLayer: function(feature, latlng) {
                    var marker = L.marker(latlng, {
                        icon: previousYearMarker
                    });

                    marker.bindPopup(
                        '<h4 class="name-header">' + feature.properties.victimName + ', ' + feature.properties.victimAge + '</h4><br>' + '<hr class="popup">' + 'Killed on ' + feature.properties.homicideDate + ' near the ' + feature.properties.blockAddress + '.<br>' + '<div class="spacer">Cause of death: ' + feature.properties.mannerOfDeath + '</div><p class="article-link"><a href="' + feature.properties.articleLink + '" target="blank">Read the story</a></p>');
                    return marker;
                }
            }).addTo(homicides2020);

            L.geoJson(homicideCoordinates, {
                filter: function(feature, latlng) {
                    if (feature.properties.homicideYear == '2019') {
                        return true
                    }
                },
                pointToLayer: function(feature, latlng) {
                    var marker = L.marker(latlng, {
                        icon: previousYearMarker
                    });

                    marker.bindPopup(
                        '<h4 class="name-header">' + feature.properties.victimName + ', ' + feature.properties.victimAge + '</h4><br>' + '<hr class="popup">' + 'Killed on ' + feature.properties.homicideDate + ' near the ' + feature.properties.blockAddress + '.<br>' + '<div class="spacer">Cause of death: ' + feature.properties.mannerOfDeath + '</div><p class="article-link"><a href="' + feature.properties.articleLink + '" target="blank">Read the story</a></p>');
                    return marker;
                }
            }).addTo(homicides2019);

            L.geoJson(homicideCoordinates, {
                filter: function(feature, latlng) {
                    if (feature.properties.homicideYear == '2018') {
                        return true
                    }
                },
                pointToLayer: function(feature, latlng) {
                    var marker = L.marker(latlng, {
                        icon: previousYearMarker
                    });

                    marker.bindPopup(
                        '<h4 class="name-header">' + feature.properties.victimName + ', ' + feature.properties.victimAge + '</h4><br>' + '<hr class="popup">' + 'Killed on ' + feature.properties.homicideDate + ' near the ' + feature.properties.blockAddress + '.<br>' + '<div class="spacer">Cause of death: ' + feature.properties.mannerOfDeath + '</div><p class="article-link"><a href="' + feature.properties.articleLink + '" target="blank">Read the story</a></p>');
                    return marker;
                }
            }).addTo(homicides2018);

            L.geoJson(homicideCoordinates, {
                filter: function(feature, latlng) {
                    if (feature.properties.homicideYear == '2017') {
                        return true
                    }
                },
                pointToLayer: function(feature, latlng) {
                    var marker = L.marker(latlng, {
                        icon: previousYearMarker
                    });

                    marker.bindPopup(
                        '<h4 class="name-header">' + feature.properties.victimName + ', ' + feature.properties.victimAge + '</h4><br>' + '<hr class="popup">' + 'Killed on ' + feature.properties.homicideDate + ' near the ' + feature.properties.blockAddress + '.<br>' + '<div class="spacer">Cause of death: ' + feature.properties.mannerOfDeath + '</div><p class="article-link"><a href="' + feature.properties.articleLink + '" target="blank">Read the story</a></p>');
                    return marker;
                }
            }).addTo(homicides2017);

            L.geoJson(homicideCoordinates, {
                filter: function(feature, latlng) {
                    if (feature.properties.homicideYear == '2016') {
                        return true
                    }
                },
                pointToLayer: function(feature, latlng) {
                    var marker = L.marker(latlng, {
                        icon: previousYearMarker
                    });
                    marker.bindPopup(
                        '<h4 class="name-header">' + feature.properties.victimName + ', ' + feature.properties.victimAge + '</h4><br>' + '<hr class="popup">' + 'Killed on ' + feature.properties.homicideDate + ' near the ' + feature.properties.blockAddress + '.<br>' + '<div class="spacer">Cause of death: ' + feature.properties.mannerOfDeath + '</div><p class="article-link"><a href="' + feature.properties.articleLink + '" target="blank">Read the story</a></p>');
                    return marker;
                }
            }).addTo(homicides2016);

            L.geoJson(homicideCoordinates, {
                filter: function(feature, latlng) {
                    if (feature.properties.homicideYear == '2015') {
                        return true
                    }
                },
                pointToLayer: function(feature, latlng) {
                    var marker = L.marker(latlng, {
                        icon: previousYearMarker
                    });
                    marker.bindPopup(
                        '<h4 class="name-header">' + feature.properties.victimName + ', ' + feature.properties.victimAge + '</h4><br>' + '<hr class="popup">' + 'Killed on ' + feature.properties.homicideDate + ' near the ' + feature.properties.blockAddress + '.<br>' + '<div class="spacer">Cause of death: ' + feature.properties.mannerOfDeath + '</div><p class="article-link"><a href="' + feature.properties.articleLink + '" target="blank">Read the story</a></p>');
                    return marker;
                }
            }).addTo(homicides2015);
            L.control.groupedLayers(baseLayers, groupedOverlays).addTo(map);

            /* ///// TABLE ///// */

            var homicideTable = $('#homicide-table').DataTable({
                data: sheetData,
                //pageLength: 15,
                scrollY: "500px",
                scrollCollapse: true,
                paging: false,
                scrollX: true,
                fixedHeader: true,
                //responsive: true,
                dom: '<if<t>lp>',
                order: [
                    [0, 'desc']
                ],
                columns: [{
                        data: 'homicideDate',
                        type: 'date'
                    },
                    { data: 'homicideMonth', visible: false },
                    { data: 'homicideYear', visible: false },
                    {
                        orderable: false,
                        data: 'victimName'
                    },
                    { data: 'victimAge' },
                    { data: 'victimSex' },
                    { data: 'victimRace', visible: false },
                    { data: 'mannerOfDeath' },
                    {
                        orderable: false,
                        data: 'blockAddress'
                    },
                    { data: 'neighborhood', visible: false },
                    { data: 'latitude', visible: false },
                    { data: 'longitude', visible: false },
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
        } // Closes PapaParse
    })
})