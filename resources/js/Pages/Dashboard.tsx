import React from 'react';
import AppLayout from '@/Layouts/AppLayout';
import useRoute from '@/Hooks/useRoute';
import MessageComponent from '@/components/Message';
import { InertiaLink } from '@inertiajs/inertia-react';

export default function Dashboard() {
  const route = useRoute();

  return (
    <AppLayout
      title="Tablero"
      renderHeader={() => (
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Tablero
        </h2>
      )}
    >
      {/* <div className="rounded-md shadow">
        <InertiaLink
          href={route('survey.create')}
          className="w-full flex items-center justify-center px-8 pb-4 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-sky-700 md:py-4 md:text-lg md:px-10"
        >
          Ir a contestar encuesta
        </InertiaLink>
      </div> */}

      <MessageComponent
        message="Este es un pequeño proyecto de encuesta desarrollado con Laravel, React, Inertia, Tailwind
              y Jetstream. En un futuro cambio se agregará un perfil de administrador para poder observar gráficas de las encuestas y nuevas encuestas! "
      />
    </AppLayout>
  );
}
