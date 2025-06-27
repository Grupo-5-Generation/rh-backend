@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234567',
      database: 'db_rh',
      entities: [Funcionarios],
      synchronize: true,
    }),
    FuncionariosModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}