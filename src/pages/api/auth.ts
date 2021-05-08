import { _supabase } from 'pages/_app';

// @ts-ignore Magic
export default function handler(req, res) {
	_supabase.auth.api.setAuthCookie(req, res);
}
