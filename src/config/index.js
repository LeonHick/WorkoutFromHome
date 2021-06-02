import navBarItems from "./NavbarItems";

const config = {
  navBarItems: navBarItems,
  routineUrlStructure: (name) => `show?routine=${name}`,
};

export default config;
