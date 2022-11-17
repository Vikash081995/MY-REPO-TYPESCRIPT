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