import Technologie from "./components/Technologie";
import SectionTitle from "./components/SectionTitle";
import Header from "./components/Header";
import DownloadButton from "./components/DownloadButton";
import Image from "next/image";
import ProjectsGrid from "./components/ProjectsGrid";
import ExperiencesGrid from "./components/ExperiencesGrid";
import EducationsGrid from "./components/EducationsGrid";
import FancyButton from "./components/FancyButton";

export default function Home() {
  return (
    <main>
      <DownloadButton />
      <Header />

      {/* < --- Title ---> */}
      <div id="home" className="flex h-screen flex-col items-center justify-center gap-3">
        <h1 className="text-center text-8xl sm:text-7xl font-bold">
          Nathan Munsch
          <span className="text-target text-2xl text-mainBlue">■</span>
        </h1>
        <p className="text-center text-4xl">
          <span className="font-bold text-mainBlue">&lt;</span>
          Développeur
          <span className="font-bold text-mainBlue"> /&gt;</span>
        </p>
      </div>

      {/* < --- About me ---> */}
      <div id="about" className="flex flex-wrap justify-center pb-10">
        <SectionTitle title="À propos" />
      </div>
      <div className="flex flex-row justify-center pb-10 mx-96 md:mx-2 lg:mx-2 gap-4 xl:mx-32 items-center">
        <p className="text-xl md:text-lg text-justify">Passionné par le développement informatique avec une expérience enrichie par l&apos;alternance et les stages, je maîtrise divers langages et outils de programmation. En dehors de mon travail et de mes études, durant mon temps libre, je suis passionné par la moto et les jeux vidéo.</p>
        <Image className="rounded-lg md:hidden lg:hidden" src="/logo/aboutme.png" width={150} height={150} alt="À propos de moi" />
      </div>

      {/* < --- Skills ---> */}
      <div id="skills" className="flex flex-wrap justify-center pb-10">
        <SectionTitle title="Compétences" />
      </div>
      <div className="flex flex-wrap justify-center gap-4 mx-96 md:mx-0 lg:mx-0 xl:mx-32 pb-10">
        <Technologie name="MySQL" src="/logo/mysql.svg" />
        <Technologie name="MariaDB" src="/logo/mariadb.png" />
        <Technologie name="SQL Server" src="/logo/sqlserver.svg" />
        <Technologie name="MongoDB" src="/logo/mongodb.png" />
        <Technologie name="SQL" src="/logo/sql.png" />
        <Technologie name="C" src="/logo/c.png" />
        <Technologie name="C++" src="/logo/cpp.png" />
        <Technologie name="C#" src="/logo/csharp.png" />
        <Technologie name="Visual Basic" src="/logo/vb.png" />
        <Technologie name="Python" src="/logo/python.png" />
        <Technologie name="Java" src="/logo/java.png" />
        <Technologie name="PHP" src="/logo/php.png" />
        <Technologie name="HTML" src="/logo/html5.png" />
        <Technologie name="CSS" src="/logo/css3.png" />
        <Technologie name="JavaScript" src="/logo/js.webp" />
        <Technologie name="Laravel" src="/logo/laravel.png" />
        <Technologie name="Asp.Net Core" src="/logo/dotnetcore.png" />
        <Technologie name=".Net" src="/logo/dotnet.png" />
        <Technologie name="Vue.js" src="/logo/vuejs.webp" />
        <Technologie name="Tailwind CSS" src="/logo/tailwindcss.png" />
        <Technologie name="Next.js" src="/logo/nextjs.png" />
        <Technologie name="Docker" src="/logo/docker.png" />
        <Technologie name="Git" src="/logo/git.png" />
        <Technologie name="Linux" src="/logo/linux.png" />
        <Technologie name="Réseaux" src="/logo/network.png" />
      </div>

      {/* < --- My projects ---> */}
      <div id="projects" className="flex flex-wrap justify-center pb-10">
        <SectionTitle title="Mes projets" />
      </div>
      <div className="pb-10 mx-96 md:mx-2 lg:mx-2 xl:mx-32">
        <ProjectsGrid projects={[
          {
            name: "TwitterLite",
            description: "Création d'une version allégée du réseau social Twitter.",
            link: "https://github.com/NathanMunsch/TwitterLite",
            image: "/logo/twitterlite.png",
            imageWidth: 280,
            imageHeight: 280,
            technologies: ["C#", "ASP.NET Core", "Vue.js", "Vuetify", "Entity Framework", "SQL Server"]
          }
        ]} />
      </div>

      {/* < --- My experiences ---> */}
      <div id="experiences" className="flex flex-wrap justify-center pb-10">
        <SectionTitle title="Mes expériences" />
      </div>
      <div className="pb-10 mx-96 md:mx-2 lg:mx-2 xl:mx-32">
        <ExperiencesGrid experiences={[
          {
            name: "Schiller Médical",
            type: "Alternance",
            startDate: "04/09/2023",
            endDate: "30/08/2024",
            duration: "1 an",
            description: "Développement en PHP Laravel d’un site web interne destiné à la production des appareils de l’entreprise.",
            details: [],
            image: "/logo/schiller.png",
            imageWidth: 340,
            imageHeight: 340
          }
        ]} />
      </div>

      {/* < --- Education ---> */}
      <div id="education" className="flex flex-wrap justify-center pb-10">
        <SectionTitle title="Mes formations" />
      </div>
      <div className="pb-10 mx-96 md:mx-2 lg:mx-2 xl:mx-32">
        <EducationsGrid educations={[
          {
            name: "BTS SIO",
            completeName: "Services Informatiques aux Organisations",
            specialty: "Solutions logicielles et applications métiers",
            school: "Lycée René Cassin",
            location: "Strasbourg",
            image: "/logo/lycee_rene_cassin.png",
            imageWidth: 200,
            imageHeight: 200,
            date: "2021 - 2023"
          }
        ]} />
      </div>

      {/* < --- Contact ---> */}
      <div id="contact" className="flex flex-wrap justify-center pb-10">
        <SectionTitle title="Contact" />
      </div>
      <div className="flex flex-wrap justify-center pb-10 mx-96 md:mx-2 xl:mx-32 gap-10">
        <FancyButton name="GitHub" link="https://github.com/NathanMunsch" />
        <FancyButton name="LinkedIn" link="https://www.linkedin.com/in/nathan-m-38204b220/" />
        <FancyButton name="nathanmunschpro@gmail.com" link="mailto:nathanmunschpro@gmail.com" />
      </div>
    </main>
  );
}