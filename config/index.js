import fs from "fs"

export const getProjects = () => {
  const projects = JSON.parse(fs.readFileSync("./config/data.json", { encoding: "utf-8" })).projects
  return projects
}