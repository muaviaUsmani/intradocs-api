import * as mongoose from 'mongoose';

//eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

export const databaseProviders = [
  {
    provide: process.env.DATABASE_CONNECTION_NAME,
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(process.env.DATABASE_URL),
  },
];
