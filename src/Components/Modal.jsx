import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import SecondaryButton from "./SecondaryButton";
import PrimaryButton from "./PrimaryButton";

export default function Modal({
  title = "Modal Title",
  close = () => {},
  show = true,
  children = null,
  okAction = () => {},
  customOk = null,
  maxWidth = "max-w-3xl",
}) {
  return (
    <>
      <Transition appear show={show} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={close}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900 bg-opacity-70" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center sm:p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className={`w-full ${maxWidth} transform overflow-hidden rounded-xl bg-white dark:bg-gray-800 p-6 text-left align-middle shadow-xl transition-all`}
                >
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-200"
                  >
                    {title}
                  </Dialog.Title>
                  <div className="mt-2">{children}</div>

                  <div className="mt-4 flex justify-end gap-3">
                    {customOk ? (
                      customOk
                    ) : (
                      <PrimaryButton onClick={okAction}>Continue</PrimaryButton>
                    )}
                    <SecondaryButton type="button" onClick={close}>
                      Close
                    </SecondaryButton>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
