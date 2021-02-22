import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  GeistUIThemes,
  Avatar,
  Button,
  Tabs,
  useTheme,
  Popover,
  Link,
  Text,
} from '@geist-ui/react';

// import * as Icons from 'react-feather';
import { Navigation } from './Navbar.styles';

const Navbar = ({ toggleDarkMode }) => {
  console.log(toggleDarkMode);

  const theme = useTheme();
  const router = useRouter();
  const [fixed, setFixed] = useState(false);
  const [tab, setTab] = useState(router.pathname);
  console.log(tab);
  const isDark = theme.type === 'dark';

  useEffect(() => {
    const scrollHandler = () => {
      const shouldFixed = document.documentElement.scrollTop > 60;
      if (fixed !== shouldFixed) setFixed(shouldFixed);
    };
    document.addEventListener('scroll', scrollHandler);
    return () => document.removeEventListener('scroll', scrollHandler);
  }, [fixed]);

  const changeTab = (val) => {
    router.push(val);
    setTab(val);
  };

  return (
    <>
      <Navigation>
        <div className='nav'>
          <div>
            <div> Infra</div>
          </div>
          <div className='actions'>
            <Text>Log In</Text>
            <Button auto type='success'>
              Sign Up
            </Button>
          </div>
        </div>
      </Navigation>
    </>
  );
};

export default Navbar;
