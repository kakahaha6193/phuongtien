import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { useUserActions, useAlertActions } from '_actions';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const theme = createTheme();
export { Register };

function Register() {
    const userActions = useUserActions();
    const alertActions = useAlertActions();
    let navigate = useNavigate();
    // form validation rules 
    // const validationSchema = Yup.object().shape({
    //     firstName: Yup.string()
    //         .required('First Name is required'),
    //     lastName: Yup.string()
    //         .required('Last Name is required'),
    //     username: Yup.string()
    //         .required('Username is required'),
    //     password: Yup.string()
    //         .required('Password is required')
    //         .min(6, 'Password must be at least 6 characters')
    // });
    // const formOptions = { resolver: yupResolver(validationSchema) };

    // // get functions to build form with useForm() hook
    // const { register, handleSubmit, formState } = useForm(formOptions);
    // const { errors, isSubmitting } = formState;

    // function onSubmit(data) {
    //     return userActions.register(data)
    //         .then(() => {
    //             navigate('/account/login')
    //             // history.push('/account/login');
    //             alertActions.success('Registration successful');
    //         })
    // }
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log(
          data
        );
    };
    return (
        <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="sm">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="fullName"
                    required
                    fullWidth
                    id="fullName"
                    label="Họ Tên"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    autoComplete="family-name"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="phoneNumber"
                    type="number"
                    required
                    fullWidth
                    id="phoneNumber"
                    label="Số điện thoại"
                    
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    id="storeName"
                    label="Tên cửa hàng"
                    name="storeName"
                    autoComplete="family-name"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="cityName"
                    fullWidth
                    id="cityName"
                    label="Tên thành phố"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    select
                    id="vehicleTypeSelect"
                    label="Loại phương tiện"
                    defaultValue=""
                    fullWidth
                  >
                      <MenuItem value={0}>Xe đạp</MenuItem>
                      <MenuItem value={1}>Xe máy</MenuItem>
                      <MenuItem value={2}>Ô tô</MenuItem>
                  </TextField>
                  
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    name="address"
                    label="Địa chỉ chi tiết"
                    id="address"
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox id="agreeTerm" name="agreeTerm" color="primary" />}
                    label={<Typography variant="caption" color="textSecondary">
                      <span>Tôi đồng ý với </span>
                      <Link to={'/terms'} onClick={(e) => {
                        e.preventDefault();
                      }}>quy định sử dụng</Link>
                      <span> và </span>
                      <Link to={'/privacy'} onClick={(e) => {
                        e.preventDefault();
                      }}>chính sách bảo mật</Link>
                      <span> của </span>
                  </Typography>}
                  />
                 
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link  variant="body2" onClick={() => {
                      navigate('/account/login')
                  }}>
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Container>
      </ThemeProvider>
        // <div className="card m-3">
        //     <h4 className="card-header">Register</h4>
        //     <div className="card-body">
        //         <form onSubmit={handleSubmit(onSubmit)}>
        //             <div className="form-group">
        //                 <label>First Name</label>
        //                 <input name="firstName" type="text" {...register('firstName')} className={`form-control ${errors.firstName ? 'is-invalid' : ''}`} />
        //                 <div className="invalid-feedback">{errors.firstName?.message}</div>
        //             </div>
        //             <div className="form-group">
        //                 <label>Last Name</label>
        //                 <input name="lastName" type="text" {...register('lastName')} className={`form-control ${errors.lastName ? 'is-invalid' : ''}`} />
        //                 <div className="invalid-feedback">{errors.lastName?.message}</div>
        //             </div>
        //             <div className="form-group">
        //                 <label>Username</label>
        //                 <input name="username" type="text" {...register('username')} className={`form-control ${errors.username ? 'is-invalid' : ''}`} />
        //                 <div className="invalid-feedback">{errors.username?.message}</div>
        //             </div>
        //             <div className="form-group">
        //                 <label>Password</label>
        //                 <input name="password" type="password" {...register('password')} className={`form-control ${errors.password ? 'is-invalid' : ''}`} />
        //                 <div className="invalid-feedback">{errors.password?.message}</div>
        //             </div>
        //             <button disabled={isSubmitting} className="btn btn-primary">
        //                 {isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
        //                 Register
        //             </button>
        //             <Link to="/account/login" className="btn btn-link">Cancel</Link>
        //         </form>
        //     </div>
        // </div>
    )
}
