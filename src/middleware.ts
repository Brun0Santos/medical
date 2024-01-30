import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export default function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  const signUrl = new URL('/medical/sign-in', request.url);

  if (!token) {
    if (request.nextUrl.pathname === '/medical/sign-in') {
      return NextResponse.next();
    }
    console.log('rota n autorizada');
    return NextResponse.redirect(signUrl);
  }
}
export const config = {
  matcher: [
    '/',
    '/medical/especialidades/:path*',
    '/medical/frequencia/:path*',
    '/medical/medicos/:path*',
    '/medical/perfil/:path*',
    '/medical/registros/:path*',
    '/medical/dashboard/:path*',
    '/medical/pacientes/:path*',
  ],
};
