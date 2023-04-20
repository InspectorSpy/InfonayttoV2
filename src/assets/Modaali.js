function Modaali({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="modaali-overlay">
      <div className="modaali">
        <div className="modaali-content">{children}</div>
        <button className="modaali-close" onClick={onClose}>
          Sulje
        </button>
      </div>
    </div>
  );
}

export default Modaali;
