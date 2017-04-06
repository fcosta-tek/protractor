exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    multiCapabilities: [{
        'browserName': 'firefox',
        specs: [
            'tests/todo-spec.js'
        ]
    }, {
        'browserName': 'chrome',
        specs: [
            'tests/todo-spec2.js'
        ]
    }],
};