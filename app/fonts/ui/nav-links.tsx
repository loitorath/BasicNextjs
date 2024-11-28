/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavLinks(){
    const pathname = usePathname();

    return (
        <nav>
            <div className="space-x-2">
                <Link href="/">Home</Link>
                <Link href="/dashboard">Dashboard</Link>
            </div>
        </nav>
    );
}