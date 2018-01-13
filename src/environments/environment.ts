import { User } from "../app/Models/User";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

const user = ({
  id: "1",
  name: "Carolina B.",
  pin: "1234",
  image: "./data/carolina.bernardo.jpg"
} as User);


export const environment = {
  production: false,
  loggedInUser: user,
  activeAction: 0
};
