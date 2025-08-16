import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    {
      name: 'Trip Calculator',
      href: '/travel-expense-calculator',
      icon: 'Calculator'
    }
  ];

  const isActiveRoute = (href) => {
    return location?.pathname === href;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border shadow-subtle">
      <div className="flex items-center justify-between h-16 px-fluid-sm lg:px-fluid-md">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center space-x-3 transition-micro hover:opacity-80"
        >
          <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-lg">
            <Icon name="Plane" size={20} color="white" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-semibold text-foreground leading-tight">
              TripExpense
            </span>
            <span className="text-xs text-muted-foreground leading-tight">
              Calculator
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navigationItems?.map((item) => (
            <Link
              key={item?.name}
              to={item?.href}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-micro hover-lift ${
                isActiveRoute(item?.href)
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              <Icon name={item?.icon} size={16} />
              <span>{item?.name}</span>
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-3">
          <Button variant="outline" size="sm" iconName="HelpCircle" iconPosition="left">
            Help
          </Button>
          <Button variant="default" size="sm" iconName="Settings" iconPosition="left">
            Settings
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMobileMenu}
          iconName={isMobileMenuOpen ? "X" : "Menu"}
        />
      </div>
      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border shadow-floating">
          <nav className="px-fluid-sm py-4 space-y-2">
            {navigationItems?.map((item) => (
              <Link
                key={item?.name}
                to={item?.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-micro ${
                  isActiveRoute(item?.href)
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                <Icon name={item?.icon} size={18} />
                <span>{item?.name}</span>
              </Link>
            ))}
            
            {/* Mobile Actions */}
            <div className="pt-4 mt-4 border-t border-border space-y-2">
              <Button 
                variant="outline" 
                fullWidth 
                iconName="HelpCircle" 
                iconPosition="left"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Help
              </Button>
              <Button 
                variant="default" 
                fullWidth 
                iconName="Settings" 
                iconPosition="left"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Settings
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;