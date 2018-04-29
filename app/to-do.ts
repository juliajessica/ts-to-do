class Task { //class always begins with a capital letter
  done: boolean = false;//assigning each property with a specific data type
  // description: string;
  // priority: string;

  constructor(public description: string, public priority: string) { //const: new instance
    // this.done = false;
    // this.description = descriptionParameter;
    // this.priority = priorityParameter;
  }

  markDone(){ //method created to mark task as done
    this.done = true;
  }
}

// class Thing {
//   propertyName: type = defaultValue;
// }

var tasks: Task[] = []; //new variable set it's data type to task[] - this states the specific type of data the array will contain
tasks.push(new Task('Do the dishes.', 'Medium')); //new task object
tasks.push(new Task('Buy chocolate.', 'Low'));
tasks.push(new Task('Do Laundry.', 'High'));

tasks[0].markDone(); //calling the tasks variable that calls the task object at the first iitem of the array calling the markDone method which and changing the done property to true

for(var task of tasks){//task: is a var temp assigned to each entry of the tasks array
  console.log(task);
}



//strings need to be in single quotes
