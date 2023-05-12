import './styles.css';
import { ContextMenu } from './menu';
import { BackgroundModule } from './modules/background.module';
import { BackgroundModuleRed } from '@/modules/backgroundRed.module';

const contextMenu = new ContextMenu('#menu');
contextMenu.addModule(new BackgroundModule());
contextMenu.addModule(new BackgroundModuleRed());
contextMenu.run();
