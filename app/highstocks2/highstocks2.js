/**
 * Created by Phillip on 15/10/2014.
 */
//'use strict';

angular.module('myApp.highstocks2', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/highstocks2', {
            templateUrl: 'highstocks2/highstocks2.html',
            controller: 'Highstocks2Ctrl'
        });
    }])

    .controller('Highstocks2Ctrl', ['$scope', function($scope) {

        $scope.message = "Highstocks with Jquery";
        
        $('#chartT').keyup(function() {
            var chart = $('#chart1').highcharts();
            
            chart.title.textSetter(this.value);
        });
        
        $.getJSON('http://www.highcharts.com/samples/data/jsonp.php?filename=aapl-c.json&callback=?', function (data)        {
                     
            $scope.addPoints = function () {
                //var seriesArray = $scope.chartConfig.series
                //var rndIdx = Math.floor(Math.random() * seriesArray.length);
                //seriesArray[rndIdx].data = seriesArray[rndIdx].data.concat([1, 10, 20])
            };

            $scope.addSeries = function () {
                var rnd = []
                var chart = $('#chart1').highcharts();
                
                for (var i = 0; i < 1000; i++) {
                    rnd.push([1149033600000 + (i * 203600000), Math.floor(Math.random()  * 50) + (18*i)])
                }
                chart.addSeries({
                    data: rnd
                })
                
                chart.redraw();
            };

            $scope.removeRandomSeries = function () {
                var chart = $('#chart1').highcharts();
                
                var seriesArray = chart.series
                var rndIdx = Math.floor(Math.random() * seriesArray.length);
                chart.series[rndIdx].remove();
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
                //this.chartConfig.loading = !this.chartConfig.loading
            };

            new Highcharts.StockChart({
                    chart: {
                        renderTo: 'chart1'                        
                    },
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
                        data: data
                    }],
                    title: {
                        text: 'AAPL Stock Price'
                    },
                    useHighStocks: true,
                    loading: false
                });      
            
            
        });
    }]);
    

        
        


        