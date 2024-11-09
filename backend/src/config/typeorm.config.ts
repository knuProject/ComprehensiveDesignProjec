import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmModuleOptions: TypeOrmModuleOptions = {
  type: 'postgres', // postgres db를 명시
  host: 'localhost', // postgres host
  port: 1234, // postgres port
  username: 'postgres', // db username
  password: '1234', // db password
  database: 'gis_db_server', // database name
  entities: [__dirname + '/../**/entities/*.entity.{js,ts}'], // entity class를 기반으로 테이블을 생성할 수 있도록 entity 파일 규칙 정의
  synchronize: true,
  logging: true,
};
