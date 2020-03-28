export default function formatValue(value) {
  return value.replace(/\D/g, "").replace(/(\d{1})(\d{1,2})$/, "$1.$2");
}
