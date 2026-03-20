import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: "ozsvr5j0",
    dataset: "production",
  },
  deployment: {
    appId: "abd3c3852528cbf135ec498b",
    autoUpdates: false,
  },
});
