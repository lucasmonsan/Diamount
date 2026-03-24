import { redirect, type Handle } from '@sveltejs/kit';

// MOCK: Altere para 'true' para simular um usuário logado
const isAutenticado = false;

export const handle: Handle = async ({ event, resolve }) => {
	// Define quais rotas são protegidas. Ex: tudo dentro da pasta /cnds
	const rotaProtegida = event.url.pathname.startsWith('/cnds');

	if (rotaProtegida && !isAutenticado) {
		// Se tentar acessar rota protegida sem logar, manda para a raiz (pública)
		throw redirect(303, '/');
	}

	// Se estiver logado ou for rota pública, a requisição segue normalmente
	return await resolve(event);
};