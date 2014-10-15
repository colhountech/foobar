/**
 * Created by Micheal on 14/10/2014.
 */
//'use strict';

angular.module('myApp.highstocks', ['highcharts-ng'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/highstocks', {
            templateUrl: 'highstocks/highstocks.html',
            controller: 'HighstocksCtrl'
        });
    }])

    .controller('HighstocksCtrl', ['$scope', function($scope) {

        $scope.message = "Highstocks with AngularJS";
        
        $scope.addPoints = function () {
            var seriesArray = $scope.chartConfig.series
            var rndIdx = Math.floor(Math.random() * seriesArray.length);
            seriesArray[rndIdx].data = seriesArray[rndIdx].data.concat([1, 10, 20])
        };

        $scope.addSeries = function () {
            var rnd = []
            for (var i = 0; i < 10; i++) {
                rnd.push(Math.floor(Math.random() * 20) + 1)
            }
            $scope.chartConfig.series.push({
                data: rnd
            })
        };

        $scope.removeRandomSeries = function () {
            var seriesArray = $scope.chartConfig.series
            var rndIdx = Math.floor(Math.random() * seriesArray.length);
            seriesArray.splice(rndIdx, 1)
        };

        $scope.swapChartType = function () {
            if (this.chartConfig.options.chart.type === 'line') {
                this.chartConfig.options.chart.type = 'bar'
            } else {
                this.chartConfig.options.chart.type = 'line'
                this.chartConfig.options.chart.zoomType = 'x'
            }
        };

        $scope.toggleLoading = function () {
            this.chartConfig.loading = !this.chartConfig.loading
        };

        $scope.chartConfig = {
                options: {
                    chart: {
                        type: 'line'
                    },
                    rangeSelector : {
                    selected : 1
                    }
                },
                series: [{
                    name: 'AAPL',
                    tooltip: {
                        valueDecimals: 2
                    },
                    data: [
                        [1192406400000,23.85],
                        [1192492800000,24.23],
                        [1192579200000,24.68],
                        [1192665600000,24.79],
                        [1192752000000,24.35],
                        [1193011200000,24.91],
                        [1193097600000,26.59],
                        [1193184000000,26.56],
                        [1193270400000,26.11],
                        [1193356800000,26.39],
                        [1193616000000,26.44],
                        [1193702400000,26.71],
                        [1193788800000,27.14]
                    ]
                }],
                title: {
                    text: 'AAPL Stock Price'
                },
                useHighStocks: true,
                loading: false
            };      

        $.getJSON('http://www.highcharts.com/samples/data/jsonp.php?filename=aapl-c.json&callback=?', function (data)        {
            
            
        });

    }]);