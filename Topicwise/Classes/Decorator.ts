// Generating metadata using a class decorator

function addMetadata(target: any) {
  // Add some metadata
  target.__customMetadata = {
    someKey: "someValue"
  };
  // Return target
  return target;
}

@addMetadata
class Person123 {
  private _name: string;
  public constructor(name: string) {
    this._name = name;
  }
  public greet() {
    return this._name;
  }
}
function getMetadataFromClass(target: any) {
  return target.__customMetadata;
}
console.log(getMetadataFromClass(Person123));
// ------------------------------------------------------