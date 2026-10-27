# Dynamic Dance website

**Editing (everyone):** go to `https://YOUR-SITE/admin/`, click **Login with GitHub**, pick a section, edit, then **Publish**. The live site updates in about a minute.

**One-time setup (whoever owns the GitHub org):**
1. Create a GitHub org and a repo named `ORG.github.io`; upload these files. In Settings > Pages, deploy from branch `main`.
2. Add editors under the org's Settings > People (they need write access).
3. Deploy a free OAuth proxy on Cloudflare Workers (github.com/sterlingwes/decap-proxy): create a GitHub OAuth App (callback `https://YOUR-PROXY/callback`), add its ID and secret as Worker secrets `GITHUB_OAUTH_ID` and `GITHUB_OAUTH_SECRET`.
4. In `admin/config.yml`, set `repo` and `base_url`.
5. In the editor's "Links" section, set the Formspree contact form link.
6. Download the logo and photos from Squarespace and upload them in the editor.
