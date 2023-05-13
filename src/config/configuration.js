import { BackgroundModule } from "@/modules/background.module";
import { BackgroundModuleRed } from "@/modules/backgroundRed.module";
import { CountdownTimerModule } from "@/modules/countdownTimer.module";
import { RandomSoundModule } from "@/modules/randomSound.module";
import { ClickAnalyticsModule } from "@/modules/clickAnalytics.module";

export const configuration = {
	selector: "#menu",
	modules: [
		BackgroundModule,
		BackgroundModuleRed,
		CountdownTimerModule,
		RandomSoundModule,
		ClickAnalyticsModule,
	],
};
