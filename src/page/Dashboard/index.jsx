import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Button from '../../components/Button';

const Dashboard = () => {
  const navigate = useNavigate();

  function teste() {
    toast('Cadastro realizado com sucesso');
    setTimeout(() => {
      navigate('/');
    }, 2000);
  }

  return (
    <>
      <Link to='/'>Home</Link>
      {/* // eslint-disable-next-line react/jsx-no-bind */}
      <Button variant='error' type='button' onClick={() => teste()}>
        Outra coisa
      </Button>
    </>
  );
};

export default Dashboard;
