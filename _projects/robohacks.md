---
# PROJECT PAGE (see topological-mapping.md for explanations)
order: 4

title: "RoboHacks 2024 robot"
label: "arena / Zero Waste"
summary: "A waste-collecting robot made of cardboard and an ESP32, awarded most unique design at McGill's RoboHacks."

search_description: "Waste-collecting robot by Lara Landauro's team at McGill RoboHacks 2024, awarded most unique design."

cover:
  image: "robohacks.jpg"
  alt: "Cardboard robot with yellow wheels and green flaps driving on the competition floor"
  caption: "Our robot during its run"
  focus: "30% 50%"
  wide: false

# Video, shown instead of the main picture on the project page. The file goes in videos/.
video:
  file: "robohacks.mp4"
  alt: "Video of the robot driving through the RoboHacks arena"
  caption: "Our robot's run at RoboHacks 2024"

links:
  - text: "Code on GitHub"
    url: "https://github.com/llandauro/Robohacks_2024_McGill_Robotics"

facts:
  - label: "when"
    text: "February 2024"
  - label: "where"
    text: "RoboHacks, McGill Robotics"
  - label: "team"
    text: "The Baddiez, 3 people"
  - label: "role"
    text: "Design, building and Python software"
  - label: "tools"
    text: "ESP32, C++, Python"
  - label: "award"
    text: "Most unique design"

gallery: []
---

## The challenge

RoboHacks 2024 had a **Zero Waste** theme: teams built a robot to collect waste around an arena.

## The robot

Our team of three built it around an **ESP32** microcontroller. It has a rotating sweeper to pick things up, a storage compartment with a door that opens and closes, and two drive motors.

## My part

I did most of the **design and building** of the robot, and wrote the **Python program** that drives it: it links keyboard controls to the robot's commands, sends them over Wi-Fi, and runs a timed automatic sequence for the mountain part of the arena.
