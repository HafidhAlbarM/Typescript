import { Module } from "@nestjs/common";
import { AppController } from "./app.constroller";

@Module({
  controllers: [AppController],
})
export class AppModule {}
