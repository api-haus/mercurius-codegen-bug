import mercuriusCodegen from "mercurius-codegen";
import {app, setup} from "../app";

void (async() => {
  await setup();

  await app.listen(0);
})();
