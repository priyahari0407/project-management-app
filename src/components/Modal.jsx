import React from "react";
import { useRef, useImperativeHandle } from "react";
import Input from "./common/Input";
export default function Modal({ reference, onAdd, onCancel }) {
  const dialog = useRef();
  useImperativeHandle(reference, () => {
    return {
      //user defined method
      open() {
        dialog.current?.showModal();
      },
    };
  }); // define properties and methods accssible from outside this component. not used often

  const titleRef = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave(e) {
    const enteredTitle = titleRef.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    console.log(enteredTitle, enteredDescription, enteredDueDate);
    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      //show Error modal
      alert("Please fill all the fields");
      return;
    }
    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
    clearForm();
  }

  function clearForm() {
    titleRef.current.value = "";
    description.current.value = "";
    dueDate.current.value = "";
  }
  function handleCancel() {
    clearForm();
    onCancel();
  }
  return (
    // <div className='w-[35rem] mt-16'>
    <dialog
      ref={dialog}
      className="result-modal fixed inset-0 p-4 rounded-lg shadow-lg w-[35rem] max-w-full"
    >
      <form method="dialog">
        <Input type="text" ref={titleRef} label="Title" />
        <Input ref={description} label="Category" textarea="true" />
        <Input type="date" ref={dueDate} label="Due Date" />

        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              onClick={handleCancel}
            >
              Close
            </button>
          </li>
        </menu>
      </form>
    </dialog>
    // </div>
  );
}
