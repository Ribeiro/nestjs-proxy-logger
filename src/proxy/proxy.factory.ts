/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { PinoLoggerService } from '../logger/logger.service';

export function createLoggingProxy<T extends object>(
  instance: T,
  logger: PinoLoggerService,
): T {
  const className = instance.constructor?.name ?? '<unknown>';

  return new Proxy(instance, {
    get(target, propKey, receiver) {
      const original = Reflect.get(target, propKey, receiver);
      if (typeof original !== 'function') return original;

      return function (...args: any[]) {
        logger.logMethodCall(className, String(propKey), args);

        try {
          const result = original.apply(this, args);

          if (result && typeof result.then === 'function') {
            return result
              .then((res: any) => {
                logger.logMethodResolve(className, String(propKey), res);
                return res;
              })
              .catch((err) => {
                logger.logMethodError(className, String(propKey), err);
                throw err;
              });
          }

          logger.logMethodReturn(className, String(propKey), result);
          return result;
        } catch (err) {
          logger.logMethodError(className, String(propKey), err);
          throw err;
        }
      };
    },
  });
}
