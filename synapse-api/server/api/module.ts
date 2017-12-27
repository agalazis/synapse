import { ContainerModule, interfaces as inversifyInterfaces } from 'inversify';
import {
	interfaces as inversifyExpressInterfaces,
	TYPE,
} from 'inversify-express-utils';
import { TAGS } from './constants/tags';
import { TYPES } from './constants/types';
import { SMSPromotionController } from './controllers';
import { MessagingService } from './services';
import { PromotionService } from './services';

export const apiModule = new ContainerModule(
	(
		bind: inversifyInterfaces.Bind,
		unbind: inversifyInterfaces.Unbind,
		isBound: inversifyInterfaces.IsBound,
		rebind: inversifyInterfaces.Rebind,
	) => {
		bind<inversifyExpressInterfaces.Controller>(TYPE.Controller)
			.to(SMSPromotionController)
			.whenTargetNamed(TAGS.SMSPromotionController);

		bind<MessagingService>(TYPES.MessagingService).to(MessagingService);
		bind<PromotionService>(TYPES.PromotionService).to(PromotionService);
	},
);
