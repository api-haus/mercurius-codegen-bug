import mercuriusCodegen from "mercurius-codegen";
import {app, setup} from "../app";

void (async() => {
  await setup();

  await mercuriusCodegen(app, {
    targetPath: './src/generated.ts',
  }).catch((err) => {
    app.log.error(err);
  });
})();
