export interface EnvironmentModel {
  readonly SERVER_PORT: number;
  readonly SERVER_PROTOCOL: string;
  readonly SERVER_HOST: string;
  readonly AXIOS_BASE_URL: string;
  readonly DB_CONNECTION_STRING: string;
  readonly OMDB_KEY: string;
  readonly REDIS_HOSTNAME: string;
  readonly REDIS_DBNAME: number;
  readonly REDIS_PORT: number;
  readonly REDIS_USERNAME: string;
  readonly REDIS_PASSWORD: string;
  readonly JWT_SECRET: string;
}
