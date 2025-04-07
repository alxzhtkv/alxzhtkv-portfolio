import { hardSkills, softSkills } from "@shared/constants/skills";

export function Resume() {
  return (
    <div className="wrapper w-full px-11">
      {/* grid grid-cols-3 gap-11 */}
      <div className="w-full justify-between items-start flex flex-wrap gap-20 relative">
        <Education />
        <Skills />
        <Experience />
        <Other />

        <div className="flex flex-1 min-w-[553px] relative">
          <div className="absolute top-0 left-0" >
        <span className="text-[120px] uppercase text-default cursor-pointer">alxzhtkv@gmail.com</span>
          </div>
        </div>
        <div className="flex flex-1 min-w-[553px]" />
      </div>
    </div>
  );
}

function Education() {
  return (
    <div className="flex flex-1 min-w-[553px] flex-col gap-5">
      <p className="text-default uppercase underline font-medium text-3xl">Education</p>
      <div className="flex flex-col gap-5 w-full">
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-2 flex-1">
            <p className="text-[22px] leading-[105%] ">
              Belarusian state of university of Informatics and Radioelectronic
            </p>
            <span className="text-default opacity-50 text-lg">
              Information system and technologies in logistics (Full time)
            </span>
          </div>
          <div className="flex flex-col justify-between h-full gap-2  flex-[0.4]">
            <p className="text-[22px] leading-[105%]  text-right">Belarus, Minsk</p>
            <span className="text-default opacity-50 text-lg text-right">2020 - 2024</span>
          </div>
        </div>
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-2 flex-1">
            <p className="text-[22px] leading-[105%] ">English school «EnglishPapa»</p>
            <span className="text-default opacity-50 text-lg">Intermediate level (B1)</span>
          </div>
          <div className="flex flex-col justify-between h-full gap-2 flex-[0.4]">
            <p className="text-[22px] leading-[105%]  text-right">Belarus, Minsk</p>
            <span className="text-default opacity-50 text-lg text-right">Sep 2022 - Feb 2023</span>
          </div>
        </div>
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-2 flex-1">
            <p className="text-[22px] leading-[105%]">English school «EnglishGroup»</p>
            <span className="text-default opacity-50 text-lg ">Upper Intermediate level (B2)</span>
          </div>
          <div className="flex flex-col justify-between  gap-2 h-full flex-[0.4]">
            <p className="text-[22px] leading-[105%]  text-right">Belarus, Minsk</p>
            <span className="text-default opacity-50 text-lg text-right">
              Jan 2025 - now
              <br />
              Feb 2023 - Jul 2023
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <div className="flex flex-1 min-w-[553px] flex-col gap-7">
      <div className="w-full flex flex-col gap-5">
        <p className="text-default uppercase underline font-medium text-3xl">Hard Skills</p>
        <div className="w-full flex flex-wrap gap-[10px]">
          {hardSkills.map((skill) => (
            <Skill title={skill} />
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col gap-7">
        <p className="text-default uppercase underline font-medium text-3xl">Soft Skills</p>
        <div className="w-full flex flex-wrap gap-[10px]">
          {softSkills.map((skill) => (
            <Skill title={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Skill({ title }: { title: string }) {
  return (
    <div className="flex-[auto] h-[32px] px-5 flex items-center justify-center rounded-[14px] border border-white/50">
      <p className="text-default text-xl">{title}</p>
    </div>
  );
}

export function Experience() {
  return (
    <div className="flex flex-1 min-w-[553px] flex-col gap-7">
      <p className="text-default uppercase underline font-medium text-3xl">Work experience</p>
      <div className="flex flex-col gap-2 w-full">
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-2 flex-1">
            <p className="text-[22px] leading-[105%]">Frontend developer</p>
          </div>
          <div className="flex flex-col justify-between h-full gap-2 flex-[0.4]">
            <p className="text-[22px] leading-[105%]  text-right">Belarus, Minsk</p>
            <span className="text-default opacity-50 text-lg text-right">Aug 2023 - now</span>
          </div>
        </div>
        <div className="flex flex-col gap-[10px]">
          <p className="text-default opacity-70 text-lg text-justify leading-[125%]">
            Currently working in a team to build the complete frontend infrastructure for a web-based game account
            platform. This includes designing and developing web interfaces and pages that support user account
            management, game data visualization, and interactive features for players.
          </p>
          <p className="text-default opacity-70 text-lg text-justify leading-[125%]">
            Built a landing page for a platform aimed at architects and interior designers. The platform allows users to
            upload drawings, attach files, and describe objects on sketches. Also worked on the user onboarding
            tutorial, UI hints, and other logic components of the platform.
          </p>
          <p className="text-default opacity-70 text-lg text-justify leading-[125%]">
            Developed a React Native application with features for selecting workouts, viewing instructions, and
            tracking workout stats, and worked on another React Native app that transforms users' voices with various
            effects.
          </p>
        </div>
      </div>
    </div>
  );
}

export function Other() {
  return (
    <div className="flex flex-1 flex-col gap-7 min-w-[553px]">
      <div className="flex flex-col gap-5 w-full">
        <div className="flex flex-col gap-5">
          <p className="text-default uppercase underline font-medium text-3xl">Interest in</p>
          <p className="w-full text-xl text-default ">
            Programming, UI/UX, Digital Products, Design Systems, Design, Art, Reading, Gym &amp;&nbsp;Running
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-5 w-full">
        <p className="text-default uppercase underline font-medium text-3xl">Languages</p>

        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-start">
            <p className="text-xl text-default">English </p>
            <p className="text-lg opacity-50  text-right">Upper Intermediate level (B2) </p>
          </div>
          <div className="flex justify-between items-start">
            <p className="text-xl text-default">German </p>
            <p className="text-lg opacity-50  text-right">Pre-intermediate level (A2) </p>
          </div>
          <div className="flex justify-between items-start">
            <p className="text-xl text-default">Russian </p>
            <p className="text-lg opacity-50  text-right">Native speaker</p>
          </div>
        </div>
      </div>
    </div>
  );
}
