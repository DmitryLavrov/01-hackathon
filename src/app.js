import './styles.css';
import { ContextMenu } from './menu';
import { BackgroundModule } from './modules/background.module';
import { BackgroundModuleRed } from '@/modules/backgroundRed.module';
import { CountdownTimerModule } from '@/modules/countdownTimer.module';

const contextMenu = new ContextMenu('#menu');
contextMenu.addModule(new BackgroundModule());
contextMenu.addModule(new BackgroundModuleRed());
contextMenu.addModule(new CountdownTimerModule());
contextMenu.run();
