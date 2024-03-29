function handleError(error, req, res, next) {
  res.status(500);
  console.error(error);

  const message = error.message;

  const unauthorizedIdentifier = "Unauthorized";
  if (message && message.startsWith(unauthorizedIdentifier)) {
    res.status(401);
  } else if (message && message.includes("not found")) {
    res.status(404);
  }

  res.json({ message, success: false });
}

module.exports = handleError;
