import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import TextInputField from "./components/common/TextInput"; // Adjust the import path based on your project structure
import { LoginSchema, LoginValidationSchema } from "./validations/auth/user"; // Adjust the import path based on your project structure
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { handleError } from "./utils/handle-error"; // Adjust the import path based on your project structure
import toast from "react-hot-toast";
import { Spinner } from "react-bootstrap";
import { config } from "./utils/constants"; // Adjust the import path based on your project structure
import { Link } from "react-router-dom";
import WithoutAuth from "./components/auth/WithoutAuth"; // Adjust the import path based on your project structure

const Login = () => {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<LoginSchema>({ resolver: zodResolver(LoginValidationSchema) });

    // const submitHandler = async (data: LoginSchema) => {
    //     try {
    //         const apiData = await axios({
    //             method: "POST",
    //             url: `${process.env.REACT_APP_BASE_URL}api/v1/login`,
    //             data,
    //         });

    //         if (apiData?.data?.status) {
    //             localStorage.setItem(
    //                 config.LOCAL_STORAGE_VARIABLES.ACCESS_TOKEN,
    //                 apiData?.data?.data?.token,
    //             );
    //             localStorage.setItem(
    //                 config.LOCAL_STORAGE_VARIABLES.USER_FULLNAME,
    //                 apiData?.data?.data?.name,
    //             );

    //             toast.success(apiData?.data.message);
    //             navigate("/actual-master");
    //         }
    //     } catch (error) {
    //         handleError(error.response?.data?.message);
    //     }
    // };

    return (
        <div className="login-section">
            <section className="p-login-section">
                <div className="p-login-left">
                    <div className="p-login-left-content">
                        <div className="p-login-title d-flex">
                            <h4>
                                <span className="badge badge-secondary">PMO</span>
                            </h4>
                            <h4 className="login-title">PMO Tool</h4>
                        </div>
                        <form className="t-login-field" onSubmit={handleSubmit(submitHandler)}>
                            <div className="p-form-group">
                                <TextInputField
                                    className="p-input"
                                    labelClass="p-label"
                                    label="E-mail"
                                    errorMsg={errors?.email?.message}
                                    placeholder="Enter here"
                                    required
                                    {...register("email")}
                                />
                            </div>
                            <div className="p-form-group1">
                                <TextInputField
                                    className="p-input"
                                    labelClass="p-label"
                                    label="Password"
                                    errorMsg={errors?.password?.message}
                                    placeholder="Enter here"
                                    required
                                    type="password"
                                    {...register("password")}
                                />
                                <div className="p-forgot-password">
                                    <Link className="p-forgot-password1" to="/forgot-password">
                                        Forgot Password?
                                    </Link>
                                </div>
                            </div>
                            <div className="p-form-group2">
                                <button
                                    type="submit"
                                    className={`p-submit-btn ${
                                        isSubmitting ? "" : "v-fill-btn-hover"
                                    }`}
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? <Spinner variant="light" /> : "Log in"}
                                </button>
                            </div>
                            <div className="p-signup">
                                <p>
                                    Don&apos;t have an account?&nbsp;
                                    <Link className="p-signup1" to="/">
                                        Sign up
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="p-right-content">
                    <img src="./images/OBJECTS.png" alt="" />
                </div>
            </section>
        </div>
    );
};

export default Login;
