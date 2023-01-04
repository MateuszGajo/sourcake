import { Box, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Link as RouterLink } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";
import { Creds } from "../../../application/domain/auth/authEntity";
import { useAuthViewModel } from "../../../application/controller/auth/AuthViewModel";

const schema = yup.object({
  login: yup.string().required("Field is required"),
  password: yup.string().required("Field is required"),
});

const SignIn = () => {
  const { t } = useTranslation();
  const {
    handleSubmit,
    register,
    formState: { errors, isValid, isDirty },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { login: "", password: "" },
  });

  const { login, me } = useAuthViewModel();

  console.log(me);

  const onSubmit = (data: Creds) => {
    login(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography
        component="h2"
        variant="h5"
        textAlign="center"
        marginBottom={2}
      >
        {t("auth:signin.title")}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            defaultValue="Hello World"
            label="login"
            {...register("login")}
            error={!!errors.login}
            helperText={errors.login?.message}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            label="Hasło"
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
        </Grid>
      </Grid>
      <Box display="flex" justifyContent="center" marginTop={3}>
        <Button
          variant="contained"
          type="submit"
          disabled={!isDirty || !isValid}
        >
          Zaloguj się
        </Button>
      </Box>
      <Box marginTop={2}>
        <Typography variant="body1" textAlign="center">
          Nie masz konta?
          <Link component={RouterLink} to="/register" marginLeft={0.5}>
            Zarejstruj się
          </Link>
        </Typography>
      </Box>
    </form>
  );
};

export default SignIn;
