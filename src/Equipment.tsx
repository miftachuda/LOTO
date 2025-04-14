import { PlusCircle, Trash2, Settings2 } from "lucide-react";
import Equipment from "./Equipment_Interface";
function formatTimeAgo(date: Date): string {
  const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
  };

  for (const [unit, secondsInUnit] of Object.entries(intervals)) {
    const interval = Math.floor(seconds / secondsInUnit);
    if (interval >= 1) {
      return `${interval} ${unit}${interval === 1 ? "" : "s"} ago`;
    }
  }
  return "just now";
}

function EquipmentPage({
  equipments,
  handleDelete,
  handleSubmit,
  formData,
  setFormData,
}: {
  equipments: Equipment[];
  handleDelete: (id: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
  formData: Omit<Equipment, "id" | "createdAt">;
  setFormData: React.Dispatch<
    React.SetStateAction<Omit<Equipment, "id" | "createdAt">>
  >;
}) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-blue-400 mb-6">
        Equipment Library
      </h2>
      <div className="bg-navy-800 rounded-lg p-4 lg:p-6 mb-8 shadow-xl">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Tag Number
              </label>
              <input
                type="text"
                value={formData.tagNumber}
                onChange={(e) =>
                  setFormData({ ...formData, tagNumber: e.target.value })
                }
                className="w-full bg-navy-700 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Voltage Rating
              </label>
              <input
                type="text"
                value={formData.voltageRating}
                onChange={(e) =>
                  setFormData({ ...formData, voltageRating: e.target.value })
                }
                className="w-full bg-navy-700 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Power Rating
              </label>
              <input
                type="text"
                value={formData.powerRating}
                onChange={(e) =>
                  setFormData({ ...formData, powerRating: e.target.value })
                }
                className="w-full bg-navy-700 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">RPM</label>
              <input
                type="text"
                value={formData.rpm}
                onChange={(e) =>
                  setFormData({ ...formData, rpm: e.target.value })
                }
                className="w-full bg-navy-700 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Flow Rate
              </label>
              <input
                type="text"
                value={formData.flowRate}
                onChange={(e) =>
                  setFormData({ ...formData, flowRate: e.target.value })
                }
                className="w-full bg-navy-700 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Pressure</label>
              <input
                type="text"
                value={formData.pressure}
                onChange={(e) =>
                  setFormData({ ...formData, pressure: e.target.value })
                }
                className="w-full bg-navy-700 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Description
            </label>
            <textarea
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              className="w-full bg-navy-700 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              rows={3}
              required
            />
          </div>
          <button
            type="submit"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
          >
            <PlusCircle className="w-5 h-5" />
            Add Equipment
          </button>
        </form>
      </div>

      <div className="space-y-4">
        {equipments.map((equipment) => (
          <div
            key={equipment.id}
            className="bg-navy-800 rounded-lg p-4 lg:p-6 shadow-xl hover:shadow-2xl transition-shadow"
          >
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0 mb-4">
              <div className="flex items-center gap-2">
                <Settings2 className="w-5 h-5 text-blue-400" />
                <h3 className="text-xl font-semibold text-blue-400">
                  {equipment.tagNumber}
                </h3>
              </div>
              <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                <span className="text-sm text-gray-400">
                  {formatTimeAgo(equipment.createdAt)}
                </span>
                <button
                  onClick={() => handleDelete(equipment.id)}
                  className="text-red-400 hover:text-red-300 transition-colors"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
              <div>
                <p className="text-sm text-gray-400">Voltage Rating</p>
                <p className="font-medium">{equipment.voltageRating}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Power Rating</p>
                <p className="font-medium">{equipment.powerRating}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">RPM</p>
                <p className="font-medium">{equipment.rpm}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Flow Rate</p>
                <p className="font-medium">{equipment.flowRate}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Pressure</p>
                <p className="font-medium">{equipment.pressure}</p>
              </div>
            </div>
            <p className="text-sm text-gray-300">{equipment.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default EquipmentPage;
