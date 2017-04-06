AngularHomePageModel = require('../pages/angular-home.js');

describe('angularjs homepage todo list', function () {
    it('should add a todo', function () {
        var todoText1 = 'write first protractor test';
        var todoText2 = 'improve first protractor test';
        var newTodosList = [todoText1, todoText2];
        var angularHome = new AngularHomePageModel();

        browser.get(angularHome.url);

        newTodosList.forEach(function (todoText) {
            angularHome.addToTodo(todoText);
        });

        expect(angularHome.todoList.count()).toEqual(4);
        expect(angularHome.todoList.get(2).getText()).toEqual(todoText1);
        expect(angularHome.todoList.get(3).getText()).toEqual(todoText2);

        // You wrote your first test and improved it, cross both ToDo's off the list
        var checkboxIndexList = [2, 3];
        checkboxIndexList.forEach(function (checkboxIndex) {
            angularHome.clickTodoCheckboxByIndex(checkboxIndex);
        });

        console.log("Second spec");
    });
});