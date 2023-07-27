import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './infrastructure/controllers/auth/auth.module';
import { EmploeeModule } from './infrastructure/controllers/emploee/emploee.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env`
    }),
    AuthModule,
    EmploeeModule
  ],
})
export class AppModule { };
