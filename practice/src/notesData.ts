export type data = {
  subject: string;
  classes: {
    name: string;
    chapters: {
      name: string;
      title: string;
      notes: string;
    }[];
  }[];
};

export const notesData: data[] = [
  {
    subject: "physics",
    classes: [
      {
        name: "class-11",
        chapters: [
          {
            name: "chap-1",
            title: "Motion in a Straight Line",
            notes: "motion notes",
          },
          {
            name: "chap-2",
            title: "Laws of Motion",
            notes: "laws of motion notes",
          },
        ],
      },
      {
        name: "class-12",
        chapters: [
          {
            name: "chap-1",
            title: "Electrostatics",
            notes: "electrostatics notes",
          },
          {
            name: "chap-2",
            title: "Current Electricity",
            notes: "current electricity notes",
          },
        ],
      },
    ],
  },
  {
    subject: "chemistry",
    classes: [
      {
        name: "class-11",
        chapters: [
          {
            name: "chap-1",
            title: "Some Basic Concepts of Chemistry",
            notes: "basic concepts of chem notes",
          },
          { name: "chap-2", title: "Structure of Atom", notes: "atoms notes" },
        ],
      },
    ],
  },
];
