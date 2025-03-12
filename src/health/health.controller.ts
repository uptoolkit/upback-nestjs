import { Controller, Get } from "@nestjs/common";
import {
  HealthCheckService,
  HttpHealthIndicator,
  HealthCheck,
} from "@nestjs/terminus";

@Controller("health")
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private http: HttpHealthIndicator,
  ) {}

  // To adapt to your needs
  @Get()
  @HealthCheck()
  check() {
    return this.health.check([
      () => this.http.pingCheck("up", "https://uptoolkit.com"),
    ]);
  }
}
