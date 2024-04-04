export default function () {
  const hooks = useNuxtApp().hooks;

  return {
    emit: hooks.callHook,
    on: hooks.hook,
  };
}
