import React, { FC, useContext } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import TextField from 'elements/Form/TextField';
import Button from 'elements/Button/PrimaryButton';
import { LoginWrapper, HeaderWrapper, FormSection, ButtonWrapper } from 'pages/Login/style';
import { AuthContext } from 'context/AuthContext';
import { user } from 'pages/Login/dummyData';

const schema = yup.object({
  email: yup.string().required(),
  password: yup.string().required(),
}).required();

type FormData = yup.InferType<typeof schema>;

const initialValues = {
  email: '',
  password: '',
}

const Login = () => {
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const { handleSubmit, control, setError, formState: { errors } } = useForm<FormData>({
    defaultValues: initialValues,
    resolver: yupResolver(schema)
  });

  const submitHandler = (values: FormData) => {
    console.log(values);
    if (values.email === user.email) {
      setUser(user);
      localStorage.setItem('token', user.token);
      navigate('/home');
    }
    else 
      setError('email', {
        type: 'custom',
        message: 'Invalid user'
      });
  }

  return (
    <LoginWrapper>
      <HeaderWrapper>Welcome</HeaderWrapper>
      <FormSection>
        <Form onSubmit={handleSubmit(submitHandler)}>
          <Controller
            name="email"
            control={control}
            render={({ field }) =>
              <TextField
                label='Email'
                type='email'
                placeholder= 'Enter Email'
                error={errors.email?.message}
                {...field}
              />
            }
          />
          <Controller
            name="password"
            control={control}
            render={({ field }) =>
              <TextField
                label='Password'
                type='password'
                placeholder= 'Enter Password'
                error={errors.password?.message}
                {...field}
              />
            }
          />
          <ButtonWrapper>
            <Button type='submit' className='w-100'>Submit</Button>
          </ButtonWrapper>
        </Form>
      </FormSection>
    </LoginWrapper>
  );
};

export default Login;