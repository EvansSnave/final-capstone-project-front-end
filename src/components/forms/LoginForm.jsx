import { useForm } from 'react-hook-form';

const LoginForm = () => {
  const { handleSubmit } = useForm();

  const onSubmit = () => {
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} />
  );
};

export default LoginForm;
