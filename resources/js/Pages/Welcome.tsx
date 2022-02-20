import { InertiaLink } from '@inertiajs/inertia-react';
import React from 'react';
import useRoute from '@/Hooks/useRoute';
import useTypedPage from '@/Hooks/useTypedPage';
// @ts-ignore
import { Head } from '@inertiajs/inertia-react';

interface Props {
  canLogin: boolean;
  canRegister: boolean;
  laravelVersion: string;
  phpVersion: string;
}

export default function Welcome({
  canLogin,
  canRegister,
  laravelVersion,
  phpVersion,
}: Props) {
  const route = useRoute();
  const page = useTypedPage();

  return (
    <>
      <Head title="Bienvenido" />
      <div className="flex flex-wrap md items-center h-screen">
        <div className="bg-white w-full md:w-1/2 h-screen">
          <div className="mx-32">
            <h1 className="text-6xl font-bold mt-16">Gaming Survey</h1>

            <div className="flex mt-16 font-light text-gray-500">
              <div className="pr-4">
                <p className="text-4xl text-gray-900 font-semibold pt-2">
                  <i className="fa-brands fa-laravel"></i>
                </p>
              </div>
              <div className="pr-4">
                <p className="text-4xl text-gray-900 font-semibold pt-2">
                  <i className="fa-brands fa-react"></i>
                </p>
              </div>
              <div className="pr-4">
                <p className="text-4xl text-gray-900 font-semibold pt-2">
                  <i className="fa-brands fa-react"></i>
                </p>
              </div>
            </div>

            <div className="w-full sm: md:w-2/3 mt-16 text-gray-500 text-sm text-justify">
              Pequeña encuesta para recopilar información general de los
              jugadores, el repositorio se encuentra en el siguiente enlace:{' '}
              <a href="https://github.com/MiguelDIslas">
                <u>Repositorio</u>
              </a>
              . La imagen de inicio fue tomada de Unsplash, usuario{' '}
              <strong>Florian Olivo</strong>, enlace de la fotografía:{' '}
              <a href="https://unsplash.com/photos/Mf23RF8xArY">
                <u>Fotografía</u>
              </a>
              .
              <br />
              <br />
              Email: adminlaravel@gmail.com
              <br />
              Password: 12345678
            </div>

            <div className="mt-16 sm:mt-8 sm:flex sm:justify-center lg:justify-start ">
              {canLogin ? (
                <>
                  {page.props.user ? (
                    <div className="rounded-md shadow">
                      <InertiaLink
                        href={route('dashboard')}
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 md:py-4 md:text-lg md:px-10"
                      >
                        Dashboard
                      </InertiaLink>
                    </div>
                  ) : (
                    <>
                      <div className="rounded-md shadow">
                        <InertiaLink
                          href={route('login')}
                          className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 md:py-4 md:text-lg md:px-10"
                        >
                          Iniciar Sesión
                        </InertiaLink>
                      </div>
                      {canRegister ? (
                        <div className="mt-3 sm:mt-0 sm:ml-3">
                          <InertiaLink
                            href={route('register')}
                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-sky-700 bg-sky-100 hover:bg-sky-200 md:py-4 md:text-lg md:px-10"
                          >
                            Registro
                          </InertiaLink>
                        </div>
                      ) : null}
                    </>
                  )}
                </>
              ) : null}
            </div>
          </div>
        </div>
        <div className="bg-red-600 w-full md:w-1/2 h-screen">
          <img
            src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            className="h-screen w-full object-cover"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
