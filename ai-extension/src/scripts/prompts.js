/**
 * Collection of default prompts for different use cases (ICE POT Format)
 */
/**
 * Collection of default prompts for different use cases (simplified)
 */
export const DEFAULT_PROMPTS = {
  SELENIUM_JAVA_PAGE_ONLY: `Generate a Selenium Java Page Object class (no tests).\nUse JavaDoc and clear method names.\nDOM: \${domContent}`,

  CUCUMBER_ONLY: `Generate a Cucumber feature file using Scenario Outline and Examples.\nUse realistic South India sample data where applicable.\nDOM: \${domContent}`,

  CUCUMBER_WITH_SELENIUM_JAVA_STEPS: `Generate a Cucumber feature file and corresponding Java step definitions using Selenium.\nInclude WebDriver setup, explicit waits and runnable step definitions.\nDOM: \${domContent}\nURL: \${pageUrl}`,

  PLAYWRIGHT_TYPESCRIPT_PAGE_ONLY: `Generate a Playwright TypeScript Page Object class (no tests).\nInclude TSDoc comments, Playwright Page usage, and typed methods.\nDOM: \${domContent}`,
};

/**
 * Helper function to escape code blocks in prompts
 */
function escapeCodeBlocks(text) {
  return text.replace(/```/g, '\\`\\`\\`');
}

/**
 * Function to fill template variables in a prompt
 */
export function getPrompt(promptKey, variables = {}) {
  let prompt = DEFAULT_PROMPTS[promptKey];
  if (!prompt) {
    throw new Error(`Prompt not found: ${promptKey}`);
  }

  Object.entries(variables).forEach(([k, v]) => {
    const regex = new RegExp(`\\$\\{${k}\\}`, 'g');
    prompt = prompt.replace(regex, v);
  });

  return prompt.trim();
}

export const CODE_GENERATOR_TYPES = {
  SELENIUM_JAVA_PAGE_ONLY: 'Selenium-Java-Page-Only',
  CUCUMBER_ONLY: 'Cucumber-Only',
  CUCUMBER_WITH_SELENIUM_JAVA_STEPS: 'Cucumber-With-Selenium-Java-Steps',
  PLAYWRIGHT_TYPESCRIPT_PAGE_ONLY: 'Playwright-Typescript-Page-Only',
};

