import React from 'react';
import { Page, Text, Input, Spacer, Button, Link } from '@geist-ui/react';
import { LoginWrapper } from './auth.styles';
import * as Icons from 'react-feather';

function Login() {
  return (
    <LoginWrapper>
      <Spacer y={0.5} />
      <div className='login-form'>
        <Text as h2>
          Login to Infrastructure
        </Text>

        <div className='login-form__actions'>
          <Button
            icon={<Icons.GitHub />}
            type='secondary'
            size='large'
            className='login-form__btn'
          >
            <Spacer x={1.5} />
            Continue with GitHub
          </Button>

          <Spacer y={0.5} />
          <Button
            icon={<Icons.Gitlab />}
            type='secondary'
            style={{ background: '#7928CA', border: 'none' }}
            size='large'
            className='login-form__btn'
          >
            <Spacer x={1.5} />
            Continue with GitLab
          </Button>

          <Spacer y={0.5} />
          <Button
            icon={<Icons.Mail />}
            type='secondary'
            size='large'
            className='login-form__btn'
            style={{ background: '#0070F3', border: 'none' }}
          >
            <Spacer x={1.5} />
            Continue with Email
          </Button>
        </div>
      </div>

      <Spacer y={0.5} />

      <div className='nav'>
        <Link to='/signup'>
          {' '}
          <a>Don't have an account? Sign Up</a>{' '}
        </Link>
      </div>
    </LoginWrapper>
  );
}

export default Login;
