import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { User } from './auth/User.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'raven_password',
      database: 'raven_db',
      entities: [User],
      synchronize: true, // set false in production
    }),
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
