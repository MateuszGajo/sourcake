import { Box, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Link as RouterLink } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";
import { user } from "../../../store/user";
import { useAtom } from "jotai";

const SignIn = () => {
  const [userr, setUser] = useAtom(user);
  const { t } = useTranslation();

  const schema = yup.object({
    login: yup.string().required(t("common:form.fieldRequired") as string),
    password: yup.string().required("Field is required"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors, isValid, isDirty },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { login: "", password: "" },
    mode: "onChange",
  });

  const onSubmit = (data: any) => {
    console.log(data);
    setUser(data);
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
            // defaultValue={t("common:form.login")}
            label={t("common:form.login")}
            {...register("login")}
            error={!!errors.login}
            helperText={errors.login?.message}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            label={t("common:form.password")}
            defaultValue={t("common:form.password")}
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
          {t("common:form.login")}
        </Button>
      </Box>
      <Box marginTop={2}>
        <Typography variant="body1" textAlign="center">
          {t("common:form.dontHaveAccount")}?
          <Link component={RouterLink} to="/register" marginLeft={0.5}>
            {t("common:form.register")}
          </Link>
        </Typography>
      </Box>
    </form>
  );
};

export default SignIn;
