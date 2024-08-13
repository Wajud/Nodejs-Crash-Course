//argv property
// console.log(process.argv);

//process.env
// console.log(process.env);
// console.log(process.env.ChocolateyInstall);

//process.cwd() --- returns current working directory
//process.title --- returns a string representing the title of the node process
//process.memoryUsage() -- returns an object containing the memory usage
// process.uptime() --- returns the time from when we run the command in the terminal to when the script executes
// process.exit() -- to exit a process
//process.on("exit", (code)=> console.log(`Process exiting with code: ${code}`))

process.on("exit", (code) => {
  console.log(`Process exiting with code:${code}`);
});
