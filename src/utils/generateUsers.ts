import { faker } from "@faker-js/faker";
import { type User } from "../types/User";
import { formatDate } from "./dateUtils";

export function generateUsers(count: number): User[] {
  faker.seed(123);

  const users = [];

  for (let i = 0; i < count; i++) {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();

    const now = new Date();
    const twoYearsAgo = new Date();
    twoYearsAgo.setFullYear(now.getFullYear() - 2);

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
