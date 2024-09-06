"use client";
import {  Dropdown,  DropdownTrigger,  DropdownMenu,  DropdownSection,  DropdownItem} from "@nextui-org/dropdown";
import React,{useState} from 'react'
import logo from '@/public/logo.png'
import Image from 'next/image'
import styles from '../styles/navbar.module.css'
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
export default function Navbarapp() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [selectedKeys, setSelectedKeys] = React.useState(new Set(["text"]));

    const selectedValue = React.useMemo(
      () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
      [selectedKeys]
    );
    const menuItems = [
      "Profile",
      "Dashboard",
      "Activity",
      "Analytics",
      "System",
      "Deployments",
      "My Settings",
      "Team Settings",
      "Help & Feedback",
      "Log Out",
    ];

  return (
    <>
    {/* <div className={styles.navbar}>
        <div className={styles.navbar_contant}>
        <Link href="/" className={styles.logo}>
          <Image src={logo} alt="logo" className='logo_image' />
          <div className='logo_context'>Devlup Labs</div>
        </Link>
            <div className={styles.navbar_apps}>
                <Link>HOME</Link>
                <Link>PROJECTS</Link>
                <Link>TIMELINE</Link>
                <Link>WOC</Link>
                <Link>TEAM</Link>
            </div>
        </div>
    </div> */}
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      // className='w-60 justify-center flex pt-10'
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
        <Image src={logo} alt=''/>
          <p className="font-bold text-inherit">Devlup Labs</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
        <Image src={logo} alt=''/>
          <p className="font-bold text-inherit">Devlup Labs</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end" className='gap-7'>
      <NavbarItem className="hidden lg:flex">
          <Link href="/">HOME</Link>
        </NavbarItem><NavbarItem className="hidden lg:flex">
          <Link href="/project">PROJECTS</Link>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Link href="#">TIMELINE</Link>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Link href="#">WOC</Link>
        </NavbarItem>
        <Dropdown>
      <DropdownTrigger>
        <Button color="primary" variant="light">
        TEAM
      </Button> 
      </DropdownTrigger>
      <DropdownMenu 
        aria-label="Single selection example"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKeys}
        // onSelectionChange={setSelectedKeys}
      >
        <DropdownItem key="text"><Link href="/team">CURRENT TEAM</Link></DropdownItem>
        <DropdownItem key="text"><Link href="/team">ALUMNI TEAM</Link></DropdownItem>
      </DropdownMenu>
    </Dropdown>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
    </>
  )
}


