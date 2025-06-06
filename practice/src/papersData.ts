export type Paper = {
  subject: string;
  classes: {
    name: string;
    papers: {
      id: string;
      paperTitle: string;
      description: string;
      year: string;
      link: string;
    }[];
  }[];
};

export const papersData: Paper[] = [
  {
    subject: "chemistry",
    classes: [
      {
        name: "class-11",
        papers: [
          {
            id: "1",
            paperTitle: "Class 11 Chemistry - PYQ 2023",
            description:
              "Previous year question paper for Class 11 Chemistry - 2023",
            year: "2023",
            link: "/pdfs/chemistry-class-11-2023.pdf",
          },
          {
            id: "2",
            paperTitle: "Class 11 Chemistry - Sample Paper 1",
            description: "Sample paper for Class 11 Chemistry",
            year: "2024",
            link: "/pdfs/chemistry-class-11-sample1.pdf",
          },
        ],
      },
      {
        name: "class-12",
        papers: [
          {
            id: "3",
            paperTitle: "Class 12 Chemistry - PYQ 2022",
            description: "Previous year paper for Class 12 Chemistry - 2022",
            year: "2022",
            link: "/pdfs/chemistry-class-12-2022.pdf",
          },
          {
            id: "4",
            paperTitle: "Class 12 Chemistry - Sample Paper",
            description: "Sample paper for Class 12 Chemistry",
            year: "2024",
            link: "/pdfs/chemistry-class-12-sample.pdf",
          },
        ],
      },
    ],
  },
  {
    subject: "physics",
    classes: [
      {
        name: "class-10",
        papers: [
          {
            id: "5",
            paperTitle: "Class 10 Physics - PYQ 2022",
            description: "Previous year paper for Class 10 Physics - 2022",
            year: "2022",
            link: "/pdfs/physics-class-10-2022.pdf",
          },
        ],
      },
      {
        name: "class-12",
        papers: [
          {
            id: "6",
            paperTitle: "Class 12 Physics - Sample Paper 2",
            description: "Sample paper for Class 12 Physics",
            year: "2024",
            link: "/pdfs/physics-class-12-sample2.pdf",
          },
          {
            id: "7",
            paperTitle: "Class 12 Physics - PYQ 2021",
            description:
              "Previous year question paper for Class 12 Physics - 2021",
            year: "2021",
            link: "/pdfs/physics-class-12-2021.pdf",
          },
        ],
      },
    ],
  },
  {
    subject: "maths",
    classes: [
      {
        name: "class-10",
        papers: [
          {
            id: "8",
            paperTitle: "Class 10 Maths - PYQ 2021",
            description: "Question paper for Class 10 Maths - 2021",
            year: "2021",
            link: "/pdfs/maths-class-10-2021.pdf",
          },
        ],
      },
      {
        name: "class-11",
        papers: [
          {
            id: "9",
            paperTitle: "Class 11 Maths - Sample Paper",
            description: "Sample paper for Class 11 Maths",
            year: "2024",
            link: "/pdfs/maths-class-11-sample.pdf",
          },
        ],
      },
      {
        name: "class-12",
        papers: [
          {
            id: "10",
            paperTitle: "Class 12 Maths - PYQ 2023",
            description:
              "Previous year question paper for Class 12 Maths - 2023",
            year: "2023",
            link: "/pdfs/maths-class-12-2023.pdf",
          },
        ],
      },
    ],
  },
];
