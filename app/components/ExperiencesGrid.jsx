import Image from 'next/image';

export default function ExperiencesGrid({ experiences }) {
    return (
        <div className="grid grid-cols-3 gap-4">
            {experiences.map((project, index) => (
                <div className="bg-white rounded-lg shadow-xl">
                    <div className="h-40 flex items-center justify-center">
                        <Image src={project.image} width={project.imageWidth} height={project.imageHeight} alt={project.name} />
                    </div>
                    <div className="p-6 h-64">
                        <h3 className="text-2xl font-bold mb-4">{project.name}</h3>
                        <p className="text-gray-700">{project.description}</p>
                        <a href={project.link} target="_blank" className="block text-blue-600 hover:underline mt-4">Découvrir le projet 🚀</a>
                        <div className="flex flex-row flex-wrap justify-evenly gap-1 pt-7">
                            {project.technologies.map((technology, index) => (
                                <p className="border border-gray-300 rounded-full px-2 py-1 text-sm">{technology}</p>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}