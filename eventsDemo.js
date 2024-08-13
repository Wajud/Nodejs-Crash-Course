import { EventEmitter } from "events";

const myEmitter = new EventEmitter();

function greetHandler(name) {
  console.log("Hello " + name);
}

function goodByeHandler() {
  console.log("Goodbye ");
}

//register event listeners
myEmitter.on("greet", greetHandler);
myEmitter.on("goodbye", goodByeHandler);

//emit an event
myEmitter.emit("greet", "John");
myEmitter.emit("goodbye");

//Handling error
myEmitter.on("error", (err) => {
  console.log("An error occurred: ", err);
});

//simulate the error
myEmitter.emit("error", new Error("Something went wrong"));
