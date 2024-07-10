"use client";

import { useToast } from "@/components/ui/use-toast";
import { Toast, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from "@/components/ui/toast";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({ id, firstName, lastName, email, password, action, ...props }) {
        const hiddenPassword = password.replace(/./g, "*");
        return (
          <Toast key={id} {...props} className="my-2">
            <div className="grid gap-1">
              <ToastTitle className="text-green-400">Success</ToastTitle>
              <ToastDescription>
                First Name: <span className="font-normal opacity-80">{firstName}</span>
              </ToastDescription>
              <ToastDescription>
                Last Name: <span className="font-normal opacity-80">{lastName}</span>
              </ToastDescription>
              <ToastDescription>
                Email Address: <span className="font-normal opacity-80">{email}</span>
              </ToastDescription>
              <ToastDescription>
                Password: <span className="font-normal opacity-80">{hiddenPassword}</span>
              </ToastDescription>
            </div>
            {action}
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
