import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {
  supplyPower(watts: number): string {
    console.log(`PowerService::supplyPower(): ${watts} watts}`);
    return 'Power Supplied';
  }
}
