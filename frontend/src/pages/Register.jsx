export default function Register() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Register</h2>
      <form className="space-y-4 max-w-sm">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-2 border rounded"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
          Register
        </button>
      </form>
    </div>
  );
}
