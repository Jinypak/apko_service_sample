import { NextResponse } from 'next/server'

export function middleware(req: Request) {
    // Redirect to the canonical URL if not on the canonical URL.
    if (req.url !== '/' && !req.url.startsWith('/en')) {
        return NextResponse.redirect('/en' + req.url, { status: 307 })
    }

    
}