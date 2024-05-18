import { modelProvider } from '../../../utilities/database/model.providers';
import { UserSchema, USER_MODEL } from './user.schema';

export const usersProviders = [modelProvider(USER_MODEL, 'User', UserSchema)];
