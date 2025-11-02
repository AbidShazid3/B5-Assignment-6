import RegisterForm from "@/components/modules/Authentication/RegisterForm";
import register from "../../assets/images/login.jpg";
import BrandLogo from "@/components/Layout/BrandLogo";

const Register = () => {
    return (
        <div>
            <div className="grid min-h-svh lg:grid-cols-2">
                <div className="bg-muted relative hidden lg:block">
                    <img
                        src={register}
                        alt="Image"
                        className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.3]"
                    />
                </div>
                <div className="flex flex-col gap-4 p-6 md:p-10">
                    <div className="flex justify-center gap-2 md:justify-start">
                        <BrandLogo/>
                    </div>
                    <div className="flex flex-1 items-center justify-center">
                        <div className="w-full max-w-xs">
                            <RegisterForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;