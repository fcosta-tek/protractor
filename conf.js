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
        ],
        chromeOptions: {
            args: [
                '--start-maximized'
            ]
        }
    }],

    onPrepare: function () {
        browser.manage().timeouts().implicitlyWait(5000);
        browser.driver.getCapabilities().then(function (caps) {
            if (caps.get('browserName') === 'firefox')
                browser.manage().window().maximize();
        });
    }
};