import Image from 'next/image';

interface Educations {
    image: string;
    imageWidth: number;
    imageHeight: number;
    name: string;
    specialty: string;
    school: string;
    date: string;
}

export default function ExperiencesGrid({ educations }: { educations: Educations[] }) {
    return (
        <div className="grid grid-cols-3 gap-4">
            {educations.map((education, index) => (
                <div key={index} className="bg-white rounded-lg shadow-xl"> 
                    <div className="h-40 flex items-center justify-center">
                        <Image src={education.image} width={education.imageWidth} height={education.imageHeight} alt={education.name} />
                    </div>
                    <div className="p-6 h-64">
                        <h3 className="text-2xl font-bold mb-4">{education.name}</h3>
                        <p className="text-gray-700">{education.specialty}</p>
                        <p className="text-gray-700">{education.school}</p>
                        <p className="text-gray-700">{education.date}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
