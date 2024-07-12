export default defineNuxtPlugin(() => {
  const $api = $fetch.create({
    baseURL: useRuntimeConfig().public.qualifyUrl,
    credentials: 'include',
    onRequest({ request, options, error }) {
      const csrfToken = useCookie('XSRF-TOKEN');
      options.headers = options.headers || ({} as HeadersInit);
      (options.headers as Record<string, string>)['Accept'] = 'application/json';
      (options.headers as Record<string, string>)['Content-Type'] = 'application/json';
      if (
        csrfToken &&
        csrfToken.value != null &&
        options.method &&
        !['HEAD', 'GET', 'OPTIONS'].includes(options.method)
      ) {
        (options.headers as Record<string, string>)['X-XSRF-TOKEN'] = csrfToken.value;
      }
    },
    onResponseError({ response }) {
      if (response.status === 401) {
        navigateTo('/login');
      }
    },
  });
  return {
    provide: {
      qualifyApi: $api,
    },
  };
});
