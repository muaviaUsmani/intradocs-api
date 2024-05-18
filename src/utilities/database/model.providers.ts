import { Connection, Schema } from 'mongoose';

//eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

export function modelProvider(
  providerName: string,
  schemaName: string,
  schema: Schema,
) {
  return {
    provide: providerName,
    useFactory: (connection: Connection) =>
      connection.model(schemaName, schema),
    inject: [process.env.DATABASE_CONNECTION_NAME],
  };
}
