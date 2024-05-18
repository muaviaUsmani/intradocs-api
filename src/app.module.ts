import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { DefaultController } from './modules/default/default.controller';
import { DefaultService } from './modules/default/default.service';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UserModule } from './modules/users/user.module';
import { DirectiveLocation, GraphQLDirective } from 'graphql';
import { upperDirectiveTransformer } from './utilities/directives/uppercase.directive';
import { AuthModule } from './modules/auth/auth.module';
import { DefaultModule } from './modules/default/default.module';
import { DocumentModule } from './modules/documents/document.module';

@Module({
  imports: [
    UserModule,
    AuthModule,
    DefaultModule,
    DocumentModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      transformSchema: (schema) => upperDirectiveTransformer(schema, 'upper'),
      installSubscriptionHandlers: true,
      buildSchemaOptions: {
        dateScalarMode: 'isoDate',
        directives: [
          new GraphQLDirective({
            name: 'upper',
            locations: [DirectiveLocation.FIELD_DEFINITION],
          }),
        ],
      },
    }),
  ],
  controllers: [DefaultController],
  providers: [DefaultService],
})
export class AppModule {}
