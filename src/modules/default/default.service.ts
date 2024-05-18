import { Injectable } from '@nestjs/common';

@Injectable()
export class DefaultService {
  getIntradocs(): string {
    return 'Hello Intradocs!';
  }
}
