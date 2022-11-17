// interfaces===============

export interface InputProps1 {
  type: "text" | "email";
  value: string;
  onChange: (newValue: string) => void;
}

//types =========================
type InputValue = string;
type InputChange = (newValue: InputValue) => void;
type InputType = "text" | "email";

export type InputProps = {
  type: InputType;
  value: InputValue;
  onChange: InputChange;
};
