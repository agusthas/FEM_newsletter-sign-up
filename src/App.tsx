import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Subscribed from "./Subscribed";
import iconList from "./assets/icon-list.svg";
import illustrationDesktop from "./assets/illustration-sign-up-desktop.svg";
import illustrationMobile from "./assets/illustration-sign-up-mobile.svg";
import EmailForm from "./components/EmailForm";

const formSchema = z.object({
  email: z.string().email({
    message: "Valid email required",
  }),
});

type FormValues = z.infer<typeof formSchema>;

function ListItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="grid grid-flow-col justify-start gap-2">
      <img src={iconList} alt="" />
      <span>{children}</span>
    </li>
  );
}

export default function App() {
  const [subscribed, setSubscribed] = useState(false);
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = () => {
    setSubscribed(true);
  };

  return (
    <main>
      {subscribed ? (
        <Subscribed
          email={form.formState.isSubmitted ? form.getValues("email") : ""}
          onDismiss={() => setSubscribed(false)}
        />
      ) : (
        <div className="bg-dark-slate-grey min-h-screen md:flex md:justify-center md:items-center">
          <h1 className="sr-only">Newsletter Sign Up</h1>

          <div className="md:flex bg-white min-h-screen md:min-h-min md:max-w-screen-lg md:p-6 md:rounded-3xl md:mx-6">
            <img src={illustrationMobile} alt="" className="md:hidden w-full" />

            <div className="px-6 py-8 md:self-center md:max-w-md md:mr-14">
              <h2 className="text-dark-slate-grey text-4xl md:text-5xl font-bold mb-4">
                Stay updated!
              </h2>
              <p className="text-charcoal-grey mb-6">
                Join 60,000+ product managers receiving monthly updates on:
              </p>
              <ul className="space-y-3 mb-6 text-charcoal-grey">
                <ListItem>Product discovery and building what matters</ListItem>
                <ListItem>Measuring to ensure updates are a success</ListItem>
                <ListItem>And much more!</ListItem>
              </ul>
              <EmailForm onSubmit={onSubmit} form={form} />
            </div>

            <img src={illustrationDesktop} alt="" className="hidden md:block" />
          </div>
        </div>
      )}
    </main>
  );
}
