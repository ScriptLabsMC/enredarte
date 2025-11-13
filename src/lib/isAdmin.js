/**
 * @param {Request} req - La solicitud entrante.
 * @returns {boolean} - True si la API key es válida, false si no.
 */
export function isAdmin(req) {
  const key = req.headers.get("x-api-key");
  return key && key === process.env.API_KEY;
}
