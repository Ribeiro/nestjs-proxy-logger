/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// src/logger/logger.service.ts
import { LoggerService } from '@nestjs/common';
import pino, { Logger } from 'pino';

export class PinoLoggerService implements LoggerService {
  private readonly logger: Logger;

  constructor() {
    this.logger = pino({
      transport:
        process.env.NODE_ENV !== 'production'
          ? {
              target: 'pino-pretty',
              options: { colorize: true },
            }
          : undefined,
    });
  }

  log(message: any, ...optionalParams: any[]) {
    this.logger.info(message, ...optionalParams);
  }

  error(message: any, ...optionalParams: any[]) {
    this.logger.error(message, ...optionalParams);
  }

  warn(message: any, ...optionalParams: any[]) {
    this.logger.warn(message, ...optionalParams);
  }

  debug?(message: any, ...optionalParams: any[]) {
    this.logger.debug(message, ...optionalParams);
  }

  verbose?(message: any, ...optionalParams: any[]) {
    this.logger.trace(message, ...optionalParams);
  }

  /**
   * Loga chamadas de métodos com contexto estruturado.
   * @param className Nome da classe
   * @param method Nome do método
   * @param args Argumentos passados
   */
  logMethodCall(className: string, method: string, args: any[]) {
    this.logger.info({ args }, `[${className}.${method}] called`);
  }

  logMethodReturn(className: string, method: string, result: any) {
    this.logger.info({ result }, `[${className}.${method}] returned`);
  }

  logMethodResolve(className: string, method: string, result: any) {
    this.logger.info({ result }, `[${className}.${method}] resolved`);
  }

  logMethodError(className: string, method: string, error: any) {
    this.logger.error({ error }, `[${className}.${method}] error`);
  }
}
