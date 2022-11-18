// ----> non-null assertion operator, !, allows you to assert that an expression isn't null or undefined
// when the TypeScript compiler can't infer that automatically
// -------------------------------------------------------------------------------------------------------

type _Point = {
  x: number;
  y: number;
};

let point: _Point;
function initialize() {
  point = { x: 0, y: 0 };
}

initialize();
console.log("After calling Initialized", point!.x, point!.y);
// ===========================================

type Person234 = {
  name: string;
  email?: string | null | undefined;
};

function sendEmail(email: string) {
  console.log("Sent email to ", email);
}

function ensureContact(person: Person234) {
  if (person.email == null)
    throw new Error(`person ${person.name} is not contactable`);
}

function contact(person: Person234) {
  ensureContact(person);
  sendEmail(person.email!);
}
// ===========================================================
type Listnode = { data: number; next?: Listnode };

function addNext(node: Listnode) {
  if (node.next === undefined) {
    node.next = { data: 0 };
  }
}

function setNextValue(node: Listnode, value: number) {
  addNext(node);
  node.next!.data = value;
}
// ===========================================================
