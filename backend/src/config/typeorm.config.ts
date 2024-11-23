import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmModuleOptions: TypeOrmModuleOptions = {
  type: 'postgres', // postgres db를 명시
  host: '155.230.34.116', // postgres host
  port: 39996, // postgres port
  username: 'postgres', // db username
  password: 'postgres', // db password
  database: 'postgis_db', // database name
  entities: [__dirname + '/../**/entities/*.entity.{js,ts}'], // entity class를 기반으로 테이블을 생성할 수 있도록 entity 파일 규칙 정의
  synchronize: true,
  logging: true,
};
