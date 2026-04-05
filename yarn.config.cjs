// @ts-check

const { defineConfig } = require(`@yarnpkg/types`);

/**
 * @typedef {import('@yarnpkg/types').Yarn.Constraints.Context} Context
 */

/**
 * @param {Context['Yarn']} Yarn
 */
const enforceConsistentNodeVersion = (Yarn) => {
  for (const workspace of Yarn.workspaces()) {
    workspace.set("engines.node", `24`);
  }
};

module.exports = defineConfig({
  /**
   * @param {Context} Context
   */
  async constraints({ Yarn }) {
    enforceConsistentNodeVersion(Yarn);
  }
});
