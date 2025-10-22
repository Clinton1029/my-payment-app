// app/layout.tsx
import './globals.css'
import React from 'react'


export const metadata = {
title: 'Premium Payment UI',
description: 'Next.js TSX dark-mode premium frontend for single-product checkout',
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="en" className="dark">
<body>
{children}
</body>
</html>
)
}