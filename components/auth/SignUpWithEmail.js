import React from 'react';
import { Page, Text, Input, Spacer, Button, Link } from '@geist-ui/react';
import * as Icons from 'react-feather';
import { SignUpWrapper } from './Signup.styles';

function SignUpWithEmail() {
  return (
    <SignUpWrapper>
      <Spacer y={0.5} />
      <div className='login-form'>
        <Text as h2>
          Sign Up to Infrastructure
        </Text>

        <div className='login-form__actions'>
          <Input
            icon={<Icons.Mail />}
            placeholder='Enter your Email'
            size='large'
          />
          <Spacer y={0.5} />
          <Input
            icon={<Icons.Lock />}
            placeholder='Enter your Password'
            type='password'
            size='large'
          />
          <Spacer y={0.5} />
          <Input.Password placeholder='Re-enter your password' size='large' />
          <Spacer y={0.5} />
          <Button type='secondary' size='large' className='login-form__btn'>
            Sign Up
          </Button>
        </div>
      </div>

      <Spacer y={0.5} />
    </SignUpWrapper>
  );
}

export default SignUpWithEmail;
