/**
 * Created by fcosta on 3/31/2017.
 */

var AngularHomePageModel = function() {
    this.url = 'https://angularjs.org';

    this.todoTextInput = element(by.model('todoList.todoText'));
    this.addTodoButton = element(by.css('[value="add"]'));
    this.todoList = element.all(by.repeater('todo in todoList.todos'));

    this.addToTodo = function(todoText) {
        this.todoTextInput.sendKeys(todoText);
        this.addTodoButton.click();
    };

    this.clickTodoCheckboxByIndex = function(index) {
        var toDo = this.todoList.get(index).element(by.css('input'));
        browser.driver.wait(protractor.ExpectedConditions.presenceOf(toDo), 10000);
        toDo.click();
        var completedAmount = element.all(by.css('.done-true'));
        expect(completedAmount.count()).toEqual(index);
    };
};

module.exports = AngularHomePageModel;