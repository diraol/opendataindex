require.config({
    baseUrl: 'SITEURL/static/scripts'.replace('SITEURL', siteUrl),
    paths: {
        app: 'map/main',
        leaflet: 'vendor/leaflet',
        jquery: 'vendor/jquery.min',
        chroma: 'vendor/chroma.min',
        pubsub: 'vendor/pubsub',
        lodash: 'vendor/lodash.compat.min',
        data: 'map/data',
        ui: 'map/ui'
    }
});

requirejs(['app']);