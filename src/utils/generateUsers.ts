import { faker } from "@faker-js/faker";
import { type User } from "../types/User";
import { formatDate } from "./dateUtils";
import { UI_CONSTANTS } from "../constants/ui";
import { USER_CONSTANTS } from "../constants/user";

export function generateUsers(count: number): User[] {
  faker.seed(UI_CONSTANTS.FAKER_SEED);

  const users = [];

  for (let i = 0; i < count; i++) {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();

    const now = new Date();
    const twoYearsAgo = new Date();
    twoYearsAgo.setFullYear(now.getFullYear() - USER_CONSTANTS.YEARS_BACK);

    const registeredDate = faker.date.between({
      from: twoYearsAgo,
      to: now,
    });

    users.push({
      id: i + 1,
      firstName,
      lastName,
      email: faker.internet.email({ firstName, lastName }),
      city: faker.location.city(),
      registeredDate: formatDate(registeredDate),
    });
  }

  return users;
}
