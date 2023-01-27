import React, {useState} from 'react'
import { Container, Nav, LogoImg, MenuChecker, MenuButton, Line, CloseButton } from './styles';

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
        <MenuChecker id="menu" name="menu" type='checkbox'/>
        <MenuButton htmlFor="menu">
            <Line></Line>
            <Line></Line>
            <Line></Line>
        </MenuButton>
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