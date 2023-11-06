import { logError, logInfo, defaultMessage } from './logger.js';

logInfo(`${defaultMessage} printed in blue`);
logError('some error message printed in red');
