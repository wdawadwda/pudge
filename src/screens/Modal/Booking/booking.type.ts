export type FormField = {
  label: string;
  placeholder: string;
  name:
    | "name"
    | "phone_number"
    | "telegram"
    | "time"
    | "quantity_seats"
    | "tariff";
  type: "file" | "text";
};
