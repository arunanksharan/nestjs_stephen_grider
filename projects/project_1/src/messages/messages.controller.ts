import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { MessagesService } from './messages.service';

export class CreateMessageBody {
  text: string;
}

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Get('list')
  listMessages() {
    return this.messagesService.listMessages();
  }
  @Post('create')
  createMessage(@Body() { text }: CreateMessageBody): string {
    return this.messagesService.createMessage(text);
  }
  @Get(':id')
  getMessage(@Param('id') id: string) {
    return this.messagesService.getMessage(id);
  }
}
