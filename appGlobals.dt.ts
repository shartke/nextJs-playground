// define our parent property accessible via globalThis. Also apply the TypeScript type.
var app: globalAppVariables;

// define the child properties and their types. 
type globalAppVariables = {
  messageLimit: number;
  // more can go here. 
};

// set the values.
globalThis.app = {
  messageLimit: 10,
  // more can go here.
};


// Freeze so these can only be defined in this file.
Object.freeze(globalThis.app);