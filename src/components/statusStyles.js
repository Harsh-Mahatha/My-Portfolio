const STATUS_STYLES = {
  Live: "bg-green-500/20 text-green-400 border border-green-500/30",
  "In Progress": "bg-amber-500/20 text-amber-400 border border-amber-500/30",
  Completed: "bg-blue-500/20 text-blue-400 border border-blue-500/30",
};

export const getStatusClass = (status) =>
  STATUS_STYLES[status] || STATUS_STYLES.Completed;
