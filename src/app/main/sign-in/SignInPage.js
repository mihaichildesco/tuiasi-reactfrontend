import {yupResolver} from '@hookform/resolvers/yup';
import {Controller, useForm} from 'react-hook-form';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom';
import * as yup from 'yup';
import _ from '@lodash';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import AvatarGroup from '@mui/material/AvatarGroup';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import {useEffect} from 'react';
import jwtService from '../../auth/services/jwtService';

/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
    email: yup.string().email('Trebuie sa introduci o adresa de email valida').required('Trebuie sa introduci o adresa de email'),
    password: yup
        .string()
        .required('Te rugam sa introduci o parola')
        .min(4, 'Parola este prea scurta - minim 4 caractere'),
});

const defaultValues = {
    email: '',
    password: '',
    remember: true,
};

function SignInPage() {
    const {control, formState, handleSubmit, setError, setValue} = useForm({
        mode: 'onChange',
        defaultValues,
        resolver: yupResolver(schema),
    });

    const {isValid, dirtyFields, errors} = formState;

    useEffect(() => {
        setValue('email', 'robert.gealapu@blacksquare.ro', {shouldDirty: true, shouldValidate: true});
        setValue('password', 'admin', {shouldDirty: true, shouldValidate: true});
    }, [setValue]);

    function onSubmit({email, password}) {
        jwtService
            .signInWithEmailAndPassword(email, password)
            .then((user) => {
                // No need to do anything, user data will be set at app/auth/AuthContext
            })
            .catch((_errors) => {
                _errors.forEach((error) => {
                    setError(error.type, {
                        type: 'manual',
                        message: error.message,
                    });
                });
            });
    }

    return (
        <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-1 min-w-0">
            <Paper
                className="h-full sm:h-auto md:flex md:items-center md:justify-end w-full sm:w-auto md:h-full md:w-1/2 py-8 px-16 sm:p-48 md:p-64 sm:rounded-2xl md:rounded-none sm:shadow md:shadow-none ltr:border-r-1 rtl:border-l-1">
                <div className="w-full max-w-320 sm:w-320 mx-auto sm:mx-0">
                    <img className="w-48" src="assets/images/logo/logo.svg" alt="logo"/>

                    <Typography className="mt-32 text-4xl font-extrabold tracking-tight leading-tight">
                        Login
                    </Typography>
                    <div className="flex items-baseline mt-2 font-medium">
                        <Typography>Nu ai cont?</Typography>
                        <Link className="ml-4" to="/sign-up">
                            Inregistreaza-te
                        </Link>
                    </div>

                    <form
                        name="loginForm"
                        noValidate
                        className="flex flex-col justify-center w-full mt-32"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <Controller
                            name="email"
                            control={control}
                            render={({field}) => (
                                <TextField
                                    {...field}
                                    className="mb-24"
                                    label="Email"
                                    autoFocus
                                    type="email"
                                    error={!!errors.email}
                                    helperText={errors?.email?.message}
                                    variant="outlined"
                                    required
                                    fullWidth
                                />
                            )}
                        />

                        <Controller
                            name="password"
                            control={control}
                            render={({field}) => (
                                <TextField
                                    {...field}
                                    className="mb-24"
                                    label="Password"
                                    type="password"
                                    error={!!errors.password}
                                    helperText={errors?.password?.message}
                                    variant="outlined"
                                    required
                                    fullWidth
                                />
                            )}
                        />

                        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between">
                            <Controller
                                name="remember"
                                control={control}
                                render={({field}) => (
                                    <FormControl>
                                        <FormControlLabel
                                            label="Tine-ma minte"
                                            control={<Checkbox size="small" {...field} />}
                                        />
                                    </FormControl>
                                )}
                            />

                            <Link className="text-md font-medium" to="/pages/auth/forgot-password">
                                Ai uitat parola?
                            </Link>
                        </div>

                        <Button
                            variant="contained"
                            color="secondary"
                            className=" w-full mt-16"
                            aria-label="Sign in"
                            disabled={_.isEmpty(dirtyFields) || !isValid}
                            type="submit"
                            size="large"
                        >
                            Login
                        </Button>

                    </form>

                </div>
            </Paper>

            <Box
                className="relative hidden md:flex flex-auto items-center justify-center h-full p-64 lg:px-112 overflow-hidden"
                sx={{backgroundColor: 'primary.main'}}
            >
                <svg
                    className="absolute inset-0 pointer-events-none"
                    viewBox="0 0 960 540"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="xMidYMax slice"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <Box
                        component="g"
                        sx={{color: 'primary.light'}}
                        className="opacity-20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="100"
                    >
                        <circle r="234" cx="196" cy="23"/>
                        <circle r="234" cx="790" cy="491"/>
                    </Box>
                </svg>
                <Box
                    component="svg"
                    className="absolute -top-64 -right-64 opacity-20"
                    sx={{color: 'primary.light'}}
                    viewBox="0 0 220 192"
                    width="220px"
                    height="192px"
                    fill="none"
                >
                    <defs>
                        <pattern
                            id="837c3e70-6c3a-44e6-8854-cc48c737b659"
                            x="0"
                            y="0"
                            width="20"
                            height="20"
                            patternUnits="userSpaceOnUse"
                        >
                            <rect x="0" y="0" width="4" height="4" fill="currentColor"/>
                        </pattern>
                    </defs>
                    <rect width="220" height="192" fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"/>
                </Box>

                <div className="z-10 relative w-full max-w-2xl">
                    <div className="text-7xl font-bold leading-none text-gray-100">
                        <div>Bun venit</div>
                        <div>tuiasi Hub</div>
                    </div>
                    <div className="mt-24 text-lg tracking-tight leading-6 text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida, mi a feugiat congue, est odio ullamcorper tortor, accumsan venenatis mauris mauris a metus.
                    </div>
                    <div className="flex items-center mt-32">
                        <AvatarGroup
                            sx={{
                                '& .MuiAvatar-root': {
                                    borderColor: 'primary.main',
                                },
                            }}
                        >
                            <Avatar src="assets/images/avatars/female-18.jpg"/>
                            <Avatar src="assets/images/avatars/female-11.jpg"/>
                            <Avatar src="assets/images/avatars/male-09.jpg"/>
                            <Avatar src="assets/images/avatars/male-16.jpg"/>
                        </AvatarGroup>

                        <div className="ml-16 font-medium tracking-tight text-gray-400">
                            Peste 17.000 de oameni s-au inscris, este randul tau..
                        </div>
                    </div>
                </div>
            </Box>
        </div>
    );
}

export default SignInPage;
