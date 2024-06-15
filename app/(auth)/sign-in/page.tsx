import AuthForm from "@/components/AuthForm";

const SignIn = () => {
  return (
    <section
      className="flex-center size-full max-sm:px-6 relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${"/icons/bg6.jpg"})` }}
    >
      <AuthForm type="sign-in" />
    </section>
  );
};

export default SignIn;
