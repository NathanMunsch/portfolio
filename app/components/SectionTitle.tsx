export default function SectionTitle({ title }: { title: string }) {
    return (
        <h2 className="text-4xl font-bold">
            <span className="mr-2 text-mainBlue">
                &#47;&#47;
            </span>
            {title}
        </h2>
    );
}