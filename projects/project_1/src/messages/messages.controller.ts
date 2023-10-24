import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dtos/create-message.dto';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Get('list')
  listMessages() {
    return this.messagesService.listMessages();
  }
  @Post('create')
  createMessage(
    @Body() { content, userId }: CreateMessageDto,
  ): CreateMessageDto {
    return this.messagesService.createMessage(content, userId);
  }
  @Get(':id')
  getMessage(@Param('id') id: string) {
    return this.messagesService.getMessage(id);
  }
}
