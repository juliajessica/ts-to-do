var Task = /** @class */ (function () {
    // description: string;
    // priority: string;
    function Task(description, priority) {
        this.description = description;
        this.priority = priority;
        this.done = false; //assigning each property with a specific data type
        // this.done = false;
        // this.description = descriptionParameter;
        // this.priority = priorityParameter;
    }
    Task.prototype.markDone = function () {
        this.done = true;
    };
    return Task;
}());
// class Thing {
//   propertyName: type = defaultValue;
// }
var tasks = []; //new variable set it's data type to task[] - this states the specific type of data the array will contain
tasks.push(new Task('Do the dishes.', 'Medium')); //new task object
tasks.push(new Task('Buy chocolate.', 'Low'));
tasks.push(new Task('Do Laundry.', 'High'));
tasks[0].markDone(); //calling the tasks variable that calls the task object at the first index calling the markDone method
for (var _i = 0, tasks_1 = tasks; _i < tasks_1.length; _i++) {
    var task = tasks_1[_i];
    console.log(task);
}
//strings need to be in single quotes
