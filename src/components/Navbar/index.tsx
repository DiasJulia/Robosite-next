import React, {useState} from 'react'
import { Container, Nav, LogoImg } from './styles';

import { Logo } from '@/assets';
import Link from 'next/link';
import {useRouter} from 'next/router';

const Navbar: React.FC = () => {
    const router = useRouter()
    const [page, setPage] = useState(router.pathname);

    console.log(page);
    
    return (
    <Container>
        <LogoImg src={Logo.src} alt="Logo do Robocin" />
        <Nav>
            <ul>
                <li className={page.includes("home")? 'active': ''} onClick={()=>setPage("home")}>
                    <Link href="/">Início</Link>
                </li>
                <li className={page.includes("categorias")? 'active': ''} onClick={()=>setPage("categorias")}>
                    <Link href="/categorias">Categorias</Link>
                </li>
                <li className={page.includes("equipe")? 'active': ''} onClick={()=>setPage("equipe")}>
                    <Link href="/equipe">Equipe</Link>
                </li>
                <li className={page.includes("publicacoes")? 'active': ''} onClick={()=>setPage("publicacoes")}>
                    <Link href="/publicacoes">Publicações</Link>
                </li>
                <li className={page.includes("blog")? 'active': ''} onClick={()=>setPage("blog")} >
                    <Link href="/blog">Blog</Link>
                </li>
            </ul>
        </Nav>
    </Container>
)
}

export default Navbar