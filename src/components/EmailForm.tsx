import { UseFormReturn } from "react-hook-form";
import { cn } from "../lib/utils";
import PrimaryButton from "./PrimaryButton";

interface EmailFormProps {
  form: UseFormReturn<{
    email: string;
  }>;
  onSubmit: () => void;
}

export default function EmailForm({ onSubmit, form }: EmailFormProps) {
  return (
    <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
      <div className="mb-2 flex items-center justify-between font-bold text-sm">
        <label htmlFor="email" className="text-dark-slate-grey">
          Email address
        </label>
        {form.formState.errors.email && (
          <span className="text-tomato text-sm">
            {form.formState.errors?.email?.message}
          </span>
        )}
      </div>

      <input
        type="email"
        id="email"
        className={cn(
          "rounded-lg w-full text-dark-slate-grey px-6 py-5 border-grey focus:ring-dark-slate-grey focus:outline-none focus:border-dark-slate-grey",
          form.formState.errors.email &&
            "bg-tomato/10 border-tomato text-tomato focus:ring-tomato focus:outline-none focus:border-tomato"
        )}
        placeholder="email@company.com"
        {...form.register("email")}
      />
      <PrimaryButton type="submit">
        Subscribe to monthly newsletter
      </PrimaryButton>
    </form>
  );
}
