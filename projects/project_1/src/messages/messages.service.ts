import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesService {
  listMessages() {
    return [
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
  }
}
