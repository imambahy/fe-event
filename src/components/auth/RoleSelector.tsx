"use client";

interface RoleSelectorProps {
  selectedRole: "customer" | "organizer";
  onRoleChange: (role: "customer" | "organizer") => void;
}

export default function RoleSelector({ selectedRole, onRoleChange }: RoleSelectorProps) {
  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
        I want to register as:
      </label>
      <div className="grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={() => onRoleChange("customer")}
          className={`p-4 rounded-lg border-2 transition-all duration-200 ${
            selectedRole === "customer"
              ? "border-purple-500 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300"
              : "border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500"
          }`}
        >
          <div className="text-center">
            <div className="text-lg font-semibold mb-1">Customer</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              Attend events
            </div>
          </div>
        </button>
        <button
          type="button"
          onClick={() => onRoleChange("organizer")}
          className={`p-4 rounded-lg border-2 transition-all duration-200 ${
            selectedRole === "organizer"
              ? "border-purple-500 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300"
              : "border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500"
          }`}
        >
          <div className="text-center">
            <div className="text-lg font-semibold mb-1">Organizer</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              Create events
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
