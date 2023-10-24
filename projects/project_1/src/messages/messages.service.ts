import { Injectable } from '@nestjs/common';

const messages = [
  {
    id: 1,
    text: 'First message',
  },
  {
    id: 2,
    text: 'Second message',
  },
  {
    id: 3,
    text: 'Third message',
  },
];

@Injectable()
export class MessagesService {
  listMessages() {
    return messages;
  }

  createMessage(text: string) {
    console.log(`createMessage() text: ${text}`);
    return text;
  }

  updateMessage() {
    return 'Update message';
  }

  deleteMessage() {
    return 'Delete message';
  }

  getMessage(id: string) {
    return messages.find((message) => message.id === +id);
  }
}
