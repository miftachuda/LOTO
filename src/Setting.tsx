function SettingsPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-blue-400 mb-6">Settings</h2>
      <div className="bg-navy-800 rounded-lg p-6 shadow-xl">
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">Global Settings</h3>
            <div className="space-y-4">
              <div>
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-600"
                  />
                  <span>Enable notifications</span>
                </label>
              </div>
              <div>
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-600"
                  />
                  <span>Dark mode</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SettingsPage;
