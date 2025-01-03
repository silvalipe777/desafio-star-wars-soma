import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Rocket, Users, Globe, Film, Car, Skull, Menu, X, Home } from 'lucide-react';
import { NavigationItem } from '../types/Navigation.ts';

const HeaderContainer = styled.header`
  background: #1a1a1a;
  padding: 1rem;
  color: #ffd700;
  position: relative;
  z-index: 10;
`;

const Nav = styled.nav<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: #1a1a1a;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
  transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-20px)')};
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  z-index: 100;

  @media (min-width: 768px) {
    max-width: 1000px;
    margin: 0 auto;
    position: static;
    flex-direction: row;
    justify-content: space-around;
    gap: 0;
    padding: 0;
    transform: none;
    opacity: 1;
    visibility: visible;
  }
`;

const NavItem = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  padding: 0.5rem;
  transition: color 0.3s;
  text-decoration: none;
  color: inherit;

  &:hover {
    color: #fff;
  }
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  display: flex;
  align-items: center;
  z-index: 101; 

  @media (min-width: 768px) {
    display: none;
  }
`;

const navigationItems: NavigationItem[] = [
  { path: '/', label: 'Home', Icon: Home },
  { path: '/people', label: 'People', Icon: Users },
  { path: '/starships', label: 'Starships', Icon: Rocket },
  { path: '/planets', label: 'Planets', Icon: Globe },
  { path: '/films', label: 'Films', Icon: Film },
  { path: '/vehicles', label: 'Vehicles', Icon: Car },
  { path: '/species', label: 'Species', Icon: Skull },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <HeaderContainer>
      <MenuButton onClick={toggleMenu}>
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </MenuButton>
      <Nav ref={menuRef} isOpen={isMenuOpen}>
        {navigationItems.map(({ path, label, Icon }) => (
          <NavItem key={path} to={path} onClick={closeMenu}>
            <Icon size={20} />
            <span>{label}</span>
          </NavItem>
        ))}
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
