import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';

@Injectable()
export class MessagesService {
  constructor(public messagesRepo: MessagesRepository) {}
  async findAll() {
    return this.messagesRepo.findAll();
  }

  async findOne(id: string) {
    // return messages.find((message) => message.id === +id);
    return this.messagesRepo.findOne(id);
  }

  create(content: string, userId: number) {
    console.log(`createMessage() text: ${content} :: userId: ${userId}`);
    return this.messagesRepo.create(content, userId);
    // return { content, userId };
  }

  update() {
    return 'Update message';
  }

  delete() {
    return 'Delete message';
  }
}
