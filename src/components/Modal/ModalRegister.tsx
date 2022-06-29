import { Form } from '@unform/web';
import { X } from 'phosphor-react';
import GoogleLogin, { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
import WebShoppingImg from '../../assets/web-shopping.svg';
import { Input } from '../Form';


type Props = {
  setModal: () => void;
  handleHasAccount: (state: boolean) => void;
};

export const ModalRegister: React.FC<Props> = ({
  setModal,
  handleHasAccount,
}) => {

  const handleSubmit = (data: {}) => {
    console.log(data);
  };

  const onSuccess = (
    res: GoogleLoginResponse | GoogleLoginResponseOffline,
  ) => {
    const response = res as GoogleLoginResponse;
    console.log("LOGIN SUCCESS: ", response.profileObj);
  };

  const onFailure = (response: GoogleLoginResponseOffline) => {
    console.log("ERROR", response);
  };


  return (
    <section className="relative w-8/12 h-3/4 bg-white opacity-100 blur-none rounded-3xl flex flex-row">
      <button className="absolute top-3 right-3 border-solid border-2 rounded-md border-white hover:bg-black hover:bg-opacity-20 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary focus:ring-white">
        <X
          onClick={() => setModal()}
          color="white"
          weight="bold"
          className="w-6 h-6 "
        />
      </button>
      <div className="w-full sm:w-1/2 px-4 py-20 flex flex-col justify-around">
        <div>
          <h1 className="text-3xl">Criar Conta</h1>
          <p className="font-normal">Comece a aproveitar as melhores ofertas</p>
        </div>
        <div className="flex flex-col gap-2">
          <GoogleLogin
            clientId={process.env.REACT_APP_GOOOGLE_ID!}
            buttonText="Entrar com o Google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy="single_host_origin"
            isSignedIn={true}
          />
          <p className="font-light self-center text-neutral-400"> ou </p>
          <Form
            className="flex flex-col gap-3"
            initialData={{}}
            onSubmit={handleSubmit}
          >
            <div className="flex gap-2">
              <Input
                className="h-12 border-2 rounded-lg"
                label="Nome"
                type="text"
                name="firstname"
              />
              <Input
                className="h-12 border-2 rounded-lg"
                label="Sobrenome"
                type="text"
                name="lastname"
              />
            </div>
            <Input
              className="h-12 border-2 rounded-lg"
              label="Email"
              type="email"
              name="email"
            />
            <Input
              className="h-12 border-2 rounded-lg"
              label="CEP"
              type="text"
              name="cep"
            />
            <div className="flex gap-2">
              <Input
                className="h-12 border-2 rounded-lg"
                label="Cidade"
                type="text"
                name="city"
              />
              <Input
                className="h-12 border-2 rounded-lg"
                label="Estado"
                type="text"
                name="state"
              />
            </div>
            <div className="flex gap-2">
              <Input
                className="h-12 border-2 rounded-lg"
                label="Senha"
                type="password"
                name="password"
              />
              <Input
                className="h-12 border-2 rounded-lg"
                label="Confirmar senha"
                type="password"
                name="password_confirm"
              />
            </div>

            <button
              className="bg-primary w-full h-12 rounded-md self-center text-white font-medium tracking-wider transition-colors hover:bg-primary hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-primary"
              type="submit"
            >
              Criar Conta
            </button>
          </Form>


          <p className="font-medium">
            Já tem uma conta?{' '}
            <button className="text-primary" onClick={() => handleHasAccount(true)}>
              Faça login
            </button>
          </p>
        </div>
      </div>
      <div className="hidden sm:flex w-1/2 bg-primary rounded-r-[1.5rem] items-center justify-center">
        <img
          className="w-3/4"
          src={WebShoppingImg}
          alt="Imagem representando um ecommerce"
        />
      </div>
    </section >
  );
};
