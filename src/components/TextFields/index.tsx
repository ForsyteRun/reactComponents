const TextFields = () => {
  return (
    <>
      <label>
        <input type="text" name="name" placeholder="Name" />
      </label>
      <label>
        <input type="number" name="age" placeholder="Age" />
      </label>
      <label>
        <input type="email" name="email" placeholder="Email" />
      </label>
      <label>
        <input type="password" name="password" placeholder="Password" />
      </label>
      <label>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
        />
      </label>
    </>
  );
};

export default TextFields;
