import iconSuccess from "./assets/icon-success.svg";
import PrimaryButton from "./components/PrimaryButton";

interface SubscribedProps {
  email: string;
  onDismiss: () => void;
}

export default function Subscribed({ onDismiss, email }: SubscribedProps) {
  return (
    <div className="fixed inset-0 bg-dark-slate-grey flex justify-center items-center">
      {/* Start Modal */}
      <div className="bg-white p-6 min-h-full md:min-h-0 md:max-w-md md:px-14 md:py-14 md:rounded-3xl flex flex-col justify-center">
        <div className="mt-auto">
          <img src={iconSuccess} alt="" />
          <h2 className="text-dark-slate-grey text-4xl md:text-5xl font-bold mb-4 mt-8">
            Thanks for subscribing!
          </h2>
          <p className="text-charcoal-grey mb-6 md:mb-10">
            A confirmation email has been sent to <strong>{email}</strong>.
            Please open it and click the button inside to confirm your
            subscription.
          </p>
        </div>

        <PrimaryButton className="mt-auto" onClick={onDismiss}>
          Dismiss message
        </PrimaryButton>
      </div>
    </div>
  );
}
