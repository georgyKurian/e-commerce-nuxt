export default defineNuxtPlugin(() => {
  const $api = $fetch.create({
    baseURL: useRuntimeConfig().public.qualifyUrl,
    credentials: 'include',
    onRequest({ request, options, error }) {
      const token = useCookie('XSRF-TOKEN');

      // Add Authorization header
      options.headers = options.headers || ({} as Record<string, string>);
      options.headers['Accept'] = 'application/json';
      options.headers[`X-Requested-With`] = 'XMLHttpRequest';
      if (token.value) {
        options.headers[`X-XSRF-TOKEN`] = token.value;
      }
    },
    onResponseError({ response }) {
      if (response.status === 401) {
        return navigateTo('/login');
      }
    },
  });
  // Expose to useNuxtApp().$qualifyApi
  return {
    provide: {
      qualifyApi: $api,
    },
  };
});

// export default defineNuxtPlugin({
//   setup() {
//     const api = $fetch.create({
//       baseURL: useRuntimeConfig().public.qualifyUrl,
//       credentials: 'include',
//       ...options,
//       headers: {
//         ...headers,
//         ...options?.headers,
//       },
//       $fetch: useNuxtApp().$sanctumApiFetch,
//     });

//     return {
//       provide: { api },
//     };
//   },
// });
