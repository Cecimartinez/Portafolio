export const Modal = ({ isOpen, onClose, children }) => {
  const modalClasses = isOpen
    ? "   fixed inset-0 flex items-center justify-center z-50 overflow-x-hidden overflow-y-auto bg-[#3a3a3a4f]"
    : "hidden ";

  return (
    <div className={modalClasses}>
      <div
        className="modal-overlay opacity-100 transition-all de ease-in-out duration-700 delay-300 "
        onClick={onClose}
      ></div>
      <div
        className={`ease-in-out duration-700 delay-300 ${
          isOpen &&
          "modal-container mx-4  sm:mx-auto sm:w-2/3 lg:w-1/2 xl:w-1/3 bg-white transition-all rounded-lg p-4 shadow-lg opacity-100 duration-700"
        }`}
      >
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};
