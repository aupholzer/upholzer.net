export async function onRequest({ env }) {
  return new Response(env.ENV_NAME);

}
