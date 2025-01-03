export const formatValue = (value: string, unit?: string) => {
  if (value === "unknown") return "Unknown";
  const numberValue = parseInt(value);
  return `${numberValue.toLocaleString()}${unit ? ` ${unit}` : ""}`;
};
