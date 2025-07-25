export default function Login() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Login</h2>
      <form className="space-y-4 max-w-sm">
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
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
}
