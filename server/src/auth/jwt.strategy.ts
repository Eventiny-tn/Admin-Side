import { JwtPayload } from './jwt-payload.interface';
import { Admin } from '../entities/admin/admin.entity';
import { jwtConstants } from './constants';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Repository } from 'typeorm';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(Repository)
    private repo: any,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET || jwtConstants.secret,
    });
  }

  //   async validate(payload: JwtPayload): Promise<Admin> {
  //     const { username } = payload;
  //     const user = await this.repo.findOne({ id: 1 });

  //     if (!user) {
  //       throw new UnauthorizedException();
  //     }
  //     return user;
  //   }
}
