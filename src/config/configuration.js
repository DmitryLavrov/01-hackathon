import { BackgroundModule } from '@/modules/background.module';
import { BackgroundModuleRed } from '@/modules/backgroundRed.module';
import { CountdownTimerModule } from '@/modules/countdownTimer.module';

export const configuration = {
	selector: '#menu',
	modules: [BackgroundModule, BackgroundModuleRed, CountdownTimerModule],
};
