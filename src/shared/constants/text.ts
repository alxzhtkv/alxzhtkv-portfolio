export interface WordI {
  word: string;
  position: number;
}

export interface TextI {
  line: WordI[];
  scrollposition: number;
}

export const textArr: TextI[] = [
  {
    line: [
      {
        word: "I",
        position: 0.01
      },
      {
        word: "have",
        position: 0.06
      },
      {
        word: "a",
        position: 0.12
      },
      {
        word: "strong",
        position: 0.18
      },
      {
        word: "focus",
        position: 0.24
      },
      {
        word: "on",
        position: 0.3
      },
 
    ], 
    scrollposition: 0.2
  },
  {
    line: [
      {
        word: "creating",
        position: 0.01
      },
      {
        word: "dynamic, ",
        position: 0.06
      },
      {
        word: "user-friendly",
        position: 0.12
      }
    ],
    scrollposition: 0.5
  },
  {
    line: [
      {
        word: "and",
        position: 0.01
      },
      {
        word: "visually",
        position: 0.06
      },
      {
        word: "appealing",
        position: 0.12
      },
      {
        word: "web",
        position: 0.18
      },
    
    ],
    scrollposition: 0.7
  },
  {
    line: [
      {
        word: "applications.",
        position: 0.01
      },
      {
        word: "My",
        position: 0.06
      },
      {
        word: "work",
        position: 0.12
      },
      {
        word: "is",
        position: 0.18
      },
      {
        word: "driven",
        position: 0.24
      },
      
        
    ],
    scrollposition: 0.9
  },
  {
    line: [
      {
        word: "by",
        position: 0.06
      },
      {
        word: "a",
        position: 0.12
      },
      {
        word: "love",
        position: 0.18
      },
      {
        word: "for",
        position: 0.24
      },
      {
        word: "clean",
        position: 0.3
      },
      {
        word: "code,",
        position: 0.36
      }
    ],
    scrollposition: 1.1
  },
  {
    line: [
      {
        word: "attention",
        position: 0.12
      },
      {
        word: "to",
        position: 0.18
      },
      {
        word: "detatail,",
        position: 0.24
      },
      {
        word: "and",
        position: 0.3
      },

    ],
    scrollposition: 1.4
  },
  {
    line: [
      {
        word: "delivering",
        position: 0.24
      },
      {
        word: "seamless",
        position: 0.3
      },
      {
        word: "user",
        position: 0.36
      },
      {
        word: "experiences.",
        position: 0.42
      }
    ],
    scrollposition: 1.5
  }
];
