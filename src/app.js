import './styles.css';
import { ContextMenu } from './menu';
import { configuration } from '@/config/configuration';

const contextMenu = new ContextMenu(configuration);
contextMenu.run();
