export const ERROR_MESSAGE = 'ERROR_MESSAGE';

export const errorMessage = err => ({
  type: ERROR_MESSAGE,
  err,
});

