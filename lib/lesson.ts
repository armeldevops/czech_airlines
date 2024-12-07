// lessons.ts
export type Lesson = {
  id: string,
  stage: string,
  title: string;
  type: string;
  createdAt: string;
  description: string;
  progress: number;
  owner: string;
  urlVideo: string;
  durations: string;
  level: string,
};

export const Lessons: Lesson[] = [
  {
    id: "1",
    stage: 'Lesson 1',
    title: "Introduction to DevOps - Part 1",
    type: "Video",
    createdAt: "5mn",
    description: "The basis for  international air traffic laws",
    progress: 30,
    owner: "Armel",
    urlVideo: `https://www.youtube.com/watch?v=ZmPkp1xWUbM`,
    durations: "5m 60",
    level: "Medium"
  },
  {
    id: "2",
    stage: 'Lesson 1',
    title: "Introduction to DevOps - Part 2",
    type: "Video",
    createdAt: "5mn",
    description: "The basis for  international air traffic laws",
    progress: 50,
    owner: "Armel",
    urlVideo: `https://www.youtube.com/watch?v=ZmPkp1xWUbM`,
    durations: "5m 60",
    level: "Intermediate"
  },
  {
    id: "3",
    stage: 'Lesson 1',
    title: "Introduction to DevOps - Part 3",
    type: "Video",
    createdAt: "5mn",
    description: "The basis for  international air traffic laws",
    progress: 50,
    owner: "Armel",
    urlVideo: `https://www.youtube.com/watch?v=ZmPkp1xWUbM`,
    durations: "5m 60",
    level: "Medium"
  },
];
