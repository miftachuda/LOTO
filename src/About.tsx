function AboutPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-blue-400 mb-6">About</h2>
      <div className="bg-navy-800 rounded-lg p-6 shadow-xl">
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">
              LOTO & PSPV Record System
            </h3>
            <p className="text-gray-300">
              A comprehensive solution for managing and tracking LOTO (Log Out
              Tag Out) & PSPV (Penonaktifan System Pengaman Vital). This system
              helps maintain detailed information about currently Running LOTO
              and PSPV.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Version</h3>
            <p className="text-gray-300">1.0.0</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Features</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>LOTO Records system</li>
              <li>PSPV Records system</li>
              <li>Real-time updates</li>
              <li>Responsive design</li>
              <li>Dark mode interface</li>
              <li>Data persistence</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutPage;
