import React, { useEffect } from "react";

export default function Toast({ message, show, onClose }) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div
      className="toast-container position-fixed bottom-0 end-0 p-3"
      style={{ zIndex: 1100 }}
    >
      <div
        className="toast show align-items-center text-white bg-success border-0 shadow-lg"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="d-flex justify-content-between">
          <div className="toast-body fw-semibold">{message}</div>
          <button
            type="button"
            className="btn-close btn-close-white my-auto px-2"
            onClick={onClose}
            aria-label="بستن"
          ></button>
        </div>
      </div>
    </div>
  );
}
