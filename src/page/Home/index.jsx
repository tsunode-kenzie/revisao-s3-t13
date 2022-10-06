import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Link, Outlet, useNavigate } from 'react-router-dom';
import Form from '../../components/Form';
import Button from '../../components/Button';
import { schema } from '../../validations/registerUser';

const Home = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function registerUser(data) {
    console.log(data);

    // await api.post('/users');
    // chamar api para fazer cadastro

    navigate('/dashboard');
  }

  return (
    <>
      <Link to='/dashboard'>Dashboard</Link>
      <Outlet />
      {/* // eslint-disable-next-line react/jsx-no-bind */}
      <Form onSubmit={handleSubmit(registerUser)}>
        <label htmlFor='name'>Name</label>
        <input id='name' type='text' {...register('name')} />
        <p>{errors.name?.message}</p>

        <label htmlFor='email'>Email</label>
        <input id='email' type='email' {...register('email')} />
        <p>{errors.email?.message}</p>

        <label htmlFor='password'>Senha</label>
        <input id='password' type='text' {...register('password')} />
        <p>{errors.password?.message}</p>

        <label htmlFor='confirm-password'>Confirmar Senha</label>

        <div>
          <input
            id='confirm-password'
            type='text'
            {...register('confirmPassword')}
          />
          icon
        </div>
        <p>{errors.confirmPassword?.message}</p>

        <Button type='submit'>Cadastrar</Button>
      </Form>
    </>
  );
};

export default Home;
