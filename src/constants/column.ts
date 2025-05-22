export const COLUMN_IDS = {
  id: "id",
  firstName: "firstName",
  lastName: "lastName",
  email: "email",
  city: "city",
  registeredDate: "registeredDate",
  fullName: "fullName",
  dsr: "dsr",
} as const;

export const INITIAL_COLUMN_ORDER: string[] = [
  COLUMN_IDS.id,
  COLUMN_IDS.firstName,
  COLUMN_IDS.lastName,
  COLUMN_IDS.email,
  COLUMN_IDS.city,
  COLUMN_IDS.registeredDate,
  COLUMN_IDS.fullName,
  COLUMN_IDS.dsr,
];
