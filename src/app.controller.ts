import {
  Controller,
  Request,
  Get,
  Redirect,
  UseGuards,
  Post,
} from "@nestjs/common";
import { AuthService } from "./auth/auth.service";
import { LocalAuthGuard } from "./auth/guards/local-auth.guard";
import { JwtAuthGuard } from "./auth/guards/jwt-auth.guard";

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  @Redirect("/graphql", 301)
  root() {
    return { message: "Go to GraphQL" };
  }

  @UseGuards(LocalAuthGuard)
  @Post("auth/login")
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get("profile")
  getProfile(@Request() req) {
    return req.user;
  }

  @Get("ping")
  async ping() {
    return "pong";
  }
}
