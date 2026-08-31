export const observeAllSettled = async () =>
  Promise.allSettled([Promise.resolve('ready'), Promise.reject(new Error('failed'))]);
