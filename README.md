# How to edit this website

You only need to touch `_data/`, `_projects/` and `images/`.

| To change | Edit |
|---|---|
| Name and menu labels | `_data/site.yml` |
| Home page: text, portrait, sliding pictures, cards, LinkedIn link | `_data/home.yml` |
| Experience page (CV): jobs, education, sliding pictures | `_data/experience.yml` |
| A project | its file in `_projects/` |
| Pictures | add the file to `images/`, then write its name in the matching file above |

Each file starts with comments (lines beginning with `#`) that explain it.

## Common changes

- **Add a job:** in `_data/experience.yml`, copy a block from `- dates:` to its last bullet, paste it at the top of `jobs:` and change the text.
- **Replace a picture:** upload the new one to `images/`, then change the file name after `image:` and its description after `alt:`. File names must match exactly, including capital letters.
- **Add a project:** copy a file in `_projects/`, give it a new name (for example `robot-arm.md`) and change its `order`. The menu and the "Next project" button update themselves.
- **Remove a project:** delete its file.

## Two rules

- Keep the quotes around short texts: `title: "My title"`. For a quote inside, write `\"`.
- Keep the indentation (the spaces at the start of lines), and use spaces, not tabs.

## Publishing

**On github.com:** open a file, click the pencil, edit, then "Commit changes". For pictures, open `images/` and choose "Add file > Upload files".

**In VS Code:** edit, then commit and push.

The site usually updates within a few minutes. If it does not, look for a red cross in the "Actions" tab of the repository: the message names the file with the mistake, and the previous version normally stays online.
