function LibraryTitle({ className, methodName }) {
  return (
    <div className="mb-3">
      <h3>
        {className}::<span className="text-lion-orange h3">{methodName}()</span>
      </h3>

      <hr />
    </div>
  );
}

export default LibraryTitle;
