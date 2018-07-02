export const ERROR_MESSAGE = 'ERROR_MESSAGE';

export const errorMessage = (code, statusMessage) => ({
  type: ERROR_MESSAGE,
  code,
  statusMessage,
});
