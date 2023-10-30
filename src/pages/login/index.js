import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { Button } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import TextField from '@mui/material/TextField';
import Swal from "sweetalert2";
import Image from "next/image";
import axios from "axios";
import { setCookie } from 'cookies-next';
import { useAppContext } from '@/context';


export default function Login() {
  const router = useRouter();
  const {createProfile} = useAppContext();

  const [formValues, setFormValues] = useState({
    username:{
      value:"",
      error:false,
      errorMessage:'Nombre de usuario requerido'
    },
    password:{
      value:"",
      error:false,
      errorMessage:'Contraseña requerida'
    }
  })  

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleChange = (e) => {
    const {name, value} = e.target;

    setFormValues({
      ...formValues,
      [name]:{
        ...formValues[name],
        error: false,
        value
      }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formFields = Object.keys(formValues);
    let newFormValues = {...formValues}

    for (let index = 0; index < formFields.length; index++) {
      const currentField = formFields[index];
      const currentValue = formValues[currentField].value;

      if(currentValue === ''){
        newFormValues = {
          ...newFormValues,
          [currentField]:{
            ...newFormValues[currentField],
            error:true
          }
        }
      }
    }
    setFormValues(newFormValues)

    if ( !newFormValues.username.error && !newFormValues.password.error ) {
      const config = {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        }
      };    
    
      const url = `${process.env.NEXT_PUBLIC_API_URL}login`;

      try {

        const response = await axios.post(url, 
          {
            "username": formValues.username.value, 
            "password": formValues.password.value
          }, 
          config
        );

        const {user_id, fullname, token} = response.data;
        setCookie('SkyTurro-Token', token);
        createProfile(user_id, fullname);   
        
        router.push("/");

      } catch ({code, message, name, request}) {
        if (code === "ERR_NETWORK") {
          Swal.fire({
            title: "Autentificar",
            text: "Error en su red, consulte a su proveedor de servicio",
            icon: "error",
            showCancelButton: false,
            allowOutsideClick: false,
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Aceptar",
          });
        } else {
          if (code === "ERR_BAD_REQUEST") {
            const {detail} = JSON.parse(request.response)
            Swal.fire({
              title: "Autentificar",
              text: detail,
              icon: "error",
              showCancelButton: false,
              allowOutsideClick: false,
              confirmButtonColor: "#3085d6",
              confirmButtonText: "Aceptar",
            });  
          }
        }
      }
    }
  }  

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>Iniciar sesión</title>
      </Head>

      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <Image
              className="w-8 h-8 mr-2"
              src="/ferox-transparent.png"
              alt="logo"
              width={100}
              height={100}
            />
            SkyTurro
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Iniciar sesión
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit} autoComplete="off" noValidate>
                <div>
                  <label
                    htmlFor="username"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Usuario
                  </label>
                  <TextField                  
                    size="small"
                    name="username"
                    variant="outlined"
                    required
                    id="username"
                    placeholder="Usuario"
                    onChange={handleChange}
                    error={formValues.username.error}
                    helperText={formValues.username.error && formValues.username.errorMessage}                    
                    className="w-full rounded-lg bg-gray-50 sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Contraseña
                  </label>
                  <TextField                  
                    size="small"
                    name="password"
                    id="password"
                    placeholder="Contraseña"
                    required
                    type={showPassword ? 'text' : 'password'}
                    onChange={handleChange}
                    error={formValues.password.error}
                    helperText={formValues.password.error && formValues.password.errorMessage}                    
                    className="w-full rounded-lg bg-gray-50 sm:text-sm"
                    InputProps={{
                      endAdornment: (
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      ),
                    }}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Recordarme
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Olvidaste tú contraseña ?
                  </a>
                </div>
                <Button
                  type="submit"
                  className="w-full text-black bg-[#e8e8e8] hover:bg-[#2a2185] hover:text-white focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Aceptar
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
