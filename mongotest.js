const mongoose = require("mongoose");
const dotenv = require('dotenv/config');

(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      keepAliveInitialDelay: true,
    });

    console.log("[Db] Conectado a la base de datos");

    
  } catch (e) {
    console.error("[Db] Error al conectar a la base de datos: ", e);
  }
})();