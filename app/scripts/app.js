 (function() {
     function config($stateProvider, $locationProvider) {
         $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
         });
      $stateProvider
            .state('landing', {
                url: '/',
                controller: 'LandingCtrl as landing',
                templateUrl: '/templates/landing.html'
         })
            .state('album', {
                  url: '/album',
                  controller: 'AlbumCtrl as album',
                  templateUrl: '/templates/album.html'
         })
              .state('collection', {
                  url: '/collection',
                  controller: 'CollectionCtrl as collection',
                  templateUrl: '/templates/collection.html'
         })
             .state('metric', {
                  url: '/metric',
                  controller: 'MetricCtrl as metric',
                  templateUrl: '/templates/metric.html'
        });
     }
      angular
         .module('blocJams', ['ui.router', 'nvd3'])
         .config(config);
 })();