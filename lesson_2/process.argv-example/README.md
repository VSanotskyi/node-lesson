1. const actionIndex = process.argv.indexOf("--action");
2. if (actionIndex !== -1) {
   const action = process.argv[actionIndex + 1];
   invokeAction({action});
   }