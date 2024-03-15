import { Navbar as NextUINavbar, NavbarContent, NavbarMenu, NavbarMenuToggle, NavbarBrand, NavbarItem, NavbarMenuItem } from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch";
import { TwitterIcon, InstagramIcon, YoutubeIcon, HeartFilledIcon, SearchIcon } from "@/components/icons";

import { Logo } from "@/components/icons";

export const Navbar = () => {
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={<SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />}
      type="search"
    />
  );

  return (
    <>
      <NextUINavbar maxWidth="xl" position="sticky">
        <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
          {/* brand logo */}
          <NavbarBrand as="li" className="w-40 sm:w-100 md:w-100">
            <NextLink className="flex justify-start items-center gap-1" href="/">
              <Logo />
            </NextLink>
          </NavbarBrand>

          {/* large screen nav links */}
          <ul className="hidden lg:flex gap-4 justify-start ml-2">
            {siteConfig.navItems.map((item) => (
              <NavbarItem key={item.href}>
                <NextLink className={clsx(linkStyles({ color: "foreground" }), "data-[active=true]:text-primary data-[active=true]:font-medium")} color="foreground" href={item.href}>
                  {item.label}
                </NextLink>
              </NavbarItem>
            ))}
          </ul>
        </NavbarContent>

        <NavbarContent className=" sm:flex basis-1/5 sm:basis-full" justify="end">
          {/* search box */}
          {/* <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem> */}

          {/* theme toggle */}
          <NavbarItem>
            <ThemeSwitch />
          </NavbarItem>

          {/* menu toggle */}
          <NavbarItem className="lg:hidden">
            <NavbarMenuToggle className="w-6 h-6"></NavbarMenuToggle>
          </NavbarItem>
        </NavbarContent>

        {/* small screen  */}
        <NavbarMenu>
          {searchInput}
          <div className="mx-4 mt-2 flex flex-col gap-2">
            {siteConfig.navMenuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link color={index === 2 ? "primary" : index === siteConfig.navMenuItems.length - 1 ? "danger" : "foreground"} href="#" size="lg">
                  {item.label}
                </Link>
              </NavbarMenuItem>
            ))}
          </div>
        </NavbarMenu>
      </NextUINavbar>

      {/* row2 */}
      <NextUINavbar maxWidth="xl" position="sticky">
        <NavbarContent className=" flex basis-full" justify="center">
          {/* donate button */}
          <NavbarItem>
            <Button isExternal as={Link} className="text-sm font-normal text-default-600 bg-default-100" href={siteConfig.links.goFundMe} startContent={<HeartFilledIcon className="text-danger" />} variant="flat">
              Donate
            </Button>
          </NavbarItem>

          {/* social media */}
          <NavbarItem className="flex gap-2   dark:bg-default-100 text-center p-1 pl-2 pr-2 rounded-xl ">
            <Link isExternal href={siteConfig.sutranovumLinks.twitter} aria-label="Twitter" className="p-1 ">
              <TwitterIcon className="text-default-500" />
            </Link>
            <Link isExternal href={siteConfig.sutranovumLinks.youtube} aria-label="Youtube" className="p-1 ">
              <YoutubeIcon className="text-default-500 m-2" />
            </Link>
            <Link isExternal href={siteConfig.sutranovumLinks.instagram} aria-label="Instagram" className="p-1 ">
              <InstagramIcon className="text-default-500" />
            </Link>
          </NavbarItem>
        </NavbarContent>
      </NextUINavbar>
    </>
  );
};
