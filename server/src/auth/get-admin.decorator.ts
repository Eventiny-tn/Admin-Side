import { createParamDecorator } from '@nestjs/common';
import { Admin } from '../entities/admin/admin.entity';

export const GetAdmin = createParamDecorator(
  (data, req): Admin => {
    return req.user;
  },
);
