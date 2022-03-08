import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './controllers/system/auth/auth.controller';
import { MenuController } from './controllers/system/menu/menu.controller';
import { ActionsController } from './controllers/system/actions/actions.controller';
import { UserController } from './controllers/system/maintainers/user/user.controller';
import { ProfileController } from './controllers/system/maintainers/profile/profile.controller';
import { ConstantController } from './controllers/system/maintainers/constant/constant.controller';
import { LogEventController } from './controllers/system/maintainers/log-event/log-event.controller';

@Module({
  imports: [],
  controllers: [AppController, AuthController, MenuController, ActionsController, UserController, ProfileController, ConstantController, LogEventController],
  providers: [AppService],
})
export class AppModule {}
