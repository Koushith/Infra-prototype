import React, { useState } from 'react';
import { Page, Text, Input, Spacer, Button, Link } from '@geist-ui/react';
import SignUpWithEmail from './SignUpWithEmail';
import { SignUpWrapper } from './Signup.styles';
import * as Icons from 'react-feather';

function Signup() {
  const [withEmail, setWithEmail] = useState(true);
  return (
    <SignUpWrapper>
      <Spacer y={0.5} />
      <div className='login-form'>
        {withEmail ? (
          <>
            <Text as h2>
              Sign Up to Infrastructure
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
                onClick={() => setWithEmail(false)}
              >
                <Spacer x={1.5} />
                Continue with Email
              </Button>
              <Spacer y={0.5} />
            </div>
          </>
        ) : (
          <>
            <SignUpWithEmail setWithEmail={setWithEmail} />
          </>
        )}
      </div>

      <div className='login-action'>
        <div className='nav'>
          <Link href='/signup'>
            {' '}
            <a>Already have an account? Sign In</a>{' '}
          </Link>
        </div>
      </div>
    </SignUpWrapper>
  );
}

export default Signup;
