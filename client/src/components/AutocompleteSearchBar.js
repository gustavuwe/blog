const AutocompleteSearchBar = ({ value, setValue }) => {
  return (
    <div
      style={{
        padding: "12px",
        borderRadius: "8px",
        border: "1px solid #ccc",
        width: "300px",
        display: "flex",
        justifyContent: "start",
        gap: "0.5em",
        alignItems: "center",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)", // Add this line for box shadow
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>

      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{
          width: "100%",
          border: "none",
          zIndex: "1",
        }}
      />
    </div>
  );
};
export default AutocompleteSearchBar;
