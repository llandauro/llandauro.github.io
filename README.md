# How to edit this website

You only need to touch `_data/`, `_projects/`, `images/` and `videos/`.

| To change | Edit |
|---|---|
| Name, menu labels, LinkedIn link, email | `_data/site.yml` |
| Home page: intro, portrait, short facts, about me, "Recently" list | `_data/home.yml` |
| Experience page (CV): education, jobs, awards, skills | `_data/experience.yml` |
| Projects page: title and the short "More projects" list | `_data/projects.yml` |
| A project: text, pictures, paper, links | its file in `_projects/` |
| Videos | add the file to `videos/` (keep it under about 10 MB), then write its name after `video:` in the project file, as in `robohacks.md` |
| Pictures | add the file to `images/`, then write its name in the matching file above |

Each file starts with comments (lines beginning with `#`) that explain it.

## Common changes

- **Add a job:** in `_data/experience.yml`, copy a block from `- dates:` to its last bullet, paste it at the top of the right `jobs:` list (research, teaching or leadership) and change the text.
- **Replace a picture:** upload the new one to `images/`, then change the file name after `image:` and its description after `alt:`. File names must match exactly, including capital letters.
- **Add a project:** copy a file in `_projects/`, give it a new name (for example `robot-arm.md`) and change its `order`. The home page, the projects page and the "Next project" link update themselves.
- **Remove a project:** delete its file.
- **Add pictures to a project:** upload them to `images/`, then replace `gallery: []` in the project file with:

  ```yaml
  gallery:
    - image: "name.jpg"
      alt: "What the picture shows"
      caption: "Text under the picture"
  ```

  Pictures are cropped to 3:2, so landscape ones work best.
- **Choose what shows on the home page:** it displays the 3 projects with the lowest `order`, the first one large.

## Two rules

- Keep the quotes around short texts: `title: "My title"`. For a quote inside, write `\"`.
- Keep the indentation (the spaces at the start of lines), and use spaces, not tabs.

## Publishing

**On github.com:** open a file, click the pencil, edit, then "Commit changes". For pictures, open `images/` and choose "Add file > Upload files".

**In VS Code:** edit, then commit and push.

The site usually updates within a few minutes. If it does not, look for a red cross in the "Actions" tab of the repository: the message names the file with the mistake, and the previous version normally stays online.
