import React from 'react';
import logo from '../../assets/Logo.png';
import { useFormik } from 'formik';
import Input from '../../components/Input';
import * as S from './styles';
import { useAuthContext } from '../../contexts/AuthContext';
import { EMAIL, SENHA } from '../../constants';

const Login: React.FC = () => {
  const { login, error } = useAuthContext();
  
  const formik = useFormik({
    initialValues: {
      email: 'desafio@ioasys.com.br',
      password: '12341234',
    },
    onSubmit: async ({ email, password }) => {
      await login(email, password);
    }
  });

  return <S.Container>
      <S.Content>
          <S.Row>
            <S.Logo src={logo} />
            <S.Title>Books</S.Title>
          </S.Row>
          <S.InputArea>
              <Input 
                label={EMAIL} 
                name='email' 
                value={formik.values.email} 
                onChange={formik.handleChange}
                type='email'
              />
              <Input 
                label={SENHA} 
                isSubmit onPress={() => formik.handleSubmit()} 
                name='password' 
                value={formik.values.password} 
                onChange={formik.handleChange}
                type='password'
                error={error}
              />
          </S.InputArea>
      </S.Content>
  </S.Container>;
}

export default Login;
