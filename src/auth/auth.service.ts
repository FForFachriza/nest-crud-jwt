import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import * as argon from 'argon2';
import { authDto } from 'src/auth/dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}

  async signup(dto: authDto) {
    const hashedPassword = await argon.hash(dto.password);

    try {
      const data = await this.prisma.user.create({
        data: {
          name: dto.name,
          email: dto.email,
          password: hashedPassword,
        },
      });

      delete data.password;

      return {
        message: 'Success Signup',
        data: data,
      };
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async signin(dto: authDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });

    if (!user) {
      throw new HttpException('User Not Found', 403);
    }

    const isPasswordValid = await argon.verify(user.password, dto.password);

    if (!isPasswordValid) {
      throw new HttpException('Invalid Password', 403);
    }

    return {
      message: 'Success Signin',
      user_token: await this.signToken(user.uuid, user.email),
    };
  }

  async signToken(userId: string, email: string) {
    const payload = {
      sub: userId,
      email: email,
    };

    return this.jwt.signAsync(payload, {
      expiresIn: '1d',
      secret: this.config.get('JWT_SECRET'),
    });
  }
}
