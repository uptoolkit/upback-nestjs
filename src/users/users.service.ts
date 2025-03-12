import { Injectable } from "@nestjs/common";
import { PrismaCrudService } from "nestjs-prisma-crud";
import { PrismaService } from "../prisma.service";
import { compare } from "bcrypt";

@Injectable()
export class UsersService extends PrismaCrudService {
  constructor(private prisma: PrismaService) {
    super({
      model: "User",
      allowedJoins: [],
      defaultJoins: [],
    });
  }

  /**
   * Implement a login function
   *
   * @param username
   * @param password
   */
  async login(username: string, password: string) {
    const user = await this.prisma.user.findFirst({
      where: { email: { equals: username } },
    });

    if (user) {
      if (await compare(password, user.password)) {
        return user;
      }
    }

    return null;
  }
}
