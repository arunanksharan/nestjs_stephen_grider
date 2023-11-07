import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    // Will check if the user is logged in by checking if the session has a userId
    const request = context.switchToHttp().getRequest();
    return request.session.userId;
  }
}
