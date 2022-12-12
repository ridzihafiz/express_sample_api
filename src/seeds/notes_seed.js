import { faker } from "@faker-js/faker";
import db from "../../prisma/connection";

export const note_seed = () => {
  const fake_title = faker.definitions.title;
  const fake_content = faker.lorem.paragraph();
  const fake_author = faker.internet.userName();

  // console.log({ fake_title, fake_content, fake_author });
  db.notes
    .create({
      data: {
        title: fake_title,
        content: fake_content,
        author: fake_author,
      },
    })
    .then((res) => {
      console.log(`Notes created by author ${fake_author}`);
    })
    .catch((err) => {
      console.error(err.message);
    });
};

for (let i = 0; i <= 100; i++) {
  note_seed();
}
