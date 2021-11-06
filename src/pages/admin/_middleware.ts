import { NextRequest, NextResponse } from 'next/server';
import { getSession } from 'next-auth/client';

export async function middleware(req: NextRequest) {
	// @ts-expect-error Heh
	const session = await getSession({ req });
	const currentPath = `${process.env.BASE_URL}${req.nextUrl.href}`;

	if (session === null) {
		return NextResponse.redirect(`/auth/signin?callbackUrl=${currentPath}`);
	}

	return NextResponse.next();
}
