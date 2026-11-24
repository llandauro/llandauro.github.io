---
# PROJECT PAGE
# - To add a project, copy this file inside _projects/. The file name becomes the
#   page address: robot-arm.md -> /projects/robot-arm.html (no spaces or accents).
# - To remove a project, delete its file.
# - Keep the quotes "..." around short texts. For a quote inside, write \".
# - Pictures: put the file in images/ and write its name here.
# - The main text is at the bottom, after the second line of dashes.
#   "## Title" makes a heading; **bold** and [link text](https://...) work.

# Position among the projects. The lowest number is shown large on the home page.
order: 1

title: "Topological mapping for off-road navigation"
# Small label above the title
label: "forest / ICRA 2025"
summary: "Letting a rover plan, explore and drive through unknown off-trail forest, using only vision and GPS."

# Description shown by search engines
search_description: "Topological mapping for traversability-aware long-range navigation in off-road terrain, ICRA 2025, co-authored by Lara Landauro."

# Main picture. "focus" says which part to keep when it is cropped (left/right, then top/bottom).
cover:
  image: "rover.jpg"
  alt: "Yellow and black rover on a snowy forest trail blocked by fallen birch trees"
  caption: "The rover used for our traversability research"
  focus: "50% 52%"
  # true: full page width (needs a picture at least 1200 pixels wide). false: beside the title.
  wide: false

# Paper: delete this block if the project has none
paper:
  title: "Topological mapping for traversability-aware long-range navigation in off-road terrain"
  authors: "Jean-François Tremblay, Julie Alhosh, Louis Petit, Faraz Lotfi, **Lara Landauro**, David Meger"
  venue: "IEEE International Conference on Robotics and Automation (ICRA) 2025, Atlanta"

# Buttons. The first one is highlighted. Use links: [] for none.
links:
  - text: "Project website"
    url: "https://jefft255.github.io/research/projets/2025/02/13/topological-mapping.html"
  - text: "Paper (arXiv)"
    url: "https://arxiv.org/abs/2410.01925"
  - text: "Video A"
    url: "https://www.youtube.com/watch?v=GZpQKdrs_Rs"
  - text: "Video B"
    url: "https://www.youtube.com/watch?v=i-8RXuMICNI"

# Short facts
facts:
  - label: "when"
    text: "May - August 2024"
  - label: "where"
    text: "Mobile Robotics Lab, McGill"
  - label: "role"
    text: "Co-author, research assistant"
  - label: "award"
    text: "Science Undergraduate Research Award"

# More pictures, 2 per row. Use gallery: [] for none. To add one, copy these 3 lines:
#  - image: "name.jpg"
#    alt: "What the picture shows"
#    caption: "Text under the picture"
gallery: []
---

## The problem

Off-road robots often rely on clear pathways. In a real forest there are none: the robot has to work out by itself where it can safely drive, and how to reach places it has never seen.

## The method

The terrain is represented as a **topological map**: panoramic snapshots, connected by edges that say how traversable the way between them is. Traversability analysis predicts whether a safe path towards a target exists in an image, a policy built on a pretrained vision transformer drives from one snapshot to the next, and a planner chooses which frontier to explore.

The system autonomously explored **two 400 m² forest sites** it had not seen during training, with 13 interventions in 20 minutes on site A and 12 on site B.

## My part

I joined the project through a Science Undergraduate Research Award, supervised by Prof. David Meger. I compared traversability estimation models in extreme off-road terrain, tested our advances on the rover every week in the Gault Nature Reserve, and edited the paper.
