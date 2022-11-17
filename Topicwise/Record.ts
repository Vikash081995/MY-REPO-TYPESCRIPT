type Persons = Record<string, { name: string; role: string }>;

const persons1: Persons = {};
persons1["000"] = { name: "john", role: "admin" };
persons1["111"] = { name: "jane", role: "owner" };
// ===================================================================

type Roles = "admin" | "owner";

let peopleWithRoles: Record<Roles, string[]> = {
  owner: ["jane", "june"],
  admin: ["john"]
};
