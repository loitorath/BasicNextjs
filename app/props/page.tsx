'use client';

// use interface for force to Header Function must use 'string' variable
interface HeaderProps{
    title: string;
}

export default function Header({title}:HeaderProps){
    return (
        <h1>{title}</h1>
    )
}