import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, User } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

interface SubMenuItem {
  title: string;
  href: string;
}

interface MenuItem {
  title: string;
  href: string;
  subItems?: SubMenuItem[];
}

const menuItems: MenuItem[] = [
  {
    title: "Notre Offre",
    href: "/notre-offre",
    subItems: [
      { title: "Notre Gamme", href: "/notre-offre#notre-gamme" },
      { title: "Logistique optimisée", href: "/notre-offre#logistique-optimisee" },
      { title: "Livraisons 100% locale", href: "/notre-offre#livraisons-locale" }
    ]
  },
  {
    title: "Nos Engagements",
    href: "/nos-engagements"
  },
  {
    title: "Qui Sommes Nous",
    href: "/qui-sommes-nous",
    subItems: [
      { title: "Notre histoire", href: "/qui-sommes-nous#notre-histoire" },
      { title: "L'équipe", href: "/qui-sommes-nous#equipe" }
    ]
  },
  {
    title: "Actualités",
    href: "/actualites"
  }
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button onClick={scrollToTop} className="focus:outline-none">
              <img 
                src="/lovable-uploads/1b5b3d5d-d99b-4720-ac02-f36e48c49406.png" 
                alt="Localizz" 
                className="h-12 w-auto hover:opacity-80 transition-opacity"
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <NavigationMenu>
              <NavigationMenuList>
                {menuItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    {item.subItems ? (
                      <>
                        <NavigationMenuTrigger className="text-gray-700 hover:text-primary transition-colors bg-transparent hover:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent">
                          {item.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div className="grid w-[400px] gap-3 p-4 bg-white border border-gray-200 shadow-lg rounded-md">
                            {item.subItems.map((subItem) => (
                              <NavigationMenuLink
                                key={subItem.title}
                                href={subItem.href}
                                className={cn(
                                  "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                )}
                              >
                                <div className="text-sm font-medium leading-none text-gray-700 hover:text-primary">
                                  {subItem.title}
                                </div>
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavigationMenuLink
                        href={item.href}
                        className="text-gray-700 hover:text-primary transition-colors px-4 py-2"
                      >
                        {item.title}
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            
            <Button asChild className="bg-secondary hover:bg-secondary/90 text-white ml-4">
              <a href="/contact">Contact</a>
            </Button>

            {/* Bouton accès particulier - plus visible */}
            <Button 
              variant="outline" 
              size="sm" 
              className="ml-2 text-primary border-primary hover:bg-primary hover:text-white transition-colors"
            >
              <User className="w-4 h-4 mr-2" />
              Accès particulier
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6 text-gray-700" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <div key={item.title}>
                  <a href={item.href} className="text-gray-700 hover:text-primary transition-colors block">
                    {item.title}
                  </a>
                  {item.subItems && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.subItems.map((subItem) => (
                        <a
                          key={subItem.title}
                          href={subItem.href}
                          className="text-gray-600 hover:text-primary transition-colors text-sm block"
                        >
                          {subItem.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Button asChild className="bg-secondary hover:bg-secondary/90 text-white w-fit">
                <a href="/contact">Contact</a>
              </Button>
              
              {/* Bouton accès particulier en mobile - plus visible */}
              <Button 
                variant="outline" 
                size="sm" 
                className="text-primary border-primary hover:bg-primary hover:text-white w-fit"
              >
                <User className="w-4 h-4 mr-2" />
                Accès particulier
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
