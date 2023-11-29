const TextFields = () => {
  return (
    <>
      <label>
        <input type="text" name="name" placeholder="Name" />
      </label>
      <label>
        <input type="number" placeholder="Age" />
      </label>
      <label>
        <input type="email" placeholder="Email" />
      </label>
      <label>
        <input type="password" placeholder="Password" />
      </label>
      <label>
        <input type="password" placeholder="Confirm Password" />
      </label>
    </>
  );
};

export default TextFields;
