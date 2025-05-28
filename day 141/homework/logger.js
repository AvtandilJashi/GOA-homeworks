export function logInfo(msg) {
  console.log(`ℹ️ INFO: ${msg}`);
}

export function logError(msg) {
  console.log(`❌ ERROR: ${msg}`);
}

export default function logAll(msg) {
  logInfo(msg);
  logError(msg);
}
