"use client";

interface EventTabsProps {
  selectedTab: "description" | "tickets";
  onTabChange: (tab: "description" | "tickets") => void;
}

export default function EventTabs({ selectedTab, onTabChange }: EventTabsProps) {
  return (
    <div className="flex border-b mb-6">
      <button
        onClick={() => onTabChange("description")}
        className={`px-6 py-3 font-medium ${
          selectedTab === "description"
            ? "border-b-2 border-purple-600 text-purple-600"
            : "text-gray-500 hover:text-gray-700"
        }`}
      >
        Description
      </button>
      <button
        onClick={() => onTabChange("tickets")}
        className={`px-6 py-3 font-medium ${
          selectedTab === "tickets"
            ? "border-b-2 border-purple-600 text-purple-600"
            : "text-gray-500 hover:text-gray-700"
        }`}
      >
        Tickets
      </button>
    </div>
  );
}
