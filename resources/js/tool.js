Nova.booting((Vue, router, store) => {
    router.addRoutes([
        {
            name: 'compile-assets',
            path: '/compile-assets',
            component: require('./components/Tool'),
        },
    ])
})
