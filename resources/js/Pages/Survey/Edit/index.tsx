import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import useRoute from '@/Hooks/useRoute';
import Checkbox from '@/components/Checkbox';
import SelectComponent from '@/components/Select';
import AppLayout from '@/Layouts/AppLayout';
import useTypedPage from '@/Hooks/useTypedPage';
import Spinner from '@/components/Spinner';
import { Survey } from '@/types';

interface Props {
  survey: Survey;
}

const SurveyFormEdit: React.FC<Props> = ({ survey }) => {
  const route = useRoute();
  const page = useTypedPage();

  const [values, setValues] = useState({
    id: survey.id,
    user_id: page.props.user.id,
    gender: survey.gender,
    age: survey.age,
    continent: survey.continent,
    often_play: survey.often_play,
    acquire_games: survey.acquire_games,
    price: survey.price,
    platform: survey.platform,
    company: survey.company,
    console: survey.console,
    prefer_play: survey.prefer_play,
    adventure: survey.adventure,
    action: survey.action,
    arcade: survey.arcade,
    logic: survey.logic,
    mmorpg: survey.mmorpg,
    rpg: survey.rpg,
    simulator: survey.simulator,
    sports: survey.sports,
    strategy: survey.strategy,
    competitive: survey.competitive,
    most_anticipated: survey.most_anticipated,
    favorite_game: survey.favorite_game,
  });

  const [showLoader, setShowLoader] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const key = e.target.id;
    let value: any;

    if (e.target.type == 'checkbox') {
      value = e.target.checked ? 1 : 0;
    } else {
      value = e.target.value;
    }

    setValues(values => ({
      ...values,
      [key]: value,
    }));
  }

  function handleChangeSelect(value: any) {
    const key = value.target.id;
    const val = value.target.value;
    setValues(values => ({
      ...values,
      [key]: val,
    }));
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    Inertia.put(route('survey.update', values), values, {
      onStart: () => {
        setShowLoader(true);
      },
      onFinish: () => {
        setShowLoader(false);
      },
    });
  };

  return (
    <AppLayout
      title="Encuesta"
      renderHeader={() => (
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Encuesta
        </h2>
      )}
    >
      <h2 className="font-bold leading-tight text-4xl mt-0 mb-2 text-sky-600">
        Gracias por participar
      </h2>
      <div className="sm:mt-0">
        <div className="mt-5 md:mt-0 md:col-span-2">
          <form onSubmit={handleSubmit}>
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-white sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <SelectComponent
                    onChange={value => handleChangeSelect(value)}
                    defaultValue={values.gender}
                    id="gender"
                    label="Indica tu género"
                    span={true}
                    renderOptions={() => (
                      <>
                        <option>Femenino</option>
                        <option>Masculino</option>
                        <option>No binario</option>
                        <option>Transgénero</option>
                        <option>Intersexualidad</option>
                        <option>Prefiero no decirlo</option>
                      </>
                    )}
                  />

                  <SelectComponent
                    onChange={value => handleChangeSelect(value)}
                    defaultValue={values.age}
                    id="age"
                    label="Indica tu edad"
                    span={true}
                    renderOptions={() => (
                      <>
                        <option>Menor 15 años</option>
                        <option>15-20 años</option>
                        <option>20-25 años</option>
                        <option>Más de 25 años</option>
                      </>
                    )}
                  />

                  <SelectComponent
                    onChange={value => handleChangeSelect(value)}
                    defaultValue={values.continent}
                    id="continent"
                    label="¿Dónde resides?"
                    span={true}
                    renderOptions={() => (
                      <>
                        <option>Europa</option>
                        <option>África</option>
                        <option>América</option>
                        <option>Asia</option>
                        <option>Oceanía</option>
                      </>
                    )}
                  />

                  <SelectComponent
                    onChange={value => handleChangeSelect(value)}
                    defaultValue={values.often_play}
                    id="often_play"
                    label="¿Qué tan seguido juegas videojuegos?"
                    span={true}
                    renderOptions={() => (
                      <>
                        <option>Diario</option>
                        <option>2-3 veces en la semana</option>
                        <option>1 vez en la semana</option>
                        <option>Nunca</option>
                      </>
                    )}
                  />

                  <SelectComponent
                    onChange={value => handleChangeSelect(value)}
                    defaultValue={values.acquire_games}
                    id="acquire_games"
                    label="¿Cómo prefieres adquirir tus juegos?"
                    span={true}
                    renderOptions={() => (
                      <>
                        <option>Descargas</option>
                        <option>Adquirir nuevo</option>
                        <option>Adquirir seminuevo</option>
                      </>
                    )}
                  />

                  <SelectComponent
                    onChange={value => handleChangeSelect(value)}
                    defaultValue={values.price}
                    id="price"
                    label="¿Cuánto gastas al año en juegos? (Dólares)"
                    span={true}
                    renderOptions={() => (
                      <>
                        <option>0-20 dólares</option>
                        <option>20-50 dólares</option>
                        <option>50-100 dólares</option>
                        <option>Más 100 dólares</option>
                      </>
                    )}
                  />

                  <SelectComponent
                    onChange={value => handleChangeSelect(value)}
                    defaultValue={values.platform}
                    id="platform"
                    label="¿En qué plataforma juegas más?"
                    span={true}
                    renderOptions={() => (
                      <>
                        <option>Consola</option>
                        <option>Móvil</option>
                        <option>PC</option>
                      </>
                    )}
                  />

                  <SelectComponent
                    onChange={value => handleChangeSelect(value)}
                    defaultValue={values.company}
                    id="company"
                    label="Compañía preferente"
                    span={true}
                    renderOptions={() => (
                      <>
                        <option>Sony</option>
                        <option>Microsoft</option>
                        <option>Nintendo</option>
                      </>
                    )}
                  />

                  <SelectComponent
                    onChange={value => handleChangeSelect(value)}
                    defaultValue={values.console}
                    id="console"
                    label="Consola preferida"
                    span={true}
                    renderOptions={() => (
                      <>
                        <option>Xbox Series X</option>
                        <option>PlayStation 5</option>
                        <option>Nintendo Switch</option>
                        <option>PlayStation 4</option>
                        <option>Xbox One</option>
                      </>
                    )}
                  />

                  <SelectComponent
                    onChange={value => handleChangeSelect(value)}
                    defaultValue={values.prefer_play}
                    id="prefer_play"
                    label="¿Cómo prefieres jugar?"
                    span={true}
                    renderOptions={() => (
                      <>
                        <option>Solo</option>
                        <option>Con personas</option>
                      </>
                    )}
                  />

                  <label className="col-span-6 block text-sm font-medium text-gray-700">
                    ¿Qué tipo de géneros juegas?
                  </label>
                  <div className="col-span-6 grid grid-cols-5 gap-5">
                    <Checkbox
                      onChange={handleChange}
                      defaultValue={values.adventure}
                      id="adventure"
                      title="Aventura"
                    />
                    <Checkbox
                      onChange={handleChange}
                      defaultValue={values.action}
                      id="action"
                      title="Acción"
                    />
                    <Checkbox
                      onChange={handleChange}
                      defaultValue={values.arcade}
                      id="arcade"
                      title="Arcade"
                    />
                    <Checkbox
                      onChange={handleChange}
                      defaultValue={values.logic}
                      id="logic"
                      title="Lógica"
                    />
                    <Checkbox
                      onChange={handleChange}
                      defaultValue={values.mmorpg}
                      id="mmorpg"
                      title="MMORPG"
                    />
                    <Checkbox
                      onChange={handleChange}
                      defaultValue={values.rpg}
                      id="rpg"
                      title="RPG"
                    />
                    <Checkbox
                      onChange={handleChange}
                      defaultValue={values.simulator}
                      id="simulator"
                      title="Simuladores"
                    />
                    <Checkbox
                      onChange={handleChange}
                      defaultValue={values.sports}
                      id="sports"
                      title="Deportes"
                    />
                    <Checkbox
                      onChange={handleChange}
                      defaultValue={values.strategy}
                      id="strategy"
                      title="Estrategia"
                    />
                    <Checkbox
                      onChange={handleChange}
                      defaultValue={values.competitive}
                      id="competitive"
                      title="Competitivos"
                    />
                  </div>

                  <SelectComponent
                    onChange={value => handleChangeSelect(value)}
                    defaultValue={values.most_anticipated}
                    id="most_anticipated"
                    label="Juego que más esperas para el 2022"
                    span={false}
                    renderOptions={() => (
                      <>
                        <option>Elden Ring</option>
                        <option>Rainbow Six: Extraction</option>
                        <option>Pokemon Legends: Arceus</option>
                        <option>Dying Light 2: Stay Human</option>
                        <option>Horizon Forbidden West</option>
                        <option>Gran Turismo 7</option>
                        <option>Forspoken</option>
                        <option>The Day Before</option>
                        <option>Bayonetta 3</option>
                        <option>Ghostwire: Tokyo</option>
                        <option>Kirby and the Forgotten Land</option>
                        <option>Gotham Knights</option>
                      </>
                    )}
                  />

                  <div className="col-span-6">
                    <label
                      htmlFor="favorite_game"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Videojuego favorito
                    </label>
                    <input
                      onChange={handleChange}
                      defaultValue={values.favorite_game}
                      type="text"
                      name="favorite_game"
                      id="favorite_game"
                      className="mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  disabled={showLoader}
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                >
                  Actualizar
                </button>
              </div>
            </div>
          </form>
        </div>
        {showLoader && <Spinner />}
      </div>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>
    </AppLayout>
  );
};

export default SurveyFormEdit;
