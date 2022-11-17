class Student {
  private _name: string | undefined;

  display() {
    console.log(this._name);
  }
  get name(): string {
    return this._name;
  }

  set name(name: string): void {
    this._name = name;
  }
}

var student = new Student();
student.name = "john";

console.log(student.name);
