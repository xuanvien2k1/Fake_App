import Notice from "./Notice/Notice";

function DeleteNotice({ triggle, closeModal }) {
  return triggle ? <Notice closeModal={closeModal} /> : null;
}

export default DeleteNotice;
