**Expert**: Linguist and Technology Expert
**Objective**: Provide a verbatim English translation of the given Chinese text.
**Assumptions**: The text relates to the features and configuration of a ChatGPT-like project with various plugins and deployment instructions.

### Accurate English Translation of Chinese Text:

**Main Features**
Apart from plugin tools, it maintains consistency with the original project ChatGPT-Next-Web's main features. Plugin functionality implemented based on LangChain currently supports the following plugins, with more to be added in the future:
- Search
  - SerpAPI
  - BingSerpAPI
  - DuckDuckGo
- Calculation
  - Calculator
- Web Requests
  - WebBrowser
- Others
  - Wiki
  - DALL-E 3
  - DALL-E 3 plugin requires R2 storage configuration, please refer to the Cloudflare R2 service configuration guide for setup.
- StableDiffusion
  - This plugin is currently in a test version and may undergo significant changes in the future, please use with caution.
  - Using this plugin requires certain expertise; issues related to Stable Diffusion itself are not covered in this project. If you decide to use this plugin, please configure it following the Stable Diffusion Plugin Configuration Guide.
  - StableDiffusion plugin requires R2 storage configuration, please refer to the Cloudflare R2 service configuration guide for setup.
- Arxiv

**Development Plans**
- Support DuckDuckGo as the default search engine.
- When SERPAPI_API_KEY is configured, SerpAPI is used as the search plugin by default. If not configured, DuckDuckGo is used by default.
- When BING_SEARCH_API_KEY is configured, BingSerpAPI is used as the search plugin by default. If not configured, DuckDuckGo is used by default.
- Priority: SerpAPI > BingSerpAPI > DuckDuckGo
- Development of the plugin list page.
- Support for toggling specific plugins.
- Support for adding custom plugins.
- Support for Agent parameter configuration (agentType, maxIterations, returnIntermediateSteps, etc.).
- Support for ChatSession level plugin functionality toggle.
- Plugin toggle appears only when using models other than 0301 and 0314; other models default to closed status, and the toggle will not display.

**Known Issues**
- When using plugins, you need to switch to the 0613 version model, such as gpt-3.5-turbo-0613.
- Attempts to use agents like chat-conversational-react-description with plugins are not ideal, and support for other versions of the model is no longer considered.
- Limitations modified so that models other than 0301 and 0314 can call plugins. #10
- SERPAPI_API_KEY is currently required, but support for using DuckDuckGo to replace the search plugin will be added later.
- Agent does not support custom interface addresses.
- Plugins may fail in some scenarios.
- Issue occurs due to parameter errors when using the Calculator for calculations, currently unable to intervene.
- No feedback after plugin call failure.

**Latest Updates**
- 🚀 v2.9.6 version released.
- 🚀 v2.9.5 official version released.
- 🚀 v2.9.1-plugin-preview preview version released.

**Getting Started**
- Prepare your OpenAI API Key.
- Click the button on the right to start deployment: Deploy with Vercel, log in directly with your Github account, remember to fill in the API Key and page access password CODE on the environment variable page.
- After deployment, you can start using it.
- (Optional) Bind a custom domain: DNS of the domain assigned by Vercel may be contaminated in some areas, binding a custom domain can directly connect.

**FAQ**
- Simplified Chinese > Frequently Asked Questions
- English > FAQ
- Azure OpenAI

**Configure Page Access Password**
After configuring the password, users need to manually fill in the access code on the settings page to chat normally, otherwise, they will be prompted with an unauthorized status message.
Warning: Please set the password long enough, preferably more than 7 characters, to prevent brute force attacks.
This project provides limited permission control functionality, please add an environment variable named CODE on the Vercel project control panel's environment variable page, with values separated by English commas for custom passwords:
- code1,code2,code3
After adding or modifying this environment variable, please redeploy the project to make the changes take effect.

**Environment Variables**
Most of the project's configuration items are set through environment variables, tutorial: How to modify Vercel environment variables.

- OPENAI_API_KEY (mandatory)
  - OpenAI key, your api key applied on the openai account page.
- SERPAPI_API_KEY (optional)
  - SerpApi: Google Search API
- BING_SEARCH_API_KEY (optional)
 

 - Web Search API | Microsoft Bing
- CHOOSE_SEARCH_ENGINE (optional)
  - This item is for direct connection search engines, avoiding the trouble of small api trial amounts, but may not work due to network issues.
  - Optional items include:
    - google
    - baidu
- CODE (optional)
  - Access password, optional, multiple passwords can be separated by commas.
  - Warning: If this item is not filled, anyone can directly use your deployed website, which may lead to rapid depletion of your token, it's recommended to fill this option.
- BASE_URL (optional)
  - Default: https://api.openai.com
  - Examples: http://your-openai-proxy.com
  - OpenAI interface proxy URL, if you have manually configured an openai interface proxy, please fill this option.
  - If encountering SSL certificate issues, set the BASE_URL protocol to http.
- OPENAI_ORG_ID (optional)
  - Specifies the organization ID in OpenAI.
- HIDE_USER_API_KEY (optional)
  - If you don't want users to fill in the API Key themselves, set this environment variable to 1.
- DISABLE_GPT4 (optional)
  - If you don't want users to use GPT-4, set this environment variable to 1.
- HIDE_BALANCE_QUERY (optional)
  - If you don't want users to query the balance, set this environment variable to 1.
- R2_ACCOUNT_ID (optional)
  - Cloudflare R2 account ID, required for using the DALL-E plugin.
- R2_ACCESS_KEY_ID (optional)
  - Cloudflare R2 access key ID, required for using the DALL-E plugin.
- R2_SECRET_ACCESS_KEY (optional)
  - Cloudflare R2 secret access key, required for using the DALL-E plugin.
- R2_BUCKET (optional)
  - Cloudflare R2 Bucket name, required for using the DALL-E plugin.

**Deployment**
Container Deployment (Recommended)
Docker version needs to be 20 or above, otherwise, it will prompt that the image is not found.
⚠️ Note: The docker version will most of the time lag behind the latest version by 1 to 2 days, so there will be continuous prompts for "updates available", which is normal.

docker run -d -p 3000:3000 \
   -e OPENAI_API_KEY="sk-xxxx" \
   -e CODE="page access password" \
   gosuto/chatgpt-next-web-langchain
You can also specify a proxy:

docker run -d -p 3000:3000 \
   -e OPENAI_API_KEY="sk-xxxx" \
   -e CODE="page access password" \
   --net=host \
   -e PROXY_URL="http://127.0.0.1:7890" \
   gosuto/chatgpt-next-web-langchain
If your local proxy requires a username and password, use:

-e PROXY_URL="http://127.0.0.1:7890 user password"
If you need to specify other environment variables, please add -e environment variable=environment variable value to the above command.
