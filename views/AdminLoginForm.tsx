import {FC} from 'react'

import {AdminLoginProps, Alignment} from '@td/types'
import {
  Card,
  Logo,
  TextField,
  PasswordField,
  Button
} from '@td/components'

export const AdminLoginForm: FC<Pick<AdminLoginProps, 'formikProps' | 'onLogin' | 'logoImage'>> = ({
  formikProps,
  logoImage,
  onLogin
}: Pick<AdminLoginProps, 'formikProps' | 'onLogin' | 'logoImage'>) => {

  return (
    <Card fadeIn level={2} width={425}>
      <Logo 
        src={logoImage.src} 
        align={Alignment.Center}
        weighted={4}
        size={{
          h: 75
        }} 
      />
      <TextField 
        label="Email Address"
        name="username"
        weighted={3}
        setFieldValue={formikProps.setFieldValue}
        topWeighted={3}
      />
      <PasswordField
        label="Password"
        name="password"
        setFieldValue={formikProps.setFieldValue}
        weighted={6}
      />
      <Button 
        level={5} 
        onClick={onLogin(formikProps)} 
        block
      >
        Log In
      </Button>
    </Card>
  )
}
