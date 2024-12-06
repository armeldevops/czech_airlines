// lessons.ts
export type Lesson = {
  stage: string,
  title: string;
  type: string;
  createdAt: string;
  description: string;
  progress: number;
  owner: string;
};

export const Lessons: Lesson[] = [
  {
    stage: 'Lesson 1',
    title: "Introduction to DevOps - Part 1",
    type: "Video",
    createdAt: "5mn",
    description: "The basis for  international air traffic laws",
    progress: 30,
    owner: "Armel",
  },
  {
    stage: 'Lesson 1',
    title: "Introduction to DevOps - Part 2",
    type: "Video",
    createdAt: "5mn",
    description: "The basis for  international air traffic laws",
    progress: 50,
    owner: "Armel",
  },
  {
    stage: 'Lesson 1',
    title: "Introduction to DevOps - Part 3",
    type: "Video",
    createdAt: "5mn",
    description: "The basis for  international air traffic laws",
    progress: 50,
    owner: "Armel",
  },
];
