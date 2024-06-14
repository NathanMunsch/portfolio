'use client';

import Image from 'next/image';

export default function DownloadButton() {
    const downloadCV = () => {
        window.open("/cv_nathan_munsch.pdf", "_blank");
    }

    return (
        <div className="fixed bottom-0 left-0 w-10 h-10 m-4 cursor-pointer">
            <button onClick={downloadCV} aria-label="Download my CV" className="flex items-center justify-center w-full h-full">
                <Image src="/logo/download.png" width={60} height={60} alt="Download my CV" />
            </button>
        </div>
    );
}
