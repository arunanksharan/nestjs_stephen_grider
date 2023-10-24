import { readFile, writeFile } from 'fs/promises';

export class MessagesRepository {
  async findOne(id: string) {
    const contents = await readFile('./data/messages.json', 'utf8');
    const messages = JSON.parse(contents);
    console.log(messages);
    return messages[id];
  }
  async findAll() {
    const contents = await readFile('./data/messages.json', 'utf8');
    const messages = JSON.parse(contents);
    console.log(messages);
    return messages;
  }

  async create(content: string, userId: number) {
    const contents = await readFile('./data/messages.json', 'utf8');
    const messages = JSON.parse(contents);

    const id = Math.floor(Math.random() * 999);
    messages[id] = { id, content, userId };
    await writeFile('./data/messages.json', JSON.stringify(messages));
    return messages[id];
  }
  //   async update(id: string, attrs) {}
  //   async delete(id: string) {}
}
