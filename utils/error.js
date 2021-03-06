export default function catchErrorsFrom(handler) {
  return async (req, res) => {
    return handler(req, res).catch((error) => {
      console.error(error);
      return res.status(500).send(error.message || error);
    });
  };
}
