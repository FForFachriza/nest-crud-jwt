import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from '@prisma/client';
import { AuthService } from 'src/auth/auth.service';
import { GetUser } from 'src/auth/decorator';
import { authDto } from 'src/auth/dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() registerUser: authDto) {
    return this.authService.signup(registerUser);
  }

  @Post('login')
  login(@Body() loginUser: authDto) {
    return this.authService.signin(loginUser);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('user-info')
  getUserInfo(@GetUser() user: User) {
    return {
      message: 'Success Get User Info',
      data: user,
    };
  }
}
