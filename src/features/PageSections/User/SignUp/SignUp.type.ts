export type FormField = {
  label: string;
  placeholder: string;
  name: "email" | "password" | "passwordConfirmation" | "username";
  type: "email" | "password" | "text";
};
