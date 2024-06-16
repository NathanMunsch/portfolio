import Image from 'next/image';

interface Experience {
    image: string;
    imageWidth: number;
    imageHeight: number;
    name: string;
    type: string;
    startDate: string;
    endDate: string;
    duration: string;
    description: string;
    details: string[];
}

export default function ExperiencesGrid({ experiences }: { experiences: Experience[] }) {
    return (
        <div className="grid grid-cols-3 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4">
            {experiences.map((experience, index) => (
                <div key={index} className="bg-white rounded-lg shadow-xl">
                    <div className="h-40 flex items-center justify-center">
                        <Image src={experience.image} width={experience.imageWidth} height={experience.imageHeight} alt={experience.name} />
                    </div>
                    <div className="p-6 h-64">
                        <h3 className="text-2xl font-bold">{experience.name}</h3>
                        <p className="text-gray-600">📜 {experience.type}</p>
                        <p className="text-gray-600">📅 {experience.startDate} - {experience.endDate}</p>
                        <p className="text-gray-600 mb-2">🕒 {experience.duration}</p>
                        <p className="text-gray-600">{experience.description}</p>
                        {experience.details?.length > 0 && (
                            <div className="mt-4">
                                <h4 className="text-lg font-bold">Détails</h4>
                                <ul className="list-disc list-inside">
                                    {experience.details.map((detail, detailIndex) => (
                                        <li key={detailIndex}>{detail}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}
