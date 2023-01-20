import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Map from "./Map";

export default function MyModal({ text }) {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="z-[9]">
        <div
          data-name={text}
          type="button"
          onClick={openModal}
          className=" text-head text-left animation relative "
        >
          {text}
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-[99999999999999]"
          onClose={closeModal}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed backdrop-blur-sm inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className=" md:w-8/12 w-full relative 2xl:w-[1200px] sm:w-10/12 transform overflow-hidden rounded-xl bg-white text-left align-middle shadow-xl transition-all">
                  <button
                    onClick={closeModal}
                    className="w-10 absolute rounded-full shadow-lg right-0 h-10 bg-primary-light text-sm font-Poppins font-bold sm:text-base lg:text-xl flex items-center justify-center text-primary-dark dark:bg-primary-dark dark:text-primary-light"
                  >
                    X
                  </button>
                  <Map />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
