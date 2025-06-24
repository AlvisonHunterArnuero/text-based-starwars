import { NextResponse } from 'next/server';

import type { NextRequest } from 'next/server';

const publicRoutes = ['/', '/api/set-name'];

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Allow public routes and Next.js internal paths
    if (
        publicRoutes.includes(pathname) ||
        pathname.startsWith('/_next') ||
        pathname.startsWith('/static')
    ) {
        return NextResponse.next();
    }

    // Check for userName cookie
    const userName = request.cookies.get('userName')?.value;

    if (!userName) {
        // Redirect to home with original path as query param
        const redirectUrl = new URL('/', request.url);
        redirectUrl.searchParams.set('redirect', pathname);
        return NextResponse.redirect(redirectUrl);
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/((?!_next/static|_next/image|favicon.ico).*)',
    ],
};